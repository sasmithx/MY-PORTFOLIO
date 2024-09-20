let menu = document.querySelector('.menu-icon');

menu.onclick = () => {
    menu.classList.toggle("move");
};


// Reviews Swipper

var swiper = new Swiper(".reviews-content", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Email Js

function validate() {
  let name = document.querySelector('.name')
  let email = document.querySelector(".email");
  let msg = document.querySelector(".message");
  let sendBtn = document.querySelector(".send-btn");

  sendBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (name.value == "" || email.value == "'" || msg.value == ""){
      emptyerror();
    } else{
      sendmail (name.value, email.value, msg,value);
      success();
    }
  });
}
validate();

function sendmail(name,email,msg){
  emailjs.send("service_rpwcxk1", "template_4jmb3rd", {
    to_name: name,
    from_name: email,
    message: msg,
  });
}

function emptyerror() {
  swal({
    title: "Oh No....!",
    text: "Fields cannot be empty!",
    icon: "error",
  });
}

function success() {
  swal({
    title: "Email sent successfully!",
    text: "We try to reply in 24 hours",
    icon: "success",
  });
}

