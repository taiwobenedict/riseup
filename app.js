const header = document.querySelector('header')

document.body.onscroll = () => {
  
    if (document.body.scrollTop == 0) {
      header.classList.remove('header-bg')
    } else {
      header.classList.add('header-bg')
    }
  
  }