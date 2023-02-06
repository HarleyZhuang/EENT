var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    document.querySelector(".header").style.height = window.innerHeight + "px";
})


$( document ).ready(function() {
    new WOW().init();
  });

  

  function confirmSubmit() {
    if (confirm("Are you sure you want to submit the form?")) {
      alert("Form Submitted, Thankyou!");
      document.getElementById("FORM_ID").submit();
      window.location.reload();
    }
    return false;
  }