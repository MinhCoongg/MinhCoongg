let abcc;
function check(){
    let giaspham=document.getElementById('checkk').textContent;
     abcc=parseFloat(giaspham.trim());

}
let tam=abcc;
 console.log(tam);

let a11=document.getElementsByClassName('gia');
console.log(a11.length);
for(let i=0;i<a11.length;i++){
    console.log(a11[i].textContent);
    if(a11[i]!=0){
        let row1=a11[i].closest('.top1');
        row1.style.display="none";
        let giatri=true;
        console.log(giatri);
    }
    
}