const ringButtons = document.querySelectorAll(".ring-button");

for(let i = 0; i < ringButtons.length; i++){
  const ringBtn = ringButtons[i];
  ringBtn.addEventListener("click", function(event){
    const color = event.target.id.replace("-color", "");
    // console.log(color);
    for(let j = 0; j < ringButtons.length; j++){
      // Before adding purple I'm checking whether they have purple or not and removing them and adding white
      ringButtons[j].classList.remove("border-purple-600");
      ringButtons[j].classList.add("border-gray-300");
    }

    // adding border color
    event.target.classList.add('border-purple-600');
    event.target.classList.remove("border-gray-300");

    const productImage = document.getElementById("product-image");
    productImage.src = '../images/' + color + ".png";
  });
}

function selectWristSize(size){
  const sizes = ["S", "M", "L", "XL"];
  for(let i = 0; i < sizes.length; i++){
    const button = document.getElementById('size-'+sizes[i]);
    const element = sizes[i];
    if(size === element){
      button.classList.add("border-purple-600");
    }
    else {
      button.classList.remove("border-purple-600");
    }
  }
}