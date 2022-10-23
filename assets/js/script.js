let pengguna_sekarang = null;

function logout() {
	Swal.fire({
		title: `Logout`,
		html: `Apakah Anda Yakin?`,
		icon: "question",
		confirmButtonText: `Ya, Logout`,
		showLoaderOnConfirm: true,
		preConfirm: () => {
			sessionStorage.removeItem("User");
		},
	}).then((result) => {
		if (result.isConfirmed) {
			window.location = "login.html";
		}
	});
}

function checkUserSession() {
	pengguna_sekarang = JSON.parse(sessionStorage.getItem("User"));
}

window.onload = function () {
	checkUserSession();
	if (pengguna_sekarang != null) {
		document.getElementById("ini_login").remove();
		document.getElementById("section_register").remove();
	} else {
		document.getElementById("ini_logout").remove();
	}
};
