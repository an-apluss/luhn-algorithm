function validateFunction(){
  
  let resultHolder;
  let result = document.getElementById('result');
  let digitInput = document.getElementById('digitInput').value;
 
  //this convert digit from input element to string
  let digitToString = digitInput.toString();
  
  //this remove all whitespace available in the input element
  let digit = digitToString.replace(/ /g, '');
  
  //this check if digit has non-digit
  //if digit contain only digit string .test() return true
  //else its return false
  let isNumeric = /^[0-9]+$/.test(digit); 
  
  let digitLength = digit.length;

  
  if(isNumeric){
    if( digitLength <= 1 ){
      resultHolder = 'Digit of length 1 or less is not valid';
      result.removeAttribute("class");
      result.classList.add("red");
    }else{

      let sum = 0;
      let isSecond = false;

      for( let digitIndex = digitLength - 1; digitIndex >= 0; digitIndex--){

        let d = parseInt( digit[digitIndex] );

        if(isSecond === true){
          d = d * 2;
        }
        
        sum += Math.floor(d/10);
        sum += d % 10;

        isSecond = !isSecond;
       
      }

      if( sum % 10 === 0){
        resultHolder = digitInput + ' is Valid';
        result.removeAttribute("class");
        result.classList.add("green");
      }else{
        resultHolder = digitInput + ' is not Valid';
        result.removeAttribute("class");
        result.classList.add("red");
      }

    }
  }else{
    if(  digitInput === "" ){
      resultHolder = 'Input field is empty';
      result.removeAttribute("class");
      result.classList.add("red");
    }else{
      resultHolder = 'All non-digit characters are disallowed';
      result.removeAttribute("class");
      result.classList.add("red");
    } 
  }
  
  result.innerHTML = resultHolder;
  
}