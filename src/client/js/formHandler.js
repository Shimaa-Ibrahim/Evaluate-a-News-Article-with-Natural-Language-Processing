function handleSubmit(event, id, type) {
    event.preventDefault()
    document.getElementById('results').style.display ="none";

    // check what text was put into the form field
    let value = document.getElementById(id).value
    let check =Client.checkInput(value, type);
    if(check.check){
        fetch(`http://localhost:8080/api/${type}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            [type] : value
        }) 
    })
    .then(res => res.json())
    .then(function(res) {
        Client.handleResponse(res);
    })
    .catch(err => {
        console.log(err)
    });
    }else {
        Client.handleResponse({
            status: {
                code: 1,
                msg : check.msg
            }
        });
    }
    
}

export { 
    handleSubmit
 }
