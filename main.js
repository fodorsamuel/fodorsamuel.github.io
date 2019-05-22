var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsidXNlciIsIm1haWwiLCJzdG9yZSJdLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiNWM2MTBiNDlmZGE5ZGIyYzA4MGJmNDgzIiwiZXhwIjoxNTg2NjI4NTUwLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUwMDYxLyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTAwNjEvIn0.sb_ybk24nafWoCSj9m3_pJ6FSxz0xf68E_exSZXRY2U';

$(document).ready(function () {
  $("form").submit(handleSubmit);
});

function handleSubmit(event) {
  event.preventDefault();

  console.log('submit');
}

function changeCss () {
  var bodyElement = document.getElementById("header");
  this.scrollY > 50 ? bodyElement.style.animationDuration = "0.5s" : bodyElement.style.animationDuration = "0.5s";
  this.scrollY > 50 ? bodyElement.style.animationName = "nav-fade" : bodyElement.style.animationName = "nav-fade-revert";
  this.scrollY > 50 ? bodyElement.style.backgroundColor = "rgba(10,58,42, 0.5)" : bodyElement.style.backgroundColor = "rgba(10,58,42, 1)";
}

window.addEventListener("scroll", changeCss , false);