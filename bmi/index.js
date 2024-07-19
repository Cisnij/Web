var name2,heigth2,weight2,ketqua;



var bmi = function()
{
    name2=document.getElementById("name").value;
    weight2=document.getElementById("weight").value;
    heigth2=document.getElementById("height").value;
    
    ketqua= weight2 / ((heigth2 * heigth2)/10000);
    console.log(ketqua)
    document.getElementById('result4').innerHTML= "Xin chào " + name2;
    document.getElementById('result3').innerHTML= 'Số BMI: ' + ketqua;
    
    
    if (weight2=='' || heigth2=='' || name2 == ''){ 
        alert('Vui lòng nhập chỗ còn thiếu hoặc nhập đúng cú pháp')
    }         
    else if(ketqua < 18.5){
    document.getElementById('result2').innerHTML=  'Bạn bị suy dinh dưỡng'
    }
    else if(ketqua > 18.5 && ketqua < 24.9){
    document.getElementById('result2').innerHTML=  'Bạn bình thường! Chúc mừng bạn'
    }
    else if(ketqua=25 && ketqua <29.9){
        document.getElementById('result2').innerHTML='Bạn hơi béo'
    }
    else{
        document.getElementById('result2').innerHTML='Bạn bị béo phì! Cố giảm cân nhé'
    } 
}

   



