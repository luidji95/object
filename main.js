
const content = [{
  image: 'image/favicon.png',
  id: 0,
  heading: 'Get your home furnishings in a flash with rapid delivery.',
  paragraph: 'Lorem ipsum dolor sit amet consectutur adipiscing elit. Error accusamus architecto minus sint, perspicatis blanditiis iusto dolor, temporibus aperiam explicabo est ex harum eligendi quia ipsa fugit, explicabo, voluptatibus officia.'
},
{
  id: 1,
  heading: 'Always here to help: stellar support around the clock.',
  paragraph: 'Dolor sit amet consectetur adipisicing elit. Error accusamus architecto minus sint, plorem blanditiis iusto dolor, temporibus aperiam explicabo est ex harum eligendi quia ipsa fugit. Explicabo, voluptatibus officia minus sint, plorem ex harum.',
  image: 'image/geo-alt.svg'
},
{
  image: 'image/key.svg',
  id: 2,
  heading: 'Stay ahead of the trends with our latest discoveries.',
  paragraph: 'Explicabo ipsum Error sit amet perspiciati consectetur voluptatibus elit. Error accusamus arc explicabo explictecto minus sint, se blanditiis iusto dolor, temporibus aperiam explicabo est ex harum eligendi quia ipsa fugit sit amet architecto.'
},
{
  image: 'image/person.svg',
  id: 3,
  heading: 'No stress or worries for your home goods.',
  paragraph: 'Lorem ipsum dolor sit amet consectutur adipiscing elit. Error accusamus architecto minus sint, perspicatis blanditiis iusto dolor, temporibus aperiam explicabo est ex harum eligendi quia ipsa fugit, explicabo, voluptatibus officia.'
}
];

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');

const btnArray = [btn1, btn2, btn3, btn4];
let currentActiveIndex = 0;

btnArray.forEach(function(element, index){
element.addEventListener('click', function(){
  currentActiveIndex = index;
  updateItemContent(currentActiveIndex);
});
});

function updateItemContent(index) {
document.querySelector('.item2').textContent = content[index].heading;
document.querySelector('.item3').textContent = content[index].paragraph;
document.querySelector('.item1picture').src = content[index].image;
}

window.onload = function() {
  updateItemContent(0); 
};

















