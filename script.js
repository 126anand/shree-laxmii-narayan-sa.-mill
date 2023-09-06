const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {

    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })

}

if (close) {

    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })

}
var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");

for (var i = 0; i < smallimg.length; i++) {
  smallimg[i].addEventListener("click", function () {
    var tempSrc = MainImg.src; // Store the current MainImg source
    MainImg.src = this.src; // Set the MainImg source to the clicked small image
    this.src = tempSrc; // Set the clicked small image source to the previously displayed MainImg source
  });
}
