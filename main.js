var addButton = document.querySelector('#start');
var audio = document.getElementById('#start');
var removeButton = document.querySelector('#remove-item');
var wrapper = document.querySelector('#wrapper');
var counter = document.querySelector('#counter');
var globalItemCounter = 1;
let sauce1 = document.querySelector('#sauce1');
let sauce2 = document.querySelector('#sauce2');
let sauce3 = document.querySelector('#sauce3');
let sauce4 = document.querySelector('#sauce4');
let sauce5 = document.querySelector('#sauce5');

start.addEventListener('click', function(event) {
	let image = document.createElement('img');
	image.classList.add('new-sushi');
	image.src = './sushi.png';
	image.style.left = (80 * Math.random()) + '%';
	image.style.top = (80 * Math.random()) + '%';
	wrapper.appendChild(image);
	var counter = document.querySelectorAll('.new-sushi');
	var counterText = counter.length + ' sushi';
	if (counter.length > 1) {
		counterText += 's';
	}
	sushiCount.innerHTML = counterText;

});

wrapper.addEventListener('click', function(event) {
	if (event.target.classList.contains('new-sushi') ) {
		event.target.remove();
	}

	var counter = document.querySelectorAll('.new-sushi');
	var counterText = counter.length + ' sushi';
	if (counter.length > 1) {
		counterText += 's';
	}
	sushiCount.innerHTML = counterText;
});

wrapper.addEventListener('click', function(event) {
  var target = event.target;
  if (target.classList.contains('swatch')) {
    var color = getComputedStyle(target)['backgroundColor'];
    var boxes = document.querySelectorAll('.new-sushi');

    boxes.forEach(function(box) {
      box.style.backgroundColor = color;
    });
  }
});

removeButton.addEventListener('click', function(event) {
	var boxes = document.querySelectorAll('.new-sushi');
	boxes.forEach(function(box) {
		box.remove();
	})
});
