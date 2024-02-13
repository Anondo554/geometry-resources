function calculteReadaggelArie(){
    const readAggelWithd = document.getElementById('rectangle-with');
    const readAggelWithItem = readAggelWithd.value;
    const withe = parseFloat(readAggelWithItem);
    console.log(withe);

    const calcuteTraigelHIght = document.getElementById('rectangle-hight');
    const readAggelHidtItem = calcuteTraigelHIght.value;
    const hight = parseFloat(readAggelHidtItem);
    console.log(hight);

    const area = withe * hight ;
    console.log('total', area);

    const calcuteTraiagelAriaSpan = document.getElementById('paralle-itemes');
    calcuteTraiagelAriaSpan.innerText = area ;
}