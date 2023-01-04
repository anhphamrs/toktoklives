var app = firebase.initializeApp(firebaseConfig);
// Initialize Cloud Firestore through Firebase
const db = firebase.firestore(app);

let signupForm = document.getElementById("signup__form");
signupForm.addEventListener("submit", event => {
  event.preventDefault(); // Ngăn chặn sự kiện submit form mặc định
  // Xử lý sự kiện submit form tại đây
  let nameInput = document.getElementById("username");
  let emailInput = document.getElementById("email");
  let passwordInput = document.getElementById("password");

  let username = nameInput.value;
  let email = emailInput.value;
  let password = passwordInput.value;
  
  db.collection("users").add({
    username: username,
    email: email,
    password: password
  }).then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
      window.location.replace('/signup'); // Chuyển hướng người dùng đến trang đăng nhập
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
  signupForm.submit(); // Gửi form sau khi thêm dữ liệu thành công
});