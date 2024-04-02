const sortbyContainer = document.querySelector('.sortby-container');
const sortbyOptions = document.querySelector('.sortby-options');
const filterContainer = document.querySelector('.filters-container');
const filterOptions = document.querySelector('.filters-options');
const assignmentBox = document.querySelector('.assignment-box');
const assignmentPopUpBox = document.querySelector('.popup-wrapper');
const assignmentCloseButton = document.querySelector('.popup-close-button');


const popupBeginPopup = document.querySelector('.popup-begin-popup');
const popupCloseButton = document.querySelector('.popup-begin-close-button');
const popupBeginButton = document.querySelector('.popup-begin-button');

sortbyContainer.addEventListener('click', function() {
  sortbyOptions.classList.toggle('show');
});

filterContainer.addEventListener('click', function() {
  filterOptions.classList.toggle('show');
})

assignmentBox.addEventListener("click", function() {
  assignmentPopUpBox.classList.add('active')
})

assignmentCloseButton.addEventListener("click", function() {
  assignmentPopUpBox.classList.remove('active');
})


popupBeginButton.addEventListener('click', function() {
  popupBeginPopup.classList.add('pop');
});

popupCloseButton.addEventListener('click', function() {
  popupBeginPopup.classList.remove('pop');
});

