import loadInitialContent from './initialLoad';
import createHomePageContent from './home'
import createMenuPageContent from './menu'
import createHoursPageContent from './hours';

const nav = document.querySelector('nav')
nav.style.display = 'flex';
nav.style.flexDirection = 'column'
document.body.style.display = 'flex';
document.body.style.gap = '25px'
const content = document.getElementById('content');
content.style.width = '40vw';
content.style.height = '60vh';
content.style.backgroundColor = '#1f2937';
content.style.color ='white';
content.style.borderRadius = '10px'

const buttons = document.querySelectorAll('button');
buttons.forEach(function(button) {
    button.style.height = '80px';
    button.style.width = 'auto'
    button.style.fontSize  = '30px';
    button.style.borderRadius = '10px'
    button.style.backgroundColor = 'orange'
    button.style.color = 'red'
});


const homeButton = document.getElementById('home');
homeButton.addEventListener('click',createHomePageContent);

const menuButton = document.getElementById('menu');
menuButton.addEventListener('click',createMenuPageContent);

const hoursButton = document.getElementById('hours')
hoursButton.addEventListener('click', createHoursPageContent);


loadInitialContent();
