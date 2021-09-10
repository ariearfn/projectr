const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// function onSignIn(googleUser) {
//     var profile = googleUser.getBasicProfile();
//     $("#name").text(profil.getName());
//     $("#email").text(profil.getEmail());
//     $("#image").attr('src', profil.getImageUrl());
//     $(".data").css("display", "block");
//     $(".g-signin2").css("display", "none");
    
//   }

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        alert("You have been signed out successfully");
        $(".g-signin2").css("display", "block");
        $(".data").css("display", "none");
    });
}