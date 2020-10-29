function findElement(num, arrNumber) {
    let result="Giá Trị " + num + " Không có Trong Mảng";
    for (let i=0; i< arrNumber.length; i++) {
        if ( num=== arrNumber[i]){
            document.getElementById('result').innerHTML="Giá Trị " + num + " Nằm Trong Mảng Có Vị Trí Thứ " + i;
            break;
        }
        document.getElementById('result').innerHTML=result;
    }
}