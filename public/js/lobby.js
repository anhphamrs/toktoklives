let avatar

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      if (pair[0] == variable) {
        return pair[1];
      }
    }
    return "";
  }

////
var room = getQueryVariable("room"); // Hàm getQueryVariable sẽ lấy giá trị của biến room trong URL

// Điền giá trị biến room vào thẻ input có id là "room-input"
document.getElementById("room").value = room;
let lobbyForm = document.getElementById('lobby__form');

if (lobbyForm) {
  lobbyForm.addEventListener('submit', (e) => {
    e.preventDefault();

    
    if (!avatar) {
      alert('You must select an avatar before joining a room');
      return;
    }

    
    sessionStorage.setItem('display_name', e.target.name.value);
    window.location = `room.html?room=${e.target.room.value}`;
  });

  let avatarOptions = document.getElementsByClassName('avatar__option');

  for (let i = 0; i < avatarOptions.length; i++) {
    avatarOptions[i].addEventListener('click', (e) => {
    for (let i = 0; i < avatarOptions.length; i++) {
        avatarOptions[i].classList.remove('avatar__option__selected');
    }

    e.target.classList.add('avatar__option__selected');
    avatar = e.target.src;
    sessionStorage.setItem('avatar', avatar);

    const your_name = document.getElementById("name").value;
    db.collection('avatars').doc(your_name).set({
        your_avatar: avatar,
    });
    });
  }

  

  lobbyForm.room.addEventListener('keyup', (e) => {
    let cleaned_value = e.target.value.replace(' ', '');
    e.target.value = cleaned_value.toUpperCase();
  });
}