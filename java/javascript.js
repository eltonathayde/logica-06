


function verificar(){
    let number1 = parseInt(document.getElementById('number1').value);
    let number2 = parseInt(document.getElementById('number2').value);
    let resultado = document.getElementById('resultado');

if(number1 > number2){
    
    resultado.innerHTML=(`maior numero é ${number1}`)
    

}
else if (number2>number1){
     resultado.innerHTML=(`maior numero é ${number2}`)

}
else if (number1=number2){
    resultado.innerHTML=(`nesse caso ambos numeros tem o mesmo valor`)

}
    
  }

function maior2(){
    let clicar1 = parseInt(document.getElementById('clicar1').value);
    let resultado2 = document.getElementById("resultado2");


if(clicar1 > 0){
    resultado2.innerHTML = (`o numero ${clicar1} é positivo  !!!`)
}
else if (clicar1 <0){
    resultado2.innerHTML = (`o numero  ${clicar1} é negativo!!!`)

} else if (clicar1=== 0){
    resultado2.innerHTML=(`o numero  ${clicar1} é neutro`)
}
    
    
    
 }

 function atividade(){
     let letra = String(document.getElementById('letra').value);
     let resultado3 =document.getElementById('resultado3');
   
     


if(letra== 'm'){
    resultado3.innerHTML=(`o sexo é masculino`)

} else if(letra =='f'){
   resultado3.innerHTML=(`o sexo é feminino`)
} 
else {
    resultado3.innerHTML=(`sexo infinido`)
} 

    
 }

 function exame(){
     let media = parseInt(document.getElementById('media').value);
     let nota = document.getElementById('nota');
    console.log('etapa1')
    
    if(media == 10){
        nota.innerHTML=(`você teve aprovação distinta`)
   console.log('etapa2') 
} else if(media < 7){
         nota.innerHTML=(`você foi reprovado sua nota é  ${media}`)
    console.log('etapa3')
} else if(media >=7){
    nota.innerHTML=(`você foi aprovado sua nota é ${media}`)
}
 
}


function vogal(){
    let letra2 = String(document.getElementById('letra2').value);
    let resultado4 = document.getElementById('resultado4')


if(letra2 == 'a' || letra2== 'e' || letra2== 'i' || letra2== 'o' || letra2== 'u' ){
    resultado4.innerHTML = (`sua letra é uma vogal`)
} else{
    resultado4.innerHTML=(`sua letra é uma consoante`)
}

}
function box(){
    let legal= parseInt(document.getElementById('legal').value);
    let legal2= parseInt(document.getElementById('legal2').value);
    let legal3= parseInt(document.getElementById('legal3').value);
    let resultado5= document.getElementById('resultado5')


    
   
    



   

   