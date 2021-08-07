// Filterable Image Gallery Js Script

// selecting all required elements
const filterItem = document.querySelector(".items");
// console.log(filterItem);
const filterImges = document.querySelectorAll(".image");
// console.log(filterImges);


window.onload = () => { // once window loaded
    
    filterItem.onclick = (selectedItem) => { // if user clicks on filterItem div
        if (selectedItem.target.classList.contains("btn-outline-primary")) { // if user selected item has .btn-outline-primary class
        
            filterItem.querySelector(".active").classList.remove("active"); // remove the active class which is in first item
            selectedItem.target.classList.add("active"); // add that active class on user selected item
            let filterName = selectedItem.target.getAttribute("data-name"); // getting data-name value of user selected item
        
            filterImges.forEach((image) => {
                let filterImg = image.getAttribute("data-name"); // getting image data-name value
                
                // if user selected item data-name value is equal to images data-name value
                if ((filterImg == filterName)) {
                    image.classList.remove("hide"); // first remove the hide class from the image
                    image.classList.add("show"); // add show class in image
                } else {
                    image.classList.add("hide"); // add hide class in image
                    image.classList.remove("show"); // remove show class from the image
                }
            });
        }
    }
    
    for (let i = 0; i < filterImges.length; i++) {
        filterImges[i].setAttribute("onclick", "preview(this)"); // adding onclick attribute in all available images
    }
}

// fullscreen image preview function

// selecting all required elements
const previewBox = document.querySelector(".preview-box"),
categoryName = previewBox.querySelector(".title p"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
shadow = document.querySelector(".shadow-preview");

function preview(element) {
  //once user click on any image, remove the scroll bar of the body
  document.querySelector("body").style.overflow = "hidden";

  let selectedPrevImg = element.querySelector("img").src; //getting user clicked image source link 
  let selectedImgCategory = element.getAttribute("data-name"); // getting user clicked image data-name value
  
  previewImg.src = selectedPrevImg; // passing the user clicked image source in preview image source
  categoryName.textContent = selectedImgCategory; // passing user clicked data-name value in category name
  previewBox.classList.add("show"); // show the preview image box
  shadow.classList.add("show"); // show the light grey background
  
  closeIcon.onclick = () => { // if user click on close icon of preview box
    previewBox.classList.remove("show"); // hide the preview box
    shadow.classList.remove("show"); // hide the light grey background
    document.querySelector("body").style.overflow = "auto"; //show the scroll bar on body
  }
} 