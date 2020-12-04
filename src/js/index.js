import '../css/app.css'

const jankenEle = document.querySelector('.janken')
const jankenItemEle = jankenEle.querySelectorAll('li')

jankenItemEle.forEach(function(item) {
  item.addEventListener('click', jankenEvent);
})

const janken = {
  gu: 'ぐー',
  tyoki: 'ちょき',
  pa: 'ぱー'
}

function jankenEvent(e) {
  const className = e.currentTarget.getAttribute('class')
  console.log(janken[className])
}

console.log(janken, jankenItemEle)