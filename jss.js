const clr=document.getElementsByTagName('body');
const switchButton = document.getElementById('mySwitch');
switchButton.addEventListener('change', function() {
    if (this.checked) {
        // Switch is ON
        console.log('Switch is ON');
    } else {
        // Switch is OFF
        console.log('Switch is OFF');
    }
    if (this.checked) {
    clr.style.bgcolor='black';
}
    });
