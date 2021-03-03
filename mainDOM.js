


 function IMC(){
     
        var P=parseFloat(document.getElementById('peso').value);
        var E=parseFloat(document.getElementById('estatura').value);
         
         var imc=P/(E*E);
         
     var imc_VIEW=(imc.toFixed(1));
     
     
     var TuIMC = document.getElementById("Resultado_IMC");
     if (imc <= 18.5) {
    TuIMC.innerHTML = "Su indice es: " + imc_VIEW + " Se considera bajo de peso.";
  } else if (imc < 24.9) {
    TuIMC.innerHTML ="Su indice es: " +  imc_VIEW + " se considera peso saludable.";
  } else if (imc < 29.9) {
    TuIMC.innerHTML = "Su indice es: " + imc_VIEW + " se considera sobrepeso.";
  } else if (imc < 34.9) {
    TuIMC.innerHTML = "Su indice es: " + imc_VIEW + " se considera obesidad de grado 1";
  } else if (imc < 39.9) {
    TuIMC.innerHTML = "Su indice es: " + imc_VIEW + " se considera obesidad de grado 2";
  } else if (imc > 40) {
    TuIMC.innerHTML = "Su indice es: " + imc_VIEW + " se considera obesidad morbida.";
  return false;
       
 }
 }
    
        
