const pictures = document.querySelectorAll(".slides");

let slideIndex = 1;

showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  let i;

  if (n > pictures.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = pictures.length;
  }

  for (i = 0; i < pictures.length; i++) {
    pictures[i].style.display = "none";
  }

  pictures[slideIndex - 1].style.display = "block";
}
