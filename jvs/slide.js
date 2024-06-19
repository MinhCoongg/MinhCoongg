
        function taochon(){
            var left=document.querySelector('.minhcong');
            left.scrollBy(350,0);
          }

        function taochonc(){
            var right=document.querySelector('.minhcong');
            right.scrollBy(-350,0);
        }


        function taisao(){
            var left=document.querySelector('.vansanh');
            left.scrollBy(350,0);
          }
        function ngochieu(){
            var right=document.querySelector('.vansanh');
            right.scrollBy(-350,0);
        }
        function homnay(){
            var left=document.querySelector('.lanba');
            left.scrollBy(350,0);
          }
        function tanphat(){
            var right=document.querySelector('.lanba');
            right.scrollBy(-350,0);
        }
        function vietweb(){
            var left=document.querySelector('.lanbon');
            left.scrollBy(350,0);
          }
        function minhdung(){
            var right=document.querySelector('.lanbon');
            right.scrollBy(-350,0);
        }
        function tkweb(){
            var left=document.querySelector('.lannam');
            left.scrollBy(350,0);
          }
        function minhsang(){
            var right=document.querySelector('.lannam');
            right.scrollBy(-350,0);
        }
            function caothang(){
            var left=document.querySelector('.lansau');
            left.scrollBy(350,0);
          }
        function hcm(){
            var right=document.querySelector('.lansau');
            right.scrollBy(-350,0);
        }
        function ducthang(){
            var left=document.querySelector('.lanbay');
            left.scrollBy(350,0);
          }
        function bacton(){
            var right=document.querySelector('.lanbay');
            right.scrollBy(-350,0);
        }

// chuyen chuoi thanh so(menu);
let a=document.getElementsByClassName('gia_sp');
for(let i=0;i<a.length;i++){
let div=a[i];
let gia=parseInt(div.textContent.trim());
div.setAttribute('data-value',gia);
div.textContent=gia.toLocaleString('vi',{style:'currency',currency:'VND'});
}

// tinh tong tien
function tongTien(){
  
    let arr=document.querySelectorAll('.gia_sp');
    for(let i=0;i<arr.length;i++){
      let row=arr[i].closest('.quoang_ba');
    let giatien=row.querySelector('.gia_sp').getAttribute('data-value');
    let giaSalse=row.querySelector('.ma_sale')
    let gia=parseInt(giaSalse.textContent.trim());
   let thanhTien=giatien-(giatien*(gia/100));
    row.querySelector('.vnd').textContent=thanhTien.toLocaleString('vi',{style:'currency',currency:'VND'});
    }
    
}
tongTien();


function checkform(){
  var sdt = document.getElementById('sdt1');
  var tendk = document.getElementById('tendk');
  var pass = document.getElementById('pass');
  var pass2 = document.getElementById('pass2');
  if(sdt.value!=""){
      if(sdt.value.length!=10){
          alert("Nhap so dien thoai sai!");
          sdt.focus();
          return;
      }
  }
  else{
      alert("Vui Long nhap so dien thoai");
      sdt.focus();
  }

  if(tendk.value!=""){
      if(tendk.value.length>=6 && tendk.value.length<=32){
              var leng=tendk.value;
              var check=tendk.value.length;
              var kiemTra=0;
              var kiemTra1=0;
              var kiemTra2=0;
              var kiemtra3=0;
              if(leng[0]>=1&& leng[0]<=9){
                  alert("Ten dang nhap sai( bao gom: chu so, chu hoa, chu thuong va ki tu)!");
                  return;
              }

              for(var i=0;i<check;i++){

                 if(leng[i]>='A' &&leng[i]<='Z'){
                  kiemTra=1;
                 }
                 else if(leng[i]>='a'&&leng[i]<='z'){
                  kiemTra1=1;
                 }
                 else if(leng[i]>='1'&&leng[i]<='9'){
                  kiemTra2=1;
                 }
                 else if(leng[i]=='_'){
                  kiemtra3=1;
                 }

                
              }
              if(kiemTra==1 &&kiemTra1==1 &&kiemTra2==1&& kiemtra3==1){
                  
              }
              else{
                  alert("Ten dang nhap sai( bao gom: chu so, chu hoa, chu thuong va ki tu)!");
                  return;
              }
      }
      else{
          alert("Ten dang ki khong du do dai( tu 8-32 ki tu)!");
          return;
      }
  }




  if(pass.value!=""){
      if(pass.value.length>=6 ){
              var leng=pass.value;
              var check=pass.value.length;
              var kiemTra=0;
              var kiemTra1=0;
              var kiemTra2=0;
              for(var i=0;i<check;i++){

                 if(leng[i]>='A' &&leng[i]<='Z'){
                  kiemTra=1;
                 }
                 else if(leng[i]>='a'&&leng[i]<='z'){
                  kiemTra1=1;
                 }
                 else if(leng[i]>='1'&&leng[i]<='9'){
                  kiemTra2=1;
                 }

                
              }

              if(kiemTra==1 &&kiemTra1==1 &&kiemTra2==1){
                  
              }
              else{
                  alert("Mat khau sai( bao gom: chu so, chu hoa va chu thuong)!");
                  return;
              }
      }
      else{
          alert("Mat khau khong du do dai( it nhat 6 ki tu)!");
          return;
      }
  }

  if(pass.value ==pass2.value){
     
  }
  else{
      alert("Mật khẩu không trùng khớp!");
      return;
  }


}


function checkform1(){
  var tendk = document.getElementById('tendn');
  var pass = document.getElementById('passdn');


  if(tendk.value!=""){
      if(tendk.value.length>=6 && tendk.value.length<=32){
              var leng=tendk.value;
              var check=tendk.value.length;
              var kiemTra=0;
              var kiemTra1=0;
              var kiemTra2=0;
              var kiemtra3=0;
              if(leng[0]>=1&& leng[0]<=9){
                  alert("Ten dang nhap sai( bao gom: chu so, chu hoa, chu thuong va ki tu)!");
                  return;
              }

              for(var i=0;i<check;i++){

                 if(leng[i]>='A' &&leng[i]<='Z'){
                  kiemTra=1;
                 }
                 else if(leng[i]>='a'&&leng[i]<='z'){
                  kiemTra1=1;
                 }
                 else if(leng[i]>='1'&&leng[i]<='9'){
                  kiemTra2=1;
                 }
                 else if(leng[i]=='_'){
                  kiemtra3=1;
                 }

                
              }
              if(kiemTra==1 &&kiemTra1==1 &&kiemTra2==1&& kiemtra3==1){
                  
              }
              else{
                  alert("Ten dang nhap sai( bao gom: chu so, chu hoa, chu thuong va ki tu)!");
                  return;
              }
      }
      else{
          alert("Ten dang ki khong du do dai( tu 8-32 ki tu)!");
          return;
      }
  }




  if(pass.value!=""){
      if(pass.value.length>=6 ){
              var leng=pass.value;
              var check=pass.value.length;
              var kiemTra=0;
              var kiemTra1=0;
              var kiemTra2=0;
              for(var i=0;i<check;i++){

                 if(leng[i]>='A' &&leng[i]<='Z'){
                  kiemTra=1;
                 }
                 else if(leng[i]>='a'&&leng[i]<='z'){
                  kiemTra1=1;
                 }
                 else if(leng[i]>='1'&&leng[i]<='9'){
                  kiemTra2=1;
                 }

                
              }

              if(kiemTra==1 &&kiemTra1==1 &&kiemTra2==1){
                  
              }
              else{
                  alert("Mat khau sai( bao gom: chu so, chu hoa va chu thuong)!");
                  return;
              }
      }
      else{
          alert("Mat khau khong du do dai( it nhat 6 ki tu)!");
          return;
      }
  }



}
// main.js
const accountButton = document.getElementById('accountButton');
const loginDialog = document.getElementById('loginDialog');

accountButton.addEventListener('click', () => {
  loginDialog.style.display = 'block';
});
// //phần 2
// const account = document.getElementById('account');
// const login = document.getElementById('login');

// account.addEventListener('click', () => {
//   login.style.display = 'block';
// });

// Them san pham vao gio hang



          


