const main = document.getElementById('main');
const div = document.createElement('div');

const data = [{
  name: 'Yash',
}];

main.appendChild(div);
div.innerHTML = `<div class=""><h1>${data[0].name}</h1></div>`;