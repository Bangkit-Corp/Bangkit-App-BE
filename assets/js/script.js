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
