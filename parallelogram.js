 function calcutePsrslleAria(){
    const psrslleItem = document.getElementById('paralle-beta');
    const paralleItemes = psrslleItem.value;
    const paralleBeta = parseFloat(paralleItemes);
    console.log(paralleBeta);

    const paralleHide = document.getElementById('paralle-hight')
    const paralleHides = paralleHide.value;
    const paralleHiged = parseFloat(paralleHides);
    console.log(paralleHiged);

    const areas = paralleBeta * paralleHiged;
    console.log('total', areas);

    const paralleSpan = document.getElementById('textItems');
    paralleSpan.innerText = areas ;
 }