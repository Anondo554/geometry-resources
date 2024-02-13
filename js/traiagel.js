function calcuteTraiagelAria(){ 
    const triangelItem = document.getElementById('traiagel-beta');
    const triangelText = triangelItem.value;
    const base = parseFloat(triangelText);
    console.log(base);

    const calcuteTraigelHIght = document.getElementById('triangel-hight');
     const betaHight = calcuteTraigelHIght.value;
     const hight= parseFloat(betaHight);
     console.log(hight);
     
     const area = 0.5 * base * hight;
     console.log('toal', area);

     const calcuteTraiagelAriaSpan = document.getElementById('sqore');
    calcuteTraiagelAriaSpan.innerText = area;
} 
