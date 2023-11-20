const orderForm = document.querySelector('#form-content');
const sendBtn = document.getElementById('submitOrder');
const defaultText = document.getElementById('orderDefault');
const sentText = document.getElementById('orderSent');

// send form data to google sheet
orderForm.addEventListener('submit', (e) => {
    // reset ukuran button
    sendBtn.style.transform = 'scale(1)';
    e.preventDefault();
    let data = new FormData(orderForm);
    fetch('https://script.google.com/macros/s/AKfycbxrvhmN11KwkbmyBCKMtvbxRy89GRPqfmiXcspaLDX5hFbvm-rnwZMIJW-xWv3rGJPO/exec', {
        method: "POST",
        body: data
    });
    // reset form setelah 1.1 detik
    setTimeout(() => {
        orderForm.reset();
    }, 2100);
});

function changeSendBtn() {
    defaultText.style.display = 'none';
    sentText.style.display = 'inline';
    sendBtn.style.backgroundColor = 'rgba(228, 140, 67, 0.8)';

    setTimeout(() => {
        defaultText.style.display = 'inline';
        sentText.style.display = 'none';
        sendBtn.style.backgroundColor = '#E48C43';
    }, 2000);
}

// submit button hover
sendBtn.addEventListener('mouseenter', hoverBtn);
function hoverBtn() {
    sendBtn.style.transform = 'scale(1.008)';
}

sendBtn.addEventListener('mouseleave', hoverBtn2);
function hoverBtn2() {
    sendBtn.style.transform = 'scale(1)';
}