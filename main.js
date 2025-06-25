

function slickInit(){
  $('.slick-carousel').slick({
    arrows: true,
    centerPadding: "0px",
    dots: true,
    accessibility: true,  
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
     autoplaySpeed: 1000,
      speed: 1000,
    infinite: true,
      responsive: [{
      breakpoint: 1023,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true
      }
    }, {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    }]
  });
}

$(document).ready(function () {
  slickInit();
});

  // front pg arrow link
// function introLogic() {
//   let introArrow = document.getElementById('intro-arrow');
//   let introSection = document.querySelector('.intro-section');
//   introArrow.addEventListener('click', function(){
//     introSection.style.display='none';
//   });
// }
// introLogic();

(function () {

  const header = document.querySelector(".nav-bar");
  const backToTop = document.querySelector('.back-to-top');
  // const toggleClass = "is-sticky";

  window.addEventListener("scroll", function () {
    const currentScroll = window.pageYOffset;
    let winHeight = window.innerHeight;
    // console.log(currentScroll);
    if (currentScroll > winHeight) {
      header.classList.add("is-sticky");
      backToTop.classList.add('d-block');
      backToTop.classList.remove('d-none');
    } else {
      header.classList.remove("is-sticky");
      backToTop.classList.remove('d-block');
      backToTop.classList.add('d-none');
    }
  });

}());

