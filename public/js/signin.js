let signinForm = document.getElementById("signin__form");
if(signinForm != null){
  signinForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // Lấy giá trị tên đăng nhập hoặc email và mật khẩu từ form
  const username = document.getElementById("username__email").value;
  const password = document.getElementById("password").value;

    db.collection("users").where("username", "==", username).get()
    .then(function(querySnapshot) {
      // Nếu không tìm thấy người dùng với tên đăng nhập nhập vào, tiến hành tìm với email
      if (querySnapshot.empty) {
        db.collection("users").where("email", "==", username).get()
          .then(function(querySnapshot) {
            // Nếu không tìm thấy người dùng nào, thông báo lỗi
            if (querySnapshot.empty) {
              console.error("Username/Email hoặc mật khẩu không đúng !");
              // Đăng nhập không thành công
              Swal.fire({
                title: "Đăng nhập không thành công !",
                text: "Vui lòng kiểm tra lại thông tin tài khoản.",
                icon: "error",
              });
            } else {
              // Nếu tìm thấy người dùng với email nhập vào, lấy email của người dùng để đăng nhập
              var email = querySnapshot.docs[0].get("email");
              // Gọi hàm signInWithEmailAndPassword của Firebase để đăng nhập
              firebase.auth(app).signInWithEmailAndPassword(email, password)
              .then(function() {
                // Nếu đăng nhập thành công, chuyển hướng người dùng đến trang của bạn
                Swal.fire({
                  title: "Đăng nhập thành công rồi nhé !",
                  text: "Cùng trò chuyện với nhau nào go go ...",
                  icon: "success",
                }).then(function() {
                  window.location = `home.html`
                })
              })
              .catch(function(error) {
                console.error("Username/Email hoặc mật khẩu không đúng !", error);
                // Đăng nhập không thành công
                Swal.fire({
                  title: "Đăng nhập không thành công !",
                  text: "Vui lòng kiểm tra lại thông tin tài khoản.",
                  icon: "error",
                });
              });
            }
          })
          .catch(function(error) {
            console.error("Username/Email hoặc mật khẩu không đúng !", error);
            // Đăng nhập không thành công
            Swal.fire({
              title: "Đăng nhập không thành công!",
              text: "Vui lòng kiểm tra lại thông tin tài khoản.",
              icon: "error",
            });
          });
      } else {
        // Nếu tìm thấy người dùng với user nhập vào, lấy email của người dùng để đăng nhập
        var email = querySnapshot.docs[0].get("email");
        // Gọi hàm signInWithEmailAndPassword của Firebase để đăng nhập
        firebase.auth(app).signInWithEmailAndPassword(email, password)
        .then(function() {
          // Nếu đăng nhập thành công, chuyển hướng người dùng đến trang của bạn
          Swal.fire({
            title: "Đăng nhập thành công rồi nhé !",
            text: "Cùng trò chuyện với nhau nào go go ...",
            icon: "success",
          }).then(function() {
            window.location = `home.html`
          })
        })
        .catch(function(error) {
          console.error("Username/Email hoặc mật khẩu không đúng !", error);
          // Đăng nhập không thành công
          Swal.fire({
            title: "Đăng nhập không thành công !",
            text: "Vui lòng kiểm tra lại thông tin tài khoản.",
            icon: "error",
          });
        });
      }
    })
    .catch(function(error) {
      console.error("Username/Email hoặc mật khẩu không đúng !", error);
      // Đăng nhập không thành công
      Swal.fire({
        title: "Đăng nhập không thành công!",
        text: "Vui lòng kiểm tra lại thông tin tài khoản.",
        icon: "error",
      });
    });
  })
}
