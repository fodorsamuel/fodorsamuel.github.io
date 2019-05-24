var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJtYWlsIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6IjVjNjEwYjQ5ZmRhOWRiMmMwODBiZjQ4MyIsImV4cCI6MTU5MDIyMzc2MSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDA2MS8iLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjUwMDYxLyJ9.PZICcX238Oup1CK47YXCFumg6FmTLfq-Umdgy8l8ZHk';

$(document).ready(function () {
  $("form").submit(handleSubmit);
});

function handleSubmit(event) {
  event.preventDefault();

  var msg = $('#msg').val();
  var email = $('#email').val();

  var data = {
    to: "fodorsamuel@gmail.com",
    subject: "Email z CV stránky",
    body: msg,
    from: email
  }

  $.ajax({
    type: "POST",
    url: "https://stored.azurewebsites.net/api/mail",
    headers: {
      "Authorization": 'Bearer ' + token
    },
    data: JSON.stringify(data),
    contentType: "application/json"
  })
    .done(function () {
      var bubble = document.getElementById("success");
      var button = document.getElementById("submitButton");
      bubble.style.display = "inline";
      bubble.style.animationName = "email-fade-in";
      bubble.style.animationDuration = "4s";
      button.disabled = true;
    })
    .fail(function (error) {
      var bubble = document.getElementById("failure");
      var button = document.getElementById("submitButton");
      bubble.style.display = "inline";
      bubble.style.animationName = "email-fade-in";
      bubble.style.animationDuration = "4s";
      button.innerHTML = "Skúste neskôr";
      button.disabled = true;
    });
}

function navbarFade () {
  var bodyElement = document.getElementById("header");
  this.scrollY > 50 ? bodyElement.style.animationName = "nav-fade" : bodyElement.style.animationName = "nav-fade-revert";
  this.scrollY > 50 ? bodyElement.style.animationDuration = "0.5s" : bodyElement.style.animationDuration = "0.5s";
  this.scrollY > 50 ? bodyElement.style.opacity = 0.5 : bodyElement.style.opacity = 1;

  bodyElement.addEventListener("mouseover", () => {
    if (this.scrollY > 50) {
      bodyElement.style.animationName = "nav-fade-revert";
      bodyElement.style.animationDuration = "0.5s";
      bodyElement.style.opacity = 1;
    }
  });

  bodyElement.addEventListener("mouseleave", () => {
    if (this.scrollY > 50) {
      bodyElement.style.animationName = "nav-fade";
      bodyElement.style.animationDuration = "0.5s";
      bodyElement.style.opacity = 0.5;
    }
  });
}

window.addEventListener("scroll", navbarFade , false);
