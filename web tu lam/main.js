
 var matkhau= 16072004;

var matkhau2;



for(var i=0;i<10000;i++){
    matkhau2=prompt('Nhap vao mat khau');
    
    
    if(matkhau2 ==matkhau){
       alert('Dang nhap thanh cong')
        break;
    }
    else{

    alert('Dang nhap that bai')
   
    
    
    
    }
    
}






/*


var matkhau2,matkhau;

matkhau=prompt('Dat mat khau')
confirm('Ban chac chan khong')
document.write('Mật khẩu: '+  matkhau)
for(var i=0;i<10000;i++){
    
    matkhau2=prompt('Nhap vao mat khau');

    if(matkhau2 ==matkhau){
        break;
    }
    else{


      alert('Dang nhap that bai')
    

    2


    
    }
    
} 


*/

/*var so1,tong=0;

so1= prompt('Nhap bang cuu chuong ');

document.write('bang cuu chuong '+ so1 + "<br>");

for(var i=1;i<=10;i++){
    tong=so1 * i;
    
    
    document.write(so1 , 'x' , i , '=' , tong +"<br>");
  
}

*/
var ten = function(){
    var ten2 = document.getElementById("name1").value
    var xinchao = 'Xin chao ' + ten2
    document.getElementById("hi3").innerHTML=xinchao;
    console.log(ten2)
    }