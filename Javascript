$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
  
    });
  
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500, 
        'linear'
      );
  
    });
  
  });
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxtuaCYuWP5w8nr2-GFPEuf_auJx_nAnhq9d9WJXPXQdBkWP-BnbXa94OxaBIAwHx9xNA/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")
  form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
          .then(response => {
              msg.innerHTML = "Message sent successfully"
              setTimeout(function () {
                  msg.innerHTML = ""
              }, 5000)
              form.reset()
          })
          .catch(error => console.error('Error!', error.message))
  })
  let loadMoreBtn = document.querySelector('#load-more');
  let currentItem = 3;

  loadMoreBtn.onclick = () => {
      let boxes = [...document.querySelectorAll('.container .work-list .work')];
      for (var i = currentItem; i < currentItem + 3; i++) {
          boxes[i].style.display = 'inline-block';
      }
      currentItem += 3;

      if (currentItem >= boxes.length) {
          loadMoreBtn.style.display = 'none';
      }
  }
 
