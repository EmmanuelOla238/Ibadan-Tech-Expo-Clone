function toggleMenu() {
    const menu = document.querySelector('.menu');
    const content = document.querySelector('.content');
  
    if (menu.style.width === '330px') {
      menu.style.width = '0';
      content.style.marginLeft = '0';
    } else {
      menu.style.width = '330px'; // Adjust this value based on your desired menu width
      content.style.marginLeft = '330px';
    }
  }
  

  window.onscroll = function() {
    stickyHeader();
  };

  var header = document.getElementById("header");
  var sticky = header.offsetTop;

  function stickyHeader() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }