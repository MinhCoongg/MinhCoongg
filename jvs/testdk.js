


let a=document.getElementsByClassName('gia');
for(let i=0;i<a.length;i++){
let div=a[i];
let gia=parseInt(div.textContent.trim());
div.setAttribute('data-value1',gia);
div.textContent=gia.toLocaleString('vi',{style:'currency',currency:'VND'});
}

let xoa=document.getElementsByClassName('btnDel');
for(let i=0;i<xoa.length;i++){
    let button=xoa[i];
    button.addEventListener('click',function()
    {
            let button_xoa=event.target;
            let check=confirm("Bạn có chắc xoá sản phẩm này không");
            if(check==true){
                a++;
                button_xoa.parentElement.parentElement.remove();
            }

    }
)
}

function tinhTien(){
    let arr=document.querySelectorAll(' input');
    let sum=0;
    for(let i=0;i<arr.length;i++){
        let row=arr[i].closest('.top1');
        let sl=arr[i].valueAsNumber;
        let gia=row.querySelector('.gia').getAttribute('data-value1')
        let thanhTien=sl*gia;
    //    sum+=thanhTien;
        row.querySelector('.thanhTien').textContent=thanhTien.toLocaleString('vi',{style:'currency',currency:'VND'});
    }
    // document.querySelector('.tong-tien').textContent=sum.toLocaleString('vi',{style:'currency',currency:'VND'});
   }
  tinhTien();
          


