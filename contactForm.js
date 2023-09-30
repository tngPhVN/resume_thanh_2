function init() {
    let element = document.getElementById('sendBtn');
    element.addEventListener('click', function (event) {
        event.preventDefault();
        sendForm();
    });
}

function sendForm () {
    const formData = new FormData(document.getElementById('contact-form'));
    const data = Object.fromEntries(formData); 
    console.log(data);

    fetch ('https://api.jsonbin.io/v3/b', 
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': '$2a$10$tzXHMerqZSseR.I2WTO6Xeuwa8exDMV3ZB.BvZzZ91eEuDCp0wBee',
            'X-Access-Key': '$2a$10$8aBfmuIYkZGRPH34zd1TF.tby8YrXbDT1xh43u64TiNPktm4Lkdxi',
            'X-Bin-Name': 'New Contact Info',
        },
        body : JSON.stringify(data)
    })
    .then(response => 
        {
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            } else {
                return response.json();
            }
        }) 
    .then(data => {
        console.log(data);
    })
    .catch(error =>  {
        console.error(
            'Error while posting data to server',error);
    });
    alert ("Done Sending. I will contact you back shortly.");
}

window.addEventListener('DOMContentLoaded', init);