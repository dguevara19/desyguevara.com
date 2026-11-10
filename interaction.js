function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}

function showDescription(title, text) {
  document.getElementById('descTitle').innerText = title;
  document.getElementById('descText').innerText = text;
}

function openModal(title, text, imgSrc) {
  document.getElementById('modalTitle').innerText = title;
  document.getElementById('modalText').innerText = text;
  document.getElementById('modalImg').src = imgSrc;
  document.getElementById('galleryModal').classList.add('active');
}

function closeModal(event) {
  // Closes the modal only if clicking the dark overlay background
  if (event.target.classList.contains('modal-overlay')) {
    document.getElementById('galleryModal').classList.remove('active');
  }
}