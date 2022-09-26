let popup = document.querySelector('.island_popup');
let back = document.querySelector('.bottombar');
let body = document.querySelector('body');
let box = document.querySelector('.box');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let btnright = document.querySelector('#rightSideBtn');
let caq = document.querySelector('#circleaqua');
let cbv = document.querySelector('#circleblueviolet');
let ccb = document.querySelector('#circlecadetblue');
let cch = document.querySelector('#circlechartreuse');
let ccr = document.querySelector('#circlecrimson');
let cdg = document.querySelector('#circledarkgoldendod');
let cdm = document.querySelector('#circledarkmagenta');
let cdo = document.querySelector('#circledarkorange');
let clc = document.querySelector('#circlelightcoral');
let col = document.querySelector('#circleolive');
let cpg = document.querySelector('#circlepalegreen');
let cye = document.querySelector('#circleyellow');
let cta = document.querySelector('#circletan');
let csg = document.querySelector('#circleslategrey');
let csi = document.querySelector('#circlesienna');

back.onclick = function(){
    body.classList.toggle('back-dark');
    box.classList.toggle('back-dark');
};

popup.onclick = function(){
    popup.classList.toggle('active');
};

caq.onclick = function(){
    box.classList.remove('blueviolet');
    box.classList.remove('cadetblue');
    box.classList.remove('chartreuse');
    box.classList.remove('crimson');
    box.classList.remove('darkgoldendod');
    box.classList.remove('darkmagenta');
    box.classList.remove('darkorange');
    box.classList.remove('lightcoral');
    box.classList.remove('olive');
    box.classList.remove('palegreen');
    box.classList.remove('yellow');
    box.classList.remove('tan');
    box.classList.remove('slategrey');
    box.classList.remove('sienna');
    
    btn1.classList.remove('blueviolet-btn');
    btn2.classList.remove('blueviolet-btn');
    btn3.classList.remove('blueviolet-btn');
    btnright.classList.remove('blueviolet-btn');
    
    btn1.classList.remove('cadetblue-btn');
    btn2.classList.remove('cadetblue-btn');
    btn3.classList.remove('cadetblue-btn');
    btnright.classList.remove('cadetblue-btn');
    
    btn1.classList.remove('chartreuse-btn');
    btn2.classList.remove('chartreuse-btn');
    btn3.classList.remove('chartreuse-btn');
    btnright.classList.remove('chartreuse-btn');
    
    btn1.classList.remove('crimson-btn');
    btn2.classList.remove('crimson-btn');
    btn3.classList.remove('crimson-btn');
    btnright.classList.remove('crimson-btn');
    
    btn1.classList.remove('darkgoldendod-btn');
    btn2.classList.remove('darkgoldendod-btn');
    btn3.classList.remove('darkgoldendod-btn');
    btnright.classList.remove('darkgoldendod-btn');
    
    btn1.classList.remove('darkmagenta-btn');
    btn2.classList.remove('darkmagenta-btn');
    btn3.classList.remove('darkmagenta-btn');
    btnright.classList.remove('darkmagenta-btn');
    
    btn1.classList.remove('darkorange-btn');
    btn2.classList.remove('darkorange-btn');
    btn3.classList.remove('darkorange-btn');
    btnright.classList.remove('darkorange-btn');
    
    btn1.classList.remove('lightcoral-btn');
    btn2.classList.remove('lightcoral-btn');
    btn3.classList.remove('lightcoral-btn');
    btnright.classList.remove('lightcoral-btn');
    
    btn1.classList.remove('olive-btn');
    btn2.classList.remove('olive-btn');
    btn3.classList.remove('olive-btn');
    btnright.classList.remove('olive-btn');
    
    btn1.classList.remove('palegreen-btn');
    btn2.classList.remove('palegreen-btn');
    btn3.classList.remove('palegreen-btn');
    btnright.classList.remove('palegreen-btn');
    
    btn1.classList.remove('yellow-btn');
    btn2.classList.remove('yellow-btn');
    btn3.classList.remove('yellow-btn');
    btnright.classList.remove('yellow-btn');
    
    btn1.classList.remove('tan-btn');
    btn2.classList.remove('tan-btn');
    btn3.classList.remove('tan-btn');
    btnright.classList.remove('tan-btn');
    
    btn1.classList.remove('slategrey-btn');
    btn2.classList.remove('slategrey-btn');
    btn3.classList.remove('slategrey-btn');
    btnright.classList.remove('slategrey-btn');
    
    btn1.classList.remove('sienna-btn');
    btn2.classList.remove('sienna-btn');
    btn3.classList.remove('sienna-btn');
    btnright.classList.remove('sienna-btn');

    btn1.classList.add('aqua-btn');
    btn2.classList.add('aqua-btn');
    btn3.classList.add('aqua-btn');
    btnright.classList.add('aqua-btn');
    box.classList.add('aqua');
};

cbv.onclick = function(){
    box.classList.remove('aqua');
    box.classList.remove('cadetblue');
    box.classList.remove('chartreuse');
    box.classList.remove('crimson');
    box.classList.remove('darkgoldendod');
    box.classList.remove('darkmagenta');
    box.classList.remove('darkorange');
    box.classList.remove('lightcoral');
    box.classList.remove('olive');
    box.classList.remove('palegreen');
    box.classList.remove('yellow');
    box.classList.remove('tan');
    box.classList.remove('slategrey');
    box.classList.remove('sienna');
    
    btn1.classList.remove('aqua-btn');
    btn2.classList.remove('aqua-btn');
    btn3.classList.remove('aqua-btn');
    btnright.classList.remove('aqua-btn');
    
    btn1.classList.remove('cadetblue-btn');
    btn2.classList.remove('cadetblue-btn');
    btn3.classList.remove('cadetblue-btn');
    btnright.classList.remove('cadetblue-btn');
    
    btn1.classList.remove('chartreuse-btn');
    btn2.classList.remove('chartreuse-btn');
    btn3.classList.remove('chartreuse-btn');
    btnright.classList.remove('chartreuse-btn');
    
    btn1.classList.remove('crimson-btn');
    btn2.classList.remove('crimson-btn');
    btn3.classList.remove('crimson-btn');
    btnright.classList.remove('crimson-btn');
    
    btn1.classList.remove('darkgoldendod-btn');
    btn2.classList.remove('darkgoldendod-btn');
    btn3.classList.remove('darkgoldendod-btn');
    btnright.classList.remove('darkgoldendod-btn');
    
    btn1.classList.remove('darkmagenta-btn');
    btn2.classList.remove('darkmagenta-btn');
    btn3.classList.remove('darkmagenta-btn');
    btnright.classList.remove('darkmagenta-btn');
    
    btn1.classList.remove('darkorange-btn');
    btn2.classList.remove('darkorange-btn');
    btn3.classList.remove('darkorange-btn');
    btnright.classList.remove('darkorange-btn');
    
    btn1.classList.remove('lightcoral-btn');
    btn2.classList.remove('lightcoral-btn');
    btn3.classList.remove('lightcoral-btn');
    btnright.classList.remove('lightcoral-btn');
    
    btn1.classList.remove('olive-btn');
    btn2.classList.remove('olive-btn');
    btn3.classList.remove('olive-btn');
    btnright.classList.remove('olive-btn');
    
    btn1.classList.remove('palegreen-btn');
    btn2.classList.remove('palegreen-btn');
    btn3.classList.remove('palegreen-btn');
    btnright.classList.remove('palegreen-btn');
    
    btn1.classList.remove('yellow-btn');
    btn2.classList.remove('yellow-btn');
    btn3.classList.remove('yellow-btn');
    btnright.classList.remove('yellow-btn');
    
    btn1.classList.remove('tan-btn');
    btn2.classList.remove('tan-btn');
    btn3.classList.remove('tan-btn');
    btnright.classList.remove('tan-btn');
    
    btn1.classList.remove('slategrey-btn');
    btn2.classList.remove('slategrey-btn');
    btn3.classList.remove('slategrey-btn');
    btnright.classList.remove('slategrey-btn');
    
    btn1.classList.remove('sienna-btn');
    btn2.classList.remove('sienna-btn');
    btn3.classList.remove('sienna-btn');
    btnright.classList.remove('sienna-btn');

    btn1.classList.add('blueviolet-btn');
    btn2.classList.add('blueviolet-btn');
    btn3.classList.add('blueviolet-btn');
    btnright.classList.add('blueviolet-btn');
    box.classList.add('blueviolet');
};

ccb.onclick = function(){
    box.classList.remove('blueviolet');
    box.classList.remove('aqua');
    box.classList.remove('chartreuse');
    box.classList.remove('crimson');
    box.classList.remove('darkgoldendod');
    box.classList.remove('darkmagenta');
    box.classList.remove('darkorange');
    box.classList.remove('lightcoral');
    box.classList.remove('olive');
    box.classList.remove('palegreen');
    box.classList.remove('yellow');
    box.classList.remove('tan');
    box.classList.remove('slategrey');
    box.classList.remove('sienna');
    
    btn1.classList.remove('blueviolet-btn');
    btn2.classList.remove('blueviolet-btn');
    btn3.classList.remove('blueviolet-btn');
    btnright.classList.remove('blueviolet-btn');
    
    btn1.classList.remove('aqua-btn');
    btn2.classList.remove('aqua-btn');
    btn3.classList.remove('aqua-btn');
    btnright.classList.remove('aqua-btn');
    
    btn1.classList.remove('chartreuse-btn');
    btn2.classList.remove('chartreuse-btn');
    btn3.classList.remove('chartreuse-btn');
    btnright.classList.remove('chartreuse-btn');
    
    btn1.classList.remove('crimson-btn');
    btn2.classList.remove('crimson-btn');
    btn3.classList.remove('crimson-btn');
    btnright.classList.remove('crimson-btn');
    
    btn1.classList.remove('darkgoldendod-btn');
    btn2.classList.remove('darkgoldendod-btn');
    btn3.classList.remove('darkgoldendod-btn');
    btnright.classList.remove('darkgoldendod-btn');
    
    btn1.classList.remove('darkmagenta-btn');
    btn2.classList.remove('darkmagenta-btn');
    btn3.classList.remove('darkmagenta-btn');
    btnright.classList.remove('darkmagenta-btn');
    
    btn1.classList.remove('darkorange-btn');
    btn2.classList.remove('darkorange-btn');
    btn3.classList.remove('darkorange-btn');
    btnright.classList.remove('darkorange-btn');
    
    btn1.classList.remove('lightcoral-btn');
    btn2.classList.remove('lightcoral-btn');
    btn3.classList.remove('lightcoral-btn');
    btnright.classList.remove('lightcoral-btn');
    
    btn1.classList.remove('olive-btn');
    btn2.classList.remove('olive-btn');
    btn3.classList.remove('olive-btn');
    btnright.classList.remove('olive-btn');
    
    btn1.classList.remove('palegreen-btn');
    btn2.classList.remove('palegreen-btn');
    btn3.classList.remove('palegreen-btn');
    btnright.classList.remove('palegreen-btn');
    
    btn1.classList.remove('yellow-btn');
    btn2.classList.remove('yellow-btn');
    btn3.classList.remove('yellow-btn');
    btnright.classList.remove('yellow-btn');
    
    btn1.classList.remove('tan-btn');
    btn2.classList.remove('tan-btn');
    btn3.classList.remove('tan-btn');
    btnright.classList.remove('tan-btn');
    
    btn1.classList.remove('slategrey-btn');
    btn2.classList.remove('slategrey-btn');
    btn3.classList.remove('slategrey-btn');
    btnright.classList.remove('slategrey-btn');
    
    btn1.classList.remove('sienna-btn');
    btn2.classList.remove('sienna-btn');
    btn3.classList.remove('sienna-btn');
    btnright.classList.remove('sienna-btn');

    btn1.classList.add('cadetblue-btn');
    btn2.classList.add('cadetblue-btn');
    btn3.classList.add('cadetblue-btn');
    btnright.classList.add('cadetblue-btn');
    box.classList.add('cadetblue');
};

cch.onclick = function(){
    box.classList.remove('blueviolet');
    box.classList.remove('cadetblue');
    box.classList.remove('aqua');
    box.classList.remove('crimson');
    box.classList.remove('darkgoldendod');
    box.classList.remove('darkmagenta');
    box.classList.remove('darkorange');
    box.classList.remove('lightcoral');
    box.classList.remove('olive');
    box.classList.remove('palegreen');
    box.classList.remove('yellow');
    box.classList.remove('tan');
    box.classList.remove('slategrey');
    box.classList.remove('sienna');
    
    btn1.classList.remove('blueviolet-btn');
    btn2.classList.remove('blueviolet-btn');
    btn3.classList.remove('blueviolet-btn');
    btnright.classList.remove('blueviolet-btn');
    
    btn1.classList.remove('cadetblue-btn');
    btn2.classList.remove('cadetblue-btn');
    btn3.classList.remove('cadetblue-btn');
    btnright.classList.remove('cadetblue-btn');
    
    btn1.classList.remove('aqua-btn');
    btn2.classList.remove('aqua-btn');
    btn3.classList.remove('aqua-btn');
    btnright.classList.remove('aqua-btn');
    
    btn1.classList.remove('crimson-btn');
    btn2.classList.remove('crimson-btn');
    btn3.classList.remove('crimson-btn');
    btnright.classList.remove('crimson-btn');
    
    btn1.classList.remove('darkgoldendod-btn');
    btn2.classList.remove('darkgoldendod-btn');
    btn3.classList.remove('darkgoldendod-btn');
    btnright.classList.remove('darkgoldendod-btn');
    
    btn1.classList.remove('darkmagenta-btn');
    btn2.classList.remove('darkmagenta-btn');
    btn3.classList.remove('darkmagenta-btn');
    btnright.classList.remove('darkmagenta-btn');
    
    btn1.classList.remove('darkorange-btn');
    btn2.classList.remove('darkorange-btn');
    btn3.classList.remove('darkorange-btn');
    btnright.classList.remove('darkorange-btn');
    
    btn1.classList.remove('lightcoral-btn');
    btn2.classList.remove('lightcoral-btn');
    btn3.classList.remove('lightcoral-btn');
    btnright.classList.remove('lightcoral-btn');
    
    btn1.classList.remove('olive-btn');
    btn2.classList.remove('olive-btn');
    btn3.classList.remove('olive-btn');
    btnright.classList.remove('olive-btn');
    
    btn1.classList.remove('palegreen-btn');
    btn2.classList.remove('palegreen-btn');
    btn3.classList.remove('palegreen-btn');
    btnright.classList.remove('palegreen-btn');
    
    btn1.classList.remove('yellow-btn');
    btn2.classList.remove('yellow-btn');
    btn3.classList.remove('yellow-btn');
    btnright.classList.remove('yellow-btn');
    
    btn1.classList.remove('tan-btn');
    btn2.classList.remove('tan-btn');
    btn3.classList.remove('tan-btn');
    btnright.classList.remove('tan-btn');
    
    btn1.classList.remove('slategrey-btn');
    btn2.classList.remove('slategrey-btn');
    btn3.classList.remove('slategrey-btn');
    btnright.classList.remove('slategrey-btn');
    
    btn1.classList.remove('sienna-btn');
    btn2.classList.remove('sienna-btn');
    btn3.classList.remove('sienna-btn');
    btnright.classList.remove('sienna-btn');

    btn1.classList.add('chartreuse-btn');
    btn2.classList.add('chartreuse-btn');
    btn3.classList.add('chartreuse-btn');
    btnright.classList.add('chartreuse-btn');
    box.classList.add('chartreuse');
};

ccr.onclick = function(){
    box.classList.remove('blueviolet');
    box.classList.remove('cadetblue');
    box.classList.remove('chartreuse');
    box.classList.remove('aqua');
    box.classList.remove('darkgoldendod');
    box.classList.remove('darkmagenta');
    box.classList.remove('darkorange');
    box.classList.remove('lightcoral');
    box.classList.remove('olive');
    box.classList.remove('palegreen');
    box.classList.remove('yellow');
    box.classList.remove('tan');
    box.classList.remove('slategrey');
    box.classList.remove('sienna');
    
    btn1.classList.remove('blueviolet-btn');
    btn2.classList.remove('blueviolet-btn');
    btn3.classList.remove('blueviolet-btn');
    btnright.classList.remove('blueviolet-btn');
    
    btn1.classList.remove('cadetblue-btn');
    btn2.classList.remove('cadetblue-btn');
    btn3.classList.remove('cadetblue-btn');
    btnright.classList.remove('cadetblue-btn');
    
    btn1.classList.remove('chartreuse-btn');
    btn2.classList.remove('chartreuse-btn');
    btn3.classList.remove('chartreuse-btn');
    btnright.classList.remove('chartreuse-btn');
    
    btn1.classList.remove('aqua-btn');
    btn2.classList.remove('aqua-btn');
    btn3.classList.remove('aqua-btn');
    btnright.classList.remove('aqua-btn');
    
    btn1.classList.remove('darkgoldendod-btn');
    btn2.classList.remove('darkgoldendod-btn');
    btn3.classList.remove('darkgoldendod-btn');
    btnright.classList.remove('darkgoldendod-btn');
    
    btn1.classList.remove('darkmagenta-btn');
    btn2.classList.remove('darkmagenta-btn');
    btn3.classList.remove('darkmagenta-btn');
    btnright.classList.remove('darkmagenta-btn');
    
    btn1.classList.remove('darkorange-btn');
    btn2.classList.remove('darkorange-btn');
    btn3.classList.remove('darkorange-btn');
    btnright.classList.remove('darkorange-btn');
    
    btn1.classList.remove('lightcoral-btn');
    btn2.classList.remove('lightcoral-btn');
    btn3.classList.remove('lightcoral-btn');
    btnright.classList.remove('lightcoral-btn');
    
    btn1.classList.remove('olive-btn');
    btn2.classList.remove('olive-btn');
    btn3.classList.remove('olive-btn');
    btnright.classList.remove('olive-btn');
    
    btn1.classList.remove('palegreen-btn');
    btn2.classList.remove('palegreen-btn');
    btn3.classList.remove('palegreen-btn');
    btnright.classList.remove('palegreen-btn');
    
    btn1.classList.remove('yellow-btn');
    btn2.classList.remove('yellow-btn');
    btn3.classList.remove('yellow-btn');
    btnright.classList.remove('yellow-btn');
    
    btn1.classList.remove('tan-btn');
    btn2.classList.remove('tan-btn');
    btn3.classList.remove('tan-btn');
    btnright.classList.remove('tan-btn');
    
    btn1.classList.remove('slategrey-btn');
    btn2.classList.remove('slategrey-btn');
    btn3.classList.remove('slategrey-btn');
    btnright.classList.remove('slategrey-btn');
    
    btn1.classList.remove('sienna-btn');
    btn2.classList.remove('sienna-btn');
    btn3.classList.remove('sienna-btn');
    btnright.classList.remove('sienna-btn');

    btn1.classList.add('crimson-btn');
    btn2.classList.add('crimson-btn');
    btn3.classList.add('crimson-btn');
    btnright.classList.add('crimson-btn');
    box.classList.add('crimson');
};

cdg.onclick = function(){
    box.classList.remove('blueviolet');
    box.classList.remove('cadetblue');
    box.classList.remove('chartreuse');
    box.classList.remove('crimson');
    box.classList.remove('aqua');
    box.classList.remove('darkmagenta');
    box.classList.remove('darkorange');
    box.classList.remove('lightcoral');
    box.classList.remove('olive');
    box.classList.remove('palegreen');
    box.classList.remove('yellow');
    box.classList.remove('tan');
    box.classList.remove('slategrey');
    box.classList.remove('sienna');
    
    btn1.classList.remove('blueviolet-btn');
    btn2.classList.remove('blueviolet-btn');
    btn3.classList.remove('blueviolet-btn');
    btnright.classList.remove('blueviolet-btn');
    
    btn1.classList.remove('cadetblue-btn');
    btn2.classList.remove('cadetblue-btn');
    btn3.classList.remove('cadetblue-btn');
    btnright.classList.remove('cadetblue-btn');
    
    btn1.classList.remove('chartreuse-btn');
    btn2.classList.remove('chartreuse-btn');
    btn3.classList.remove('chartreuse-btn');
    btnright.classList.remove('chartreuse-btn');
    
    btn1.classList.remove('crimson-btn');
    btn2.classList.remove('crimson-btn');
    btn3.classList.remove('crimson-btn');
    btnright.classList.remove('crimson-btn');
    
    btn1.classList.remove('aqua-btn');
    btn2.classList.remove('aqua-btn');
    btn3.classList.remove('aqua-btn');
    btnright.classList.remove('aqua-btn');
    
    btn1.classList.remove('darkmagenta-btn');
    btn2.classList.remove('darkmagenta-btn');
    btn3.classList.remove('darkmagenta-btn');
    btnright.classList.remove('darkmagenta-btn');
    
    btn1.classList.remove('darkorange-btn');
    btn2.classList.remove('darkorange-btn');
    btn3.classList.remove('darkorange-btn');
    btnright.classList.remove('darkorange-btn');
    
    btn1.classList.remove('lightcoral-btn');
    btn2.classList.remove('lightcoral-btn');
    btn3.classList.remove('lightcoral-btn');
    btnright.classList.remove('lightcoral-btn');
    
    btn1.classList.remove('olive-btn');
    btn2.classList.remove('olive-btn');
    btn3.classList.remove('olive-btn');
    btnright.classList.remove('olive-btn');
    
    btn1.classList.remove('palegreen-btn');
    btn2.classList.remove('palegreen-btn');
    btn3.classList.remove('palegreen-btn');
    btnright.classList.remove('palegreen-btn');
    
    btn1.classList.remove('yellow-btn');
    btn2.classList.remove('yellow-btn');
    btn3.classList.remove('yellow-btn');
    btnright.classList.remove('yellow-btn');
    
    btn1.classList.remove('tan-btn');
    btn2.classList.remove('tan-btn');
    btn3.classList.remove('tan-btn');
    btnright.classList.remove('tan-btn');
    
    btn1.classList.remove('slategrey-btn');
    btn2.classList.remove('slategrey-btn');
    btn3.classList.remove('slategrey-btn');
    btnright.classList.remove('slategrey-btn');
    
    btn1.classList.remove('sienna-btn');
    btn2.classList.remove('sienna-btn');
    btn3.classList.remove('sienna-btn');
    btnright.classList.remove('sienna-btn');

    btn1.classList.add('darkgoldendod-btn');
    btn2.classList.add('darkgoldendod-btn');
    btn3.classList.add('darkgoldendod-btn');
    btnright.classList.add('darkgoldendod-btn');
    box.classList.add('darkgoldendod');
};

cdm.onclick = function(){
    box.classList.remove('blueviolet');
    box.classList.remove('cadetblue');
    box.classList.remove('chartreuse');
    box.classList.remove('crimson');
    box.classList.remove('darkgoldendod');
    box.classList.remove('aqua');
    box.classList.remove('darkorange');
    box.classList.remove('lightcoral');
    box.classList.remove('olive');
    box.classList.remove('palegreen');
    box.classList.remove('yellow');
    box.classList.remove('tan');
    box.classList.remove('slategrey');
    box.classList.remove('sienna');
    
    btn1.classList.remove('blueviolet-btn');
    btn2.classList.remove('blueviolet-btn');
    btn3.classList.remove('blueviolet-btn');
    btnright.classList.remove('blueviolet-btn');
    
    btn1.classList.remove('cadetblue-btn');
    btn2.classList.remove('cadetblue-btn');
    btn3.classList.remove('cadetblue-btn');
    btnright.classList.remove('cadetblue-btn');
    
    btn1.classList.remove('chartreuse-btn');
    btn2.classList.remove('chartreuse-btn');
    btn3.classList.remove('chartreuse-btn');
    btnright.classList.remove('chartreuse-btn');
    
    btn1.classList.remove('crimson-btn');
    btn2.classList.remove('crimson-btn');
    btn3.classList.remove('crimson-btn');
    btnright.classList.remove('crimson-btn');
    
    btn1.classList.remove('darkgoldendod-btn');
    btn2.classList.remove('darkgoldendod-btn');
    btn3.classList.remove('darkgoldendod-btn');
    btnright.classList.remove('darkgoldendod-btn');
    
    btn1.classList.remove('aqua-btn');
    btn2.classList.remove('aqua-btn');
    btn3.classList.remove('aqua-btn');
    btnright.classList.remove('aqua-btn');
    
    btn1.classList.remove('darkorange-btn');
    btn2.classList.remove('darkorange-btn');
    btn3.classList.remove('darkorange-btn');
    btnright.classList.remove('darkorange-btn');
    
    btn1.classList.remove('lightcoral-btn');
    btn2.classList.remove('lightcoral-btn');
    btn3.classList.remove('lightcoral-btn');
    btnright.classList.remove('lightcoral-btn');
    
    btn1.classList.remove('olive-btn');
    btn2.classList.remove('olive-btn');
    btn3.classList.remove('olive-btn');
    btnright.classList.remove('olive-btn');
    
    btn1.classList.remove('palegreen-btn');
    btn2.classList.remove('palegreen-btn');
    btn3.classList.remove('palegreen-btn');
    btnright.classList.remove('palegreen-btn');
    
    btn1.classList.remove('yellow-btn');
    btn2.classList.remove('yellow-btn');
    btn3.classList.remove('yellow-btn');
    btnright.classList.remove('yellow-btn');
    
    btn1.classList.remove('tan-btn');
    btn2.classList.remove('tan-btn');
    btn3.classList.remove('tan-btn');
    btnright.classList.remove('tan-btn');
    
    btn1.classList.remove('slategrey-btn');
    btn2.classList.remove('slategrey-btn');
    btn3.classList.remove('slategrey-btn');
    btnright.classList.remove('slategrey-btn');
    
    btn1.classList.remove('sienna-btn');
    btn2.classList.remove('sienna-btn');
    btn3.classList.remove('sienna-btn');
    btnright.classList.remove('sienna-btn');

    btn1.classList.add('darkmagenta-btn');
    btn2.classList.add('darkmagenta-btn');
    btn3.classList.add('darkmagenta-btn');
    btnright.classList.add('darkmagenta-btn');
    box.classList.add('darkmagenta');
};

cdo.onclick = function(){
    box.classList.remove('blueviolet');
    box.classList.remove('cadetblue');
    box.classList.remove('chartreuse');
    box.classList.remove('crimson');
    box.classList.remove('darkgoldendod');
    box.classList.remove('darkmagenta');
    box.classList.remove('aqua');
    box.classList.remove('lightcoral');
    box.classList.remove('olive');
    box.classList.remove('palegreen');
    box.classList.remove('yellow');
    box.classList.remove('tan');
    box.classList.remove('slategrey');
    box.classList.remove('sienna');
    
    btn1.classList.remove('blueviolet-btn');
    btn2.classList.remove('blueviolet-btn');
    btn3.classList.remove('blueviolet-btn');
    btnright.classList.remove('blueviolet-btn');
    
    btn1.classList.remove('cadetblue-btn');
    btn2.classList.remove('cadetblue-btn');
    btn3.classList.remove('cadetblue-btn');
    btnright.classList.remove('cadetblue-btn');
    
    btn1.classList.remove('chartreuse-btn');
    btn2.classList.remove('chartreuse-btn');
    btn3.classList.remove('chartreuse-btn');
    btnright.classList.remove('chartreuse-btn');
    
    btn1.classList.remove('crimson-btn');
    btn2.classList.remove('crimson-btn');
    btn3.classList.remove('crimson-btn');
    btnright.classList.remove('crimson-btn');
    
    btn1.classList.remove('darkgoldendod-btn');
    btn2.classList.remove('darkgoldendod-btn');
    btn3.classList.remove('darkgoldendod-btn');
    btnright.classList.remove('darkgoldendod-btn');
    
    btn1.classList.remove('darkmagenta-btn');
    btn2.classList.remove('darkmagenta-btn');
    btn3.classList.remove('darkmagenta-btn');
    btnright.classList.remove('darkmagenta-btn');
    
    btn1.classList.remove('aqua-btn');
    btn2.classList.remove('aqua-btn');
    btn3.classList.remove('aqua-btn');
    btnright.classList.remove('aqua-btn');
    
    btn1.classList.remove('lightcoral-btn');
    btn2.classList.remove('lightcoral-btn');
    btn3.classList.remove('lightcoral-btn');
    btnright.classList.remove('lightcoral-btn');
    
    btn1.classList.remove('olive-btn');
    btn2.classList.remove('olive-btn');
    btn3.classList.remove('olive-btn');
    btnright.classList.remove('olive-btn');
    
    btn1.classList.remove('palegreen-btn');
    btn2.classList.remove('palegreen-btn');
    btn3.classList.remove('palegreen-btn');
    btnright.classList.remove('palegreen-btn');
    
    btn1.classList.remove('yellow-btn');
    btn2.classList.remove('yellow-btn');
    btn3.classList.remove('yellow-btn');
    btnright.classList.remove('yellow-btn');
    
    btn1.classList.remove('tan-btn');
    btn2.classList.remove('tan-btn');
    btn3.classList.remove('tan-btn');
    btnright.classList.remove('tan-btn');
    
    btn1.classList.remove('slategrey-btn');
    btn2.classList.remove('slategrey-btn');
    btn3.classList.remove('slategrey-btn');
    btnright.classList.remove('slategrey-btn');
    
    btn1.classList.remove('sienna-btn');
    btn2.classList.remove('sienna-btn');
    btn3.classList.remove('sienna-btn');
    btnright.classList.remove('sienna-btn');

    btn1.classList.add('darkorange-btn');
    btn2.classList.add('darkorange-btn');
    btn3.classList.add('darkorange-btn');
    btnright.classList.add('darkorange-btn');
    box.classList.add('darkorange');
};

clc.onclick = function(){
    box.classList.remove('blueviolet');
    box.classList.remove('cadetblue');
    box.classList.remove('chartreuse');
    box.classList.remove('crimson');
    box.classList.remove('darkgoldendod');
    box.classList.remove('darkmagenta');
    box.classList.remove('darkorange');
    box.classList.remove('aqua');
    box.classList.remove('olive');
    box.classList.remove('palegreen');
    box.classList.remove('yellow');
    box.classList.remove('tan');
    box.classList.remove('slategrey');
    box.classList.remove('sienna');
    
    btn1.classList.remove('blueviolet-btn');
    btn2.classList.remove('blueviolet-btn');
    btn3.classList.remove('blueviolet-btn');
    btnright.classList.remove('blueviolet-btn');
    
    btn1.classList.remove('cadetblue-btn');
    btn2.classList.remove('cadetblue-btn');
    btn3.classList.remove('cadetblue-btn');
    btnright.classList.remove('cadetblue-btn');
    
    btn1.classList.remove('chartreuse-btn');
    btn2.classList.remove('chartreuse-btn');
    btn3.classList.remove('chartreuse-btn');
    btnright.classList.remove('chartreuse-btn');
    
    btn1.classList.remove('crimson-btn');
    btn2.classList.remove('crimson-btn');
    btn3.classList.remove('crimson-btn');
    btnright.classList.remove('crimson-btn');
    
    btn1.classList.remove('darkgoldendod-btn');
    btn2.classList.remove('darkgoldendod-btn');
    btn3.classList.remove('darkgoldendod-btn');
    btnright.classList.remove('darkgoldendod-btn');
    
    btn1.classList.remove('darkmagenta-btn');
    btn2.classList.remove('darkmagenta-btn');
    btn3.classList.remove('darkmagenta-btn');
    btnright.classList.remove('darkmagenta-btn');
    
    btn1.classList.remove('darkorange-btn');
    btn2.classList.remove('darkorange-btn');
    btn3.classList.remove('darkorange-btn');
    btnright.classList.remove('darkorange-btn');
    
    btn1.classList.remove('aqua-btn');
    btn2.classList.remove('aqua-btn');
    btn3.classList.remove('aqua-btn');
    btnright.classList.remove('aqua-btn');
    
    btn1.classList.remove('olive-btn');
    btn2.classList.remove('olive-btn');
    btn3.classList.remove('olive-btn');
    btnright.classList.remove('olive-btn');
    
    btn1.classList.remove('palegreen-btn');
    btn2.classList.remove('palegreen-btn');
    btn3.classList.remove('palegreen-btn');
    btnright.classList.remove('palegreen-btn');
    
    btn1.classList.remove('yellow-btn');
    btn2.classList.remove('yellow-btn');
    btn3.classList.remove('yellow-btn');
    btnright.classList.remove('yellow-btn');
    
    btn1.classList.remove('tan-btn');
    btn2.classList.remove('tan-btn');
    btn3.classList.remove('tan-btn');
    btnright.classList.remove('tan-btn');
    
    btn1.classList.remove('slategrey-btn');
    btn2.classList.remove('slategrey-btn');
    btn3.classList.remove('slategrey-btn');
    btnright.classList.remove('slategrey-btn');
    
    btn1.classList.remove('sienna-btn');
    btn2.classList.remove('sienna-btn');
    btn3.classList.remove('sienna-btn');
    btnright.classList.remove('sienna-btn');

    btn1.classList.add('lightcoral-btn');
    btn2.classList.add('lightcoral-btn');
    btn3.classList.add('lightcoral-btn');
    btnright.classList.add('lightcoral-btn');
    box.classList.add('lightcoral');
};

col.onclick = function(){
    box.classList.remove('blueviolet');
    box.classList.remove('cadetblue');
    box.classList.remove('chartreuse');
    box.classList.remove('crimson');
    box.classList.remove('darkgoldendod');
    box.classList.remove('darkmagenta');
    box.classList.remove('darkorange');
    box.classList.remove('lightcoral');
    box.classList.remove('aqua');
    box.classList.remove('palegreen');
    box.classList.remove('yellow');
    box.classList.remove('tan');
    box.classList.remove('slategrey');
    box.classList.remove('sienna');
    
    btn1.classList.remove('blueviolet-btn');
    btn2.classList.remove('blueviolet-btn');
    btn3.classList.remove('blueviolet-btn');
    btnright.classList.remove('blueviolet-btn');
    
    btn1.classList.remove('cadetblue-btn');
    btn2.classList.remove('cadetblue-btn');
    btn3.classList.remove('cadetblue-btn');
    btnright.classList.remove('cadetblue-btn');
    
    btn1.classList.remove('chartreuse-btn');
    btn2.classList.remove('chartreuse-btn');
    btn3.classList.remove('chartreuse-btn');
    btnright.classList.remove('chartreuse-btn');
    
    btn1.classList.remove('crimson-btn');
    btn2.classList.remove('crimson-btn');
    btn3.classList.remove('crimson-btn');
    btnright.classList.remove('crimson-btn');
    
    btn1.classList.remove('darkgoldendod-btn');
    btn2.classList.remove('darkgoldendod-btn');
    btn3.classList.remove('darkgoldendod-btn');
    btnright.classList.remove('darkgoldendod-btn');
    
    btn1.classList.remove('darkmagenta-btn');
    btn2.classList.remove('darkmagenta-btn');
    btn3.classList.remove('darkmagenta-btn');
    btnright.classList.remove('darkmagenta-btn');
    
    btn1.classList.remove('darkorange-btn');
    btn2.classList.remove('darkorange-btn');
    btn3.classList.remove('darkorange-btn');
    btnright.classList.remove('darkorange-btn');
    
    btn1.classList.remove('lightcoral-btn');
    btn2.classList.remove('lightcoral-btn');
    btn3.classList.remove('lightcoral-btn');
    btnright.classList.remove('lightcoral-btn');
    
    btn1.classList.remove('aqua-btn');
    btn2.classList.remove('aqua-btn');
    btn3.classList.remove('aqua-btn');
    btnright.classList.remove('aqua-btn');
    
    btn1.classList.remove('palegreen-btn');
    btn2.classList.remove('palegreen-btn');
    btn3.classList.remove('palegreen-btn');
    btnright.classList.remove('palegreen-btn');
    
    btn1.classList.remove('yellow-btn');
    btn2.classList.remove('yellow-btn');
    btn3.classList.remove('yellow-btn');
    btnright.classList.remove('yellow-btn');
    
    btn1.classList.remove('tan-btn');
    btn2.classList.remove('tan-btn');
    btn3.classList.remove('tan-btn');
    btnright.classList.remove('tan-btn');
    
    btn1.classList.remove('slategrey-btn');
    btn2.classList.remove('slategrey-btn');
    btn3.classList.remove('slategrey-btn');
    btnright.classList.remove('slategrey-btn');
    
    btn1.classList.remove('sienna-btn');
    btn2.classList.remove('sienna-btn');
    btn3.classList.remove('sienna-btn');
    btnright.classList.remove('sienna-btn');

    btn1.classList.add('olive-btn');
    btn2.classList.add('olive-btn');
    btn3.classList.add('olive-btn');
    btnright.classList.add('olive-btn');
    box.classList.add('olive');
};

cpg.onclick = function(){
    box.classList.remove('blueviolet');
    box.classList.remove('cadetblue');
    box.classList.remove('chartreuse');
    box.classList.remove('crimson');
    box.classList.remove('darkgoldendod');
    box.classList.remove('darkmagenta');
    box.classList.remove('darkorange');
    box.classList.remove('lightcoral');
    box.classList.remove('olive');
    box.classList.remove('aqua');
    box.classList.remove('yellow');
    box.classList.remove('tan');
    box.classList.remove('slategrey');
    box.classList.remove('sienna');
    
    btn1.classList.remove('blueviolet-btn');
    btn2.classList.remove('blueviolet-btn');
    btn3.classList.remove('blueviolet-btn');
    btnright.classList.remove('blueviolet-btn');
    
    btn1.classList.remove('cadetblue-btn');
    btn2.classList.remove('cadetblue-btn');
    btn3.classList.remove('cadetblue-btn');
    btnright.classList.remove('cadetblue-btn');
    
    btn1.classList.remove('chartreuse-btn');
    btn2.classList.remove('chartreuse-btn');
    btn3.classList.remove('chartreuse-btn');
    btnright.classList.remove('chartreuse-btn');
    
    btn1.classList.remove('crimson-btn');
    btn2.classList.remove('crimson-btn');
    btn3.classList.remove('crimson-btn');
    btnright.classList.remove('crimson-btn');
    
    btn1.classList.remove('darkgoldendod-btn');
    btn2.classList.remove('darkgoldendod-btn');
    btn3.classList.remove('darkgoldendod-btn');
    btnright.classList.remove('darkgoldendod-btn');
    
    btn1.classList.remove('darkmagenta-btn');
    btn2.classList.remove('darkmagenta-btn');
    btn3.classList.remove('darkmagenta-btn');
    btnright.classList.remove('darkmagenta-btn');
    
    btn1.classList.remove('darkorange-btn');
    btn2.classList.remove('darkorange-btn');
    btn3.classList.remove('darkorange-btn');
    btnright.classList.remove('darkorange-btn');
    
    btn1.classList.remove('lightcoral-btn');
    btn2.classList.remove('lightcoral-btn');
    btn3.classList.remove('lightcoral-btn');
    btnright.classList.remove('lightcoral-btn');
    
    btn1.classList.remove('olive-btn');
    btn2.classList.remove('olive-btn');
    btn3.classList.remove('olive-btn');
    btnright.classList.remove('olive-btn');
    
    btn1.classList.remove('aqua-btn');
    btn2.classList.remove('aqua-btn');
    btn3.classList.remove('aqua-btn');
    btnright.classList.remove('aqua-btn');
    
    btn1.classList.remove('yellow-btn');
    btn2.classList.remove('yellow-btn');
    btn3.classList.remove('yellow-btn');
    btnright.classList.remove('yellow-btn');
    
    btn1.classList.remove('tan-btn');
    btn2.classList.remove('tan-btn');
    btn3.classList.remove('tan-btn');
    btnright.classList.remove('tan-btn');
    
    btn1.classList.remove('slategrey-btn');
    btn2.classList.remove('slategrey-btn');
    btn3.classList.remove('slategrey-btn');
    btnright.classList.remove('slategrey-btn');
    
    btn1.classList.remove('sienna-btn');
    btn2.classList.remove('sienna-btn');
    btn3.classList.remove('sienna-btn');
    btnright.classList.remove('sienna-btn');

    btn1.classList.add('palegreen-btn');
    btn2.classList.add('palegreen-btn');
    btn3.classList.add('palegreen-btn');
    btnright.classList.add('palegreen-btn');
    box.classList.add('palegreen');
};

cye.onclick = function(){
    box.classList.remove('blueviolet');
    box.classList.remove('cadetblue');
    box.classList.remove('chartreuse');
    box.classList.remove('crimson');
    box.classList.remove('darkgoldendod');
    box.classList.remove('darkmagenta');
    box.classList.remove('darkorange');
    box.classList.remove('lightcoral');
    box.classList.remove('olive');
    box.classList.remove('palegreen');
    box.classList.remove('aqua');
    box.classList.remove('tan');
    box.classList.remove('slategrey');
    box.classList.remove('sienna');
    
    btn1.classList.remove('blueviolet-btn');
    btn2.classList.remove('blueviolet-btn');
    btn3.classList.remove('blueviolet-btn');
    btnright.classList.remove('blueviolet-btn');
    
    btn1.classList.remove('cadetblue-btn');
    btn2.classList.remove('cadetblue-btn');
    btn3.classList.remove('cadetblue-btn');
    btnright.classList.remove('cadetblue-btn');
    
    btn1.classList.remove('chartreuse-btn');
    btn2.classList.remove('chartreuse-btn');
    btn3.classList.remove('chartreuse-btn');
    btnright.classList.remove('chartreuse-btn');
    
    btn1.classList.remove('crimson-btn');
    btn2.classList.remove('crimson-btn');
    btn3.classList.remove('crimson-btn');
    btnright.classList.remove('crimson-btn');
    
    btn1.classList.remove('darkgoldendod-btn');
    btn2.classList.remove('darkgoldendod-btn');
    btn3.classList.remove('darkgoldendod-btn');
    btnright.classList.remove('darkgoldendod-btn');
    
    btn1.classList.remove('darkmagenta-btn');
    btn2.classList.remove('darkmagenta-btn');
    btn3.classList.remove('darkmagenta-btn');
    btnright.classList.remove('darkmagenta-btn');
    
    btn1.classList.remove('darkorange-btn');
    btn2.classList.remove('darkorange-btn');
    btn3.classList.remove('darkorange-btn');
    btnright.classList.remove('darkorange-btn');
    
    btn1.classList.remove('lightcoral-btn');
    btn2.classList.remove('lightcoral-btn');
    btn3.classList.remove('lightcoral-btn');
    btnright.classList.remove('lightcoral-btn');
    
    btn1.classList.remove('olive-btn');
    btn2.classList.remove('olive-btn');
    btn3.classList.remove('olive-btn');
    btnright.classList.remove('olive-btn');
    
    btn1.classList.remove('palegreen-btn');
    btn2.classList.remove('palegreen-btn');
    btn3.classList.remove('palegreen-btn');
    btnright.classList.remove('palegreen-btn');
    
    btn1.classList.remove('aqua-btn');
    btn2.classList.remove('aqua-btn');
    btn3.classList.remove('aqua-btn');
    btnright.classList.remove('aqua-btn');
    
    btn1.classList.remove('tan-btn');
    btn2.classList.remove('tan-btn');
    btn3.classList.remove('tan-btn');
    btnright.classList.remove('tan-btn');
    
    btn1.classList.remove('slategrey-btn');
    btn2.classList.remove('slategrey-btn');
    btn3.classList.remove('slategrey-btn');
    btnright.classList.remove('slategrey-btn');
    
    btn1.classList.remove('sienna-btn');
    btn2.classList.remove('sienna-btn');
    btn3.classList.remove('sienna-btn');
    btnright.classList.remove('sienna-btn');

    btn1.classList.add('yellow-btn');
    btn2.classList.add('yellow-btn');
    btn3.classList.add('yellow-btn');
    btnright.classList.add('yellow-btn');
    box.classList.add('yellow');
};

cta.onclick = function(){
    box.classList.remove('blueviolet');
    box.classList.remove('cadetblue');
    box.classList.remove('chartreuse');
    box.classList.remove('crimson');
    box.classList.remove('darkgoldendod');
    box.classList.remove('darkmagenta');
    box.classList.remove('darkorange');
    box.classList.remove('lightcoral');
    box.classList.remove('olive');
    box.classList.remove('palegreen');
    box.classList.remove('yellow');
    box.classList.remove('aqua');
    box.classList.remove('slategrey');
    box.classList.remove('sienna');
    
    btn1.classList.remove('blueviolet-btn');
    btn2.classList.remove('blueviolet-btn');
    btn3.classList.remove('blueviolet-btn');
    btnright.classList.remove('blueviolet-btn');
    
    btn1.classList.remove('cadetblue-btn');
    btn2.classList.remove('cadetblue-btn');
    btn3.classList.remove('cadetblue-btn');
    btnright.classList.remove('cadetblue-btn');
    
    btn1.classList.remove('chartreuse-btn');
    btn2.classList.remove('chartreuse-btn');
    btn3.classList.remove('chartreuse-btn');
    btnright.classList.remove('chartreuse-btn');
    
    btn1.classList.remove('crimson-btn');
    btn2.classList.remove('crimson-btn');
    btn3.classList.remove('crimson-btn');
    btnright.classList.remove('crimson-btn');
    
    btn1.classList.remove('darkgoldendod-btn');
    btn2.classList.remove('darkgoldendod-btn');
    btn3.classList.remove('darkgoldendod-btn');
    btnright.classList.remove('darkgoldendod-btn');
    
    btn1.classList.remove('darkmagenta-btn');
    btn2.classList.remove('darkmagenta-btn');
    btn3.classList.remove('darkmagenta-btn');
    btnright.classList.remove('darkmagenta-btn');
    
    btn1.classList.remove('darkorange-btn');
    btn2.classList.remove('darkorange-btn');
    btn3.classList.remove('darkorange-btn');
    btnright.classList.remove('darkorange-btn');
    
    btn1.classList.remove('lightcoral-btn');
    btn2.classList.remove('lightcoral-btn');
    btn3.classList.remove('lightcoral-btn');
    btnright.classList.remove('lightcoral-btn');
    
    btn1.classList.remove('olive-btn');
    btn2.classList.remove('olive-btn');
    btn3.classList.remove('olive-btn');
    btnright.classList.remove('olive-btn');
    
    btn1.classList.remove('palegreen-btn');
    btn2.classList.remove('palegreen-btn');
    btn3.classList.remove('palegreen-btn');
    btnright.classList.remove('palegreen-btn');
    
    btn1.classList.remove('yellow-btn');
    btn2.classList.remove('yellow-btn');
    btn3.classList.remove('yellow-btn');
    btnright.classList.remove('yellow-btn');
    
    btn1.classList.remove('aqua-btn');
    btn2.classList.remove('aqua-btn');
    btn3.classList.remove('aqua-btn');
    btnright.classList.remove('aqua-btn');
    
    btn1.classList.remove('slategrey-btn');
    btn2.classList.remove('slategrey-btn');
    btn3.classList.remove('slategrey-btn');
    btnright.classList.remove('slategrey-btn');
    
    btn1.classList.remove('sienna-btn');
    btn2.classList.remove('sienna-btn');
    btn3.classList.remove('sienna-btn');
    btnright.classList.remove('sienna-btn');

    btn1.classList.add('tan-btn');
    btn2.classList.add('tan-btn');
    btn3.classList.add('tan-btn');
    btnright.classList.add('tan-btn');
    box.classList.add('tan');
};

csg.onclick = function(){
    box.classList.remove('blueviolet');
    box.classList.remove('cadetblue');
    box.classList.remove('chartreuse');
    box.classList.remove('crimson');
    box.classList.remove('darkgoldendod');
    box.classList.remove('darkmagenta');
    box.classList.remove('darkorange');
    box.classList.remove('lightcoral');
    box.classList.remove('olive');
    box.classList.remove('palegreen');
    box.classList.remove('yellow');
    box.classList.remove('tan');
    box.classList.remove('aqua');
    box.classList.remove('sienna');
    
    btn1.classList.remove('blueviolet-btn');
    btn2.classList.remove('blueviolet-btn');
    btn3.classList.remove('blueviolet-btn');
    btnright.classList.remove('blueviolet-btn');
    
    btn1.classList.remove('cadetblue-btn');
    btn2.classList.remove('cadetblue-btn');
    btn3.classList.remove('cadetblue-btn');
    btnright.classList.remove('cadetblue-btn');
    
    btn1.classList.remove('chartreuse-btn');
    btn2.classList.remove('chartreuse-btn');
    btn3.classList.remove('chartreuse-btn');
    btnright.classList.remove('chartreuse-btn');
    
    btn1.classList.remove('crimson-btn');
    btn2.classList.remove('crimson-btn');
    btn3.classList.remove('crimson-btn');
    btnright.classList.remove('crimson-btn');
    
    btn1.classList.remove('darkgoldendod-btn');
    btn2.classList.remove('darkgoldendod-btn');
    btn3.classList.remove('darkgoldendod-btn');
    btnright.classList.remove('darkgoldendod-btn');
    
    btn1.classList.remove('darkmagenta-btn');
    btn2.classList.remove('darkmagenta-btn');
    btn3.classList.remove('darkmagenta-btn');
    btnright.classList.remove('darkmagenta-btn');
    
    btn1.classList.remove('darkorange-btn');
    btn2.classList.remove('darkorange-btn');
    btn3.classList.remove('darkorange-btn');
    btnright.classList.remove('darkorange-btn');
    
    btn1.classList.remove('lightcoral-btn');
    btn2.classList.remove('lightcoral-btn');
    btn3.classList.remove('lightcoral-btn');
    btnright.classList.remove('lightcoral-btn');
    
    btn1.classList.remove('olive-btn');
    btn2.classList.remove('olive-btn');
    btn3.classList.remove('olive-btn');
    btnright.classList.remove('olive-btn');
    
    btn1.classList.remove('palegreen-btn');
    btn2.classList.remove('palegreen-btn');
    btn3.classList.remove('palegreen-btn');
    btnright.classList.remove('palegreen-btn');
    
    btn1.classList.remove('yellow-btn');
    btn2.classList.remove('yellow-btn');
    btn3.classList.remove('yellow-btn');
    btnright.classList.remove('yellow-btn');
    
    btn1.classList.remove('tan-btn');
    btn2.classList.remove('tan-btn');
    btn3.classList.remove('tan-btn');
    btnright.classList.remove('tan-btn');
    
    btn1.classList.remove('aqua-btn');
    btn2.classList.remove('aqua-btn');
    btn3.classList.remove('aqua-btn');
    btnright.classList.remove('aqua-btn');
    
    btn1.classList.remove('sienna-btn');
    btn2.classList.remove('sienna-btn');
    btn3.classList.remove('sienna-btn');
    btnright.classList.remove('sienna-btn');

    btn1.classList.add('slategrey-btn');
    btn2.classList.add('slategrey-btn');
    btn3.classList.add('slategrey-btn');
    btnright.classList.add('slategrey-btn');
    box.classList.add('slategrey');
};

csi.onclick = function(){
    box.classList.remove('blueviolet');
    box.classList.remove('cadetblue');
    box.classList.remove('chartreuse');
    box.classList.remove('crimson');
    box.classList.remove('darkgoldendod');
    box.classList.remove('darkmagenta');
    box.classList.remove('darkorange');
    box.classList.remove('lightcoral');
    box.classList.remove('olive');
    box.classList.remove('palegreen');
    box.classList.remove('yellow');
    box.classList.remove('tan');
    box.classList.remove('slategrey');
    box.classList.remove('aqua');
    
    btn1.classList.remove('blueviolet-btn');
    btn2.classList.remove('blueviolet-btn');
    btn3.classList.remove('blueviolet-btn');
    btnright.classList.remove('blueviolet-btn');
    
    btn1.classList.remove('cadetblue-btn');
    btn2.classList.remove('cadetblue-btn');
    btn3.classList.remove('cadetblue-btn');
    btnright.classList.remove('cadetblue-btn');
    
    btn1.classList.remove('chartreuse-btn');
    btn2.classList.remove('chartreuse-btn');
    btn3.classList.remove('chartreuse-btn');
    btnright.classList.remove('chartreuse-btn');
    
    btn1.classList.remove('crimson-btn');
    btn2.classList.remove('crimson-btn');
    btn3.classList.remove('crimson-btn');
    btnright.classList.remove('crimson-btn');
    
    btn1.classList.remove('darkgoldendod-btn');
    btn2.classList.remove('darkgoldendod-btn');
    btn3.classList.remove('darkgoldendod-btn');
    btnright.classList.remove('darkgoldendod-btn');
    
    btn1.classList.remove('darkmagenta-btn');
    btn2.classList.remove('darkmagenta-btn');
    btn3.classList.remove('darkmagenta-btn');
    btnright.classList.remove('darkmagenta-btn');
    
    btn1.classList.remove('darkorange-btn');
    btn2.classList.remove('darkorange-btn');
    btn3.classList.remove('darkorange-btn');
    btnright.classList.remove('darkorange-btn');
    
    btn1.classList.remove('lightcoral-btn');
    btn2.classList.remove('lightcoral-btn');
    btn3.classList.remove('lightcoral-btn');
    btnright.classList.remove('lightcoral-btn');
    
    btn1.classList.remove('olive-btn');
    btn2.classList.remove('olive-btn');
    btn3.classList.remove('olive-btn');
    btnright.classList.remove('olive-btn');
    
    btn1.classList.remove('palegreen-btn');
    btn2.classList.remove('palegreen-btn');
    btn3.classList.remove('palegreen-btn');
    btnright.classList.remove('palegreen-btn');
    
    btn1.classList.remove('yellow-btn');
    btn2.classList.remove('yellow-btn');
    btn3.classList.remove('yellow-btn');
    btnright.classList.remove('yellow-btn');
    
    btn1.classList.remove('tan-btn');
    btn2.classList.remove('tan-btn');
    btn3.classList.remove('tan-btn');
    btnright.classList.remove('tan-btn');
    
    btn1.classList.remove('slategrey-btn');
    btn2.classList.remove('slategrey-btn');
    btn3.classList.remove('slategrey-btn');
    btnright.classList.remove('slategrey-btn');
    
    btn1.classList.remove('aqua-btn');
    btn2.classList.remove('aqua-btn');
    btn3.classList.remove('aqua-btn');
    btnright.classList.remove('aqua-btn');

    btn1.classList.add('sienna-btn');
    btn2.classList.add('sienna-btn');
    btn3.classList.add('sienna-btn');
    btnright.classList.add('sienna-btn');
    box.classList.add('sienna');
};
