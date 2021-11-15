gsap.registerPlugin(ScrollTrigger);

AOS.init({
  duration: 500,
  once: false,
  easing: 'ease-in-out',
});

window.onload = function () {
  const slides = window.innerWidth > 1024 ? 3 : 1;
  const swiper = new Swiper('.swiper', {
    spaceBetween: 110,
    slidesPerView: slides,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};

const items = document.querySelectorAll('.data-number');

if (window.innerWidth > 1024) {
  gsap.from(items, {
    scrollTrigger: '#sors-token',
    textContent: 0,
    duration: 3,
    ease: 'none',
    snap: { textContent: 1 },
    stagger: {
      each: 0.0,
      onUpdate: function () {
        this.targets()[0].innerHTML = numberWithCommas(
          Math.ceil(this.targets()[0].textContent)
        );
      },
    },
  });

  const rows = 51;
  const columns = 5;
  const missingImages = 4; // The number of missing images in the last row
  const frame_count = rows * columns - missingImages - 1;
  const imageWidth = 3000;
  const imageHeight = 30600;
  const horizDiff = imageWidth / columns;
  const vertDiff = imageHeight / rows;

  const viewer = document.querySelector('.viewer-one');
  const ctx = viewer.getContext('2d');
  viewer.width = horizDiff;
  viewer.height = vertDiff;

  const image = new Image();
  image.src = './images/coin-header.png';
  image.onload = () => onUpdate();

  const obj = { num: 0 };
  gsap.to(obj, {
    num: frame_count,
    ease: 'steps(' + frame_count + ')',
    scrollTrigger: {
      trigger: '.viewer-one',
      start: 'top 12%',
      end: '840 center',
      pin: true,
      markers: false,
      scrub: 1,
    },
    onUpdate: () => {
      onUpdate();
    },
  });

  function onUpdate() {
    ctx.clearRect(0, 0, horizDiff, vertDiff);
    const x = Math.round((obj.num % columns) * horizDiff);
    const y = Math.round(Math.floor(obj.num / columns) * vertDiff);
    ctx.drawImage(image, x, y, horizDiff, vertDiff, 0, 0, horizDiff, vertDiff);
  }
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function openYear(evt, year) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('road-grid');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('road-button');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' road-active', '');
  }
  document.getElementById(`year-${year}`).style.display = 'grid';
  evt.currentTarget.className += ' road-active';
}

document.getElementById('defaultOpen').click();

const mobButton = document.getElementById('mobile-button');
const mobMenu = document.getElementById('mobile-menu');
const menuItems = document.querySelectorAll('.nav-cont_link');

function toggleMenu() {
  if (mobMenu.classList.contains('showMenu')) {
    mobMenu.classList.remove('showMenu');
    mobButton.classList.remove('active');
    document.body.style.overflow = '';
  } else {
    mobMenu.classList.add('showMenu');
    mobButton.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

mobButton.addEventListener('click', toggleMenu);

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener('click', toggleMenu);
});
