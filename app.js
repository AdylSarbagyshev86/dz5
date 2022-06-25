const som = document.querySelector("#som"); 
const euro = document.querySelector("#euro"); 
const usd = document.querySelector("#usd"); 
 
const convert = (elem, target, isTrue, isTrue2) => { 
 elem.addEventListener("input", ()=> { 
  const reqest = new XMLHttpRequest(); 
 reqest.open("GET", "data.json"); 
 reqest.setRequestHeader("Content-type", "application/json"); 
 reqest.send(); 
 reqest.addEventListener("load", ()=> { 
  const response = JSON.parse(reqest.response); 
  if(isTrue){ 
   target.value = (elem.value / response.usd).toFixed(2); 
  }else { 
   target.value = (elem.value * response.usd).toFixed(2); 
  }; 
  elem.value === "" ? (target.value = "") : null; 
 }); 

 elem.addEventListener("input", ()=> { 
    const request = new XMLHttpRequest(); 
  reqest.open("GET", "data.json"); 
   reqest.setRequestHeader("Content-type", "application/json"); 
   reqest.send(); 
   reqest.addEventListener("load", ()=> { 
   const form = JSON.parse(request.form); 
   if(isTrue2){ 
    target.value = (elem.value / form.euro).toFixed(2); 
   }else { 
    target.value = (elem.value * form.euro).toFixed(2); 
   } 
   elem.value === "" ? (target.value = "") : null; 
  }); 
 }); 
}); 
} 
 
convert(som, euro, 12); 
convert(euro, som); 
convert(som, usd, 15); 
convert(usd, som) 



