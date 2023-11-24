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
  