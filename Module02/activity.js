var placeholders = document.querySelectorAll('.js-img');
var showImg = function(img) {
  img.style.opacity = 1;
}

Array.prototype.forEach.call(placeholders, function(placeholder) {
  var img = placeholder.querySelector('img');
  placeholder.style.padding = '0 0 ' + (img.height / img.width * 100) + '%';
  if (img.loaded) {
  	showImg(img)
    return;
  }
  img.classList.add('isLoading');
  var showThisImg = function() {
    showImg(img);
    img.removeEventListener('load', showThisImg);
  }
  img.addEventListener('load', showThisImg)
})
