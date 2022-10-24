let pengguna_sekarang = null;

async function register() {
	let email = document.getElementById("email").value;
	let password = document.getElementById("password").value;
	let confirmPassword = document.getElementById("confirmPassword").value;

	if (email && password && confirmPassword) {
		if (checkSpace(email) || checkSpace(password) || checkSpace(confirmPassword)) {
			return Swal.fire("Error", "Tidak Boleh Ada Spasi!", "error");
		}
		if (password.length < 6 && confirmPassword.length < 6) {
			return Swal.fire("Error", "Password Tidak Boleh Kurang Dari 6 Karakter!", "error");
		}
		if (password != confirmPassword) {
			return Swal.fire("Error", "Password Tidak Sama!", "error");
		}
	} else {
		return Swal.fire("Error", "Password Tidak Sama!", "error");
	}

	let dataCheck = await fetch(`https://6350b8e978563c1d82c6c2d8.mockapi.io/api/v1/users`);
	let arr = await dataCheck.json();
	let findIndex = arr.findIndex((x) => x.email == email);
	if (findIndex !== -1) return Swal.fire("Error", "Email Sudah Pernah Terdaftar Sebelumnya!", "error");

	let data = { email, password };
	fetch(`https://6350b8e978563c1d82c6c2d8.mockapi.io/api/v1/users`, {
		method: "POST",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((res) => res.json())
		.then((res) => {
			console.log(res);
			window.location = "login.html";
		});
}

function checkSpace(string) {
	return string.match(/^ *$/) !== null;
}

function checkUserSession() {
	pengguna_sekarang = JSON.parse(sessionStorage.getItem("User"));
}

window.onload = function () {
	checkUserSession();
	if (pengguna_sekarang != null) {
		window.location = "index.html";
	}
};
