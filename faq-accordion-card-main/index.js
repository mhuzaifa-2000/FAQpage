
var dropdownButtons=document.querySelectorAll(".dropdown-button")
var answers= document.querySelectorAll(".answer")

for (var i = 0; i < dropdownButtons.length; i++) {
    (function(index) {
         dropdownButtons[index].addEventListener("click", function() {
            if(answers[index].style.display=='none')
                answers[index].style.display='block'
            else
                answers[index].style.display='none'
          })
    })(i);
 }



