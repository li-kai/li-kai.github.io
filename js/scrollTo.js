'use strict';
require('smoothscroll-polyfill').polyfill();

var homeLink = document.getElementsById('home');

homeLink.addEventListener('click', function(){
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
});

var aboutLink = document.getElementsById('about');

homeLink.addEventListener('click', function(){
    document.querySelector('.about').scrollIntoView({ behavior: 'smooth' });
});
