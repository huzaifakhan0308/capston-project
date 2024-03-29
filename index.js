const playersName = document.querySelectorAll('.players-name');
const playersCountry = document.querySelectorAll('.players-country');
const playersDescription = document.querySelectorAll('.players-description');
const playersBgImage = document.querySelectorAll('.img-transparent-bkgrnd');
const playersImage = document.querySelectorAll('.players-images');

const topPlayersInfo = [
  {
    name: 'Jos Buttler',
    country: 'Somerset, England',
    description: 'Buttler, who was recently named the England white-ball captain.',
    bgImage: 'assets/images/img-transparent-bkgrnd.gif',
    image: 'assets/images/jos buttler.webp',
  },
  {
    name: 'Babar Azam',
    country: 'Lahore,Punjab Pakistan',
    description: 'Babar azam has the highest scorer in World Cup 2021.',
    bgImage: 'assets/images/img-transparent-bkgrnd.gif',
    image: 'assets/images/babar azam img.webp',
  },
  {
    name: 'Hardik Pandya',
    country: 'Surat,Gujrat India',
    description: 'After a difficult few years, Hardik Pandya is now back to his best.',
    bgImage: 'assets/images/img-transparent-bkgrnd.gif',
    image: 'assets/images/hardik pandya img.webp',
  },
  {
    name: 'Wanindu Hasarng',
    country: 'Galle, Sri Lanka',
    description: 'he made his Sri Lankan debut in july 2017,playing for the team against pakistan.',
    bgImage: 'assets/images/img-transparent-bkgrnd.gif',
    image: 'assets/images/wanindu hasaranga img.webp',
  },
];

for (let i = 0; i < playersName.length; i += 1) {
  playersName[i].innerHTML = topPlayersInfo[i].name;
  playersCountry[i].innerHTML = topPlayersInfo[i].country;
  playersDescription[i].innerHTML = topPlayersInfo[i].description;
  playersBgImage[i].src = topPlayersInfo[i].bgImage;
  playersImage[i].src = topPlayersInfo[i].image;
}

const mobileMenu = document.querySelector('.mobile-menu');

document.querySelector('nav').addEventListener('click', (e) => {
  if (e.target.classList[0] === 'navbar-lines-div-mobile' || e.target.classList[0] === 'lines') {
    mobileMenu.classList.add('mobile-menu-appear');
  }
});

mobileMenu.addEventListener('click', (e) => {
  if (e.target.classList[0] === 'mobile-menu-disappear-btn') {
    mobileMenu.classList.remove('mobile-menu-appear');
  }
});