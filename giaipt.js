function giaiptbacnhat(a,b) {
    let x =0;
    if (a === 0) {
        document.getElementById('result').innerHTML = "Phương Trình Vô Nghiệm.";
    } else if (b === 0) {
        document.getElementById('result').innerHTML = "Phương Trình Có Nghiệm x=0.";
    } else {
        x = -b / a;
    }
    document.getElementById('result').innerHTML= "Phương Trình Có Nghiệm X Là: " + x + ".";
}