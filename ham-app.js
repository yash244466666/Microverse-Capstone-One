// const navbar = document.getElementById('navbar');
const hamMenu = document.getElementById('hamMenu');
const div = document.createElement('div');
const navLinks = document.querySelector('.nav-links');

const data = [{
  text: 'About',
  link: './about.html',
}, {
  text: 'Program',
  link: '#',
}, {
  text: 'Join',
  link: '#',
}, {
  text: 'Sponsor',
  link: '#',
}, {
  text: 'News',
  link: '#',
}, {
  text: 'CC Campaign',
  link: '#',
}];

navLinks.appendChild(div);
div.className = 'nav-links-container';
div.innerHTML = `   <div id='hamX' onclick="hamMenuHide()"> <i class="fa-sharp fa-solid fa-xmark"></i> </div>
    <div class="links" onclick="hamMenuHide()"><a href="${data[0].link}">${data[0].text}</a></div>
    <div class="links" onclick="hamMenuHide()"><a href="${data[1].link}">${data[1].text}</a></div>
    <div class="links" onclick="hamMenuHide()"><a href="${data[2].link}">${data[2].text}</a></div>
    <div class="links" onclick="hamMenuHide()"><a href="${data[3].link}">${data[3].text}</a></div>
    <div class="links" onclick="hamMenuHide()"><a href="${data[4].link}">${data[4].text}</a></div>
    <div class="links CC" onclick="hamMenuHide()"><a href="${data[5].link}">${data[5].text}</a></div>
`;

hamMenu.addEventListener('click', (e) => {
  e.preventDefault();
  navLinks.classList.toggle('nav-link-hide');
});
