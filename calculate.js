/**
 * Created by oscar on 10/11/16.
 */


var keys = document.querySelectorAll(".calculator span");
var operators = ['+','-', '÷','x'];


for(var i = 0; i < keys.length; i++) {
   keys[i].onclick = function(e) {
      var input = document.querySelector(".screen");
      var inputVal = input.innerHTML;
      var btnVal = this.innerHTML;

      // add functionality to clear button
      if(btnVal === 'C') {
         input.innerHTML = "";
      }
      else if (btnVal === 'Del' && btnVal.length > 0) {
           input.innerHTML = inputVal.slice(0 , -1);
      }

      else if (btnVal === '=') {
         if(inputVal.length === 0 ) {
            input.innerHTML = "Feed Me";
         }else
        input.innerHTML = eval(inputVal);
      }

      else  {
            input.innerHTML += btnVal;
         }
      }
}

