function login() {
    let userEmail = document.getElementById("userNameInput").value;
    let userPassword = document.getElementById("passInput").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    
    let foundUser = users.find(user => user.email === userEmail);

    if (foundUser) {
        if (foundUser.password === userPassword) {
            if (foundUser.action === 0) { // Kiểm tra trạng thái của tài khoản
                // Hiển thị thông báo lỗi nếu tài khoản đang bị chặn
                alert("Tài khoản đang bị chặn");
            } else if (foundUser.action === 1) { // Nếu tài khoản không bị chặn
                localStorage.setItem("nameUser", JSON.stringify(foundUser.name));
                window.location.href = "../index.html";
            }
        } else {
            alert("Mật khẩu không đúng"); 
        }
    } else {
        alert("Email không đúng");
    }
}
