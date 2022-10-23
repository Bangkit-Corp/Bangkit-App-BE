let pengguna_sekarang = null;

async function login() {
	let email = document.getElementById("email").value;
	let password = document.getElementById("password").value;
	let dataCheck = await fetch(`https://6350b8e978563c1d82c6c2d8.mockapi.io/api/v1/users`);
	let arr = await dataCheck.json();
	let findIndex = arr.findIndex((x) => x.email == email);
	if (findIndex !== -1) {
		if (arr[findIndex].password == password) {
			sessionStorage.setItem("User", JSON.stringify({ email, password }));
			return (window.location = "home.html");
		} else {
			return Swal.fire("Error", "Password atau Email Salah", "error");
		}
	} else {
		return Swal.fire("Error", "Email Tidak Terdaftar", "error");
	}
}

function checkUserSession() {
	pengguna_sekarang = JSON.parse(sessionStorage.getItem("User"));
}

window.onload = function () {
	checkUserSession();
	if (pengguna_sekarang != null) {
		window.location = "home.html";
	}
};
