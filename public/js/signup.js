let signupForm = document.getElementById("signup__form");
if(signupForm != null){
  signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Lấy dữ liệu từ form
    const username = signupForm['username'].value;
    const email = signupForm['email'].value;
    const password = signupForm['password'].value;
    
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function() {
      db.collection("users").add({
        username: username,
        email: email,
        password: password
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id); 
        // Chuyển hướng người dùng tới trang đăng nhập sau khi form được gửi thành công và dữ liệu được lưu trữ trong Firestore
        Swal.fire({
          title: "Đăng ký thành công rồi nhé !",
          text: "Rất vui vì đã gặp bạn moaw moaw....",
          icon: "success",
        }).then(function(){
          window.location = `signin.html`
        })
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
        // Xử lý lỗi khi không thể thêm dữ liệu vào Firestore
        Swal.fire({
          title: "Đăng ký không thành công !",
          text: "Không thể thêm dữ liệu ",
          icon: "error",
        });
      });
    }).catch(function(error) {
      // Handle errors here
      var message = error.message
      console.log(error);
      Swal.fire({
        title: "Đăng ký không thành công!",
        text : message,
        icon: "error",
      });
    });
  });
}