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
  var bodyElement = document.getElementById("navbar-name");
  this.scrollY > 50 ? bodyElement.style.animationName = "nav-name-fade" : bodyElement.style.animationName = "nav-name-fade-revert";
  this.scrollY > 50 ? bodyElement.style.animationDuration = "0.5s" : bodyElement.style.animationDuration = "0.5s";
  this.scrollY > 50 ? bodyElement.style.opacity = 0 : bodyElement.style.opacity = 1;
  
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

function scroll(par){   
  var ele = document.getElementById(par);   
  window.scrollTo(ele.offsetLeft,ele.offsetTop);
}

  var hmAbout = new Hammer(document.getElementById("about"));

  hmAbout.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

  hmAbout.on("swipeup", () => {
      scroll("experience");
  });

  var hmExp = new Hammer(document.getElementById("experience"));

  hmExp.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

  hmExp.on("swipeup", () => {
    scroll("certificates");
  });

  hmExp.on("swipedown", () => {
    scroll("about");
  });

  var hmCert = new Hammer(document.getElementById("certificates"));

  hmCert.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

  hmCert.on("swipeup", () => {
    scroll("education");
  });

  hmCert.on("swipedown", () => {
    scroll("experience");
  });

  var hmEdu = new Hammer(document.getElementById("jazykove"));

  hmEdu.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

  hmEdu.on("swipeup", () => {
    scroll("pocitacoveIndex");
  });

  hmEdu.on("swipedown", () => {
    scroll("certificates");
  });

  var hmEduu = new Hammer(document.getElementById("pocitacove"));

  hmEduu.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

  hmEduu.on("swipeup", () => {
    scroll("programovacieIndex");
  });

  hmEduu.on("swipedown", () => {
    scroll("education");
  });

  var hmEduuu = new Hammer(document.getElementById("programovacie"));

  hmEduuu.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

  hmEduuu.on("swipeup", () => {
    scroll("ineIndex");
  });

  hmEduuu.on("swipedown", () => {
    scroll("pocitacoveIndex");
  });

  var hmEduuuu = new Hammer(document.getElementById("ine"));

  hmEduuuu.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

  hmEduuuu.on("swipeup", () => {
    scroll("contact");
  });

  hmEduuuu.on("swipedown", () => {
    scroll("programovacieIndex");
  });

  var hmCon = new Hammer(document.getElementById("contact"));

  hmCon.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

  hmCon.on("swipedown", () => {
    scroll("ine");
  });

  scroll("about");