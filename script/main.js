(function() {

//This is the "page" changer
var currentClass,
	links = document.querySelectorAll('.links'),
	swappingCon = document.querySelector('.welcomePage'),
	heading = document.querySelector('.welcomePage h1'),
	paragraph = document.querySelector('#paraphrase'),
	welcomeImage = document.querySelector('#mainImage'),
	content = document.querySelector('#content');

function changePage() {
	heading.classList.remove(currentClass);
	swappingCon.classList.remove(currentClass);

	heading.classList.add(this.id);
	swappingCon.classList.add(this.id);
	currentClass = this.id;

	heading.firstChild.nodeValue = dynamicContent[this.id].headline;
	paragraph.innerHTML = dynamicContent[this.id].text;
	content.innerHTML = dynamicContent[this.id].code;
}

[].forEach.call(links, function(link) {
	link.addEventListener('click',changePage,false);
});

//This is the drop down nav
var nav= document.getElementById('hamIcon');
var drop= document.getElementById('navDropdown');

function dropDownShow() {
 drop.classList.toggle("hidden");
  TweenLite.to(drop, 1,{ ease: Bounce.easeOut, y: 50});
 }

 function dropLinkClicked() {
	 drop.classList.toggle("hidden");
 }

nav.addEventListener('click', dropDownShow , false);
drop.addEventListener('click',dropLinkClicked, false);

})();
