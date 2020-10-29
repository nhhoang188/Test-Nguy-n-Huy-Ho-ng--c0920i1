function findElement(num, arrNumber) {
    for (let i=0; i< arrNumber.length; i++) {
        if ( num=== arrNumber[i]){
            document.getElementById('result').innerHTML="Giá Trị " + num + " Nằm Trong Mảng Có Vị Trí Thứ " + i;
        }
    }
}