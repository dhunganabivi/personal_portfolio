// const toTop = document.querySelector(".top-btn");
// window.addEventListener("scroll", () => {
//     if (window.pageYOffset > 100){
//         toTop.classList.add("active");
//     }else{
//         toTop.classList.remove("active");
//     }
// })

$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 100) {
      $(".top-btn").show('slow');
    } else {
        $(".top-btn").hide('slow');
    }
  });