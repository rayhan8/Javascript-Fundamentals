const randomNumber = 13;

document.querySelector('.form').addEventListener('submit',function(e){
 e.preventDefault();
 let value = document.getElementById("ammount").value;
 // Bug : when input comes from html form tag, it will be string type
 // solution is, value = parseInt(value);
 value = parseInt(value);
 console.log("Input Value Type");
 console.log(value);
 console.log("Sum of Two Values");
 console.log(randomNumber + value);
})