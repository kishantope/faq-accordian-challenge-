

const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");
const hidden = document.querySelectorAll(".hidden");
const para = document.querySelectorAll(".para");


for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click", function () {
      plus[i].classList.toggle("hidden");
      minus[i].classList.toggle("hidden");
      para[i].classList.toggle("hidden");
    });
  }
  
  for (let i = 0; i < minus.length; i++) {
    minus[i].addEventListener("click", function () {
      minus[i].classList.toggle("hidden");
      plus[i].classList.toggle("hidden");
      para[i].classList.toggle("hidden");
    });
  }


// 1440 320







/*
const accordians = document.querySelectorAll(".accordian");

accordians.forEach(accordian => {
   // plus.addEventListener("click",function() {

        const plus = accordian.querySelector(".plus");
        

        const answer = accordian.querySelector(".answer");

        answer.classList.plus("show");

        if(answer.classList.contains("show")) {
            plus.src = "images/icon-minus.svg";
        } else {
            pluses.src = "images/icon-minus.svg";
        }
    }
    
    );

*/





/*
plus.addEventListener("click",function() {

    const question = plus.parentElement;

    const answer = question.querySelector(".answer");

    answer.classList.plus("show");

    if(answer.classList.contains("show")) {
        pluses.src = "images/icon-minus.svg";
    } else {
        pluses.src = "images/icon-minus.svg";
    }
}

);
}
*/
//);