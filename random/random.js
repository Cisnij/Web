var number1,number2,send,ngaunhien,ketqua,max,min;






var random=function()
{
number1=document.getElementById('num1').value;
number2=document.getElementById('num2').value;
max =number2-number1 +1;
min=number1;


ngaunhien=Math.floor(Math.random() * (min+max-min))+min;
console.log(ngaunhien)




document.getElementById('result').innerHTML='Kết quả random là ' + ngaunhien/10;


}