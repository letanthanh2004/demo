// Lấy tất cả các phần tử có class 'facebook-login' (danh sách phần tử)
var facebookButtons = document.getElementsByClassName('facebook-login');

// Lặp qua tất cả các nút 'facebook-login' và gắn sự kiện onclick
for (var i = 0; i < facebookButtons.length; i++) {
    facebookButtons[i].onclick = function(event) {
        event.preventDefault();
        // Ngăn chặn hành vi mặc định khi click
        window.location.href = 'https://www.facebook.com/dialog/oauth?client_id=104262655564392&redirect_uri=http://localhost/index/facebook&scope=public_profile,email';
        // Thay đổi đường dẫn đăng nhập sang đường dẫn Facebook
    };
}

// Lấy phần tử Google login bằng id (cần thêm id vào HTML)
var googleLoginButton = document.getElementsByClassName('google-login');

// Kiểm tra xem nút có tồn tại trước khi gắn sự kiện
for (var i = 0; i < googleLoginButton.length; i++) {
    googleLoginButton[i].onclick = function(event) {
        event.preventDefault();
        // Ngăn chặn hành vi mặc định khi click
        window.location.href = 'https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&response_type=code&redirect_uri=http://localhost/index/google&client_id=YOUR_GOOGLE_CLIENT_ID';
        // Thay đổi đường dẫn đăng nhập sang đường dẫn Google OAuth
    };
}