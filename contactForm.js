function init() {
    let element = document.getElementById('sendBtn');
    element.addEventListener('click', function () {
        // preventDefault();
        sendForm();
    });
}

function sendForm () {
    const formData = new FormData(document.getElementById('contact-form'));
    console.log('fetching');
    fetch ('https://api.jsonbin.io/v3/b/651850ec54105e766fbbed6a', 
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': '$2a$10$CJAtBX3ibaHAuCMcvVWpouA7rRzfkz83w5/afsYDFYGiv/K1xtXpS'
        },
        body : new URLSearchParams(formData).toString()
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
    .then(error =>  {
        console.error(
            'Error while posting data to server',error);
    });
    console.log('done fetching');
}