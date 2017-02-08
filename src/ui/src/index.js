const $ = require('zeptojs');
const iSlider = require('islider.js')

let list = [
  { content: '<div><h1>Page1</h1><h2>This is page1</h2><p>page1 is pretty awsome</p><div>' },
  { content: './static/images/2.jpg' },
  { content: '<div><h1>Page1</h1><h2>This is page1</h2><p>page1 is pretty awsome</p><div>' },
]

let islider = new iSlider(document.getElementById("iSlider-wrapper"), list, {
    isAutoplay: 0,
    isLooping: 0,
    isOverspread: 1,
    animateTime: 800,
    isVertical: 0,
    animateType: 'flow'
});
