

//Image Scroll

$('.img-holder').imageScroll({
    coverRatio: 0.5,
    speed: 0.2,
    extraHeight: 0,
});

$('.img-holder-slow').imageScroll({
    coverRatio: 0.5,
    speed: 0.7,
    extraHeight: 100,
});


//Skrollr signature
skrollr.init({
    forceHeight: false,
    smoothScrolling: true,
});



// jQuery(document).ready(function() {

//   $('.parallax-layer').parallax({
//     mouseport: $('.parallax-viewport')
//   });
// });



// //parallax.js

// // var scene = document.getElementById('parallax-viewport');
// // var parallax = new Parallax(scene, {

// // });

$('#scene').parallax({
    // calibrateX: false,
    // calibrateY: true,
    // invertX: false,
    // invertY: true,
    // limitX: false,
    // limitY: 10,
    // scalarX: 2,
    // scalarY: 8,
    // frictionX: 0.2,
    // frictionY: 0.8,
    // originX: 0.0,
    // originY: 1.0
});


