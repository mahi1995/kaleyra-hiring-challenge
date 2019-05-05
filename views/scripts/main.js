function call() {
    document.getElementById('alert-caller').hidden = true
    document.getElementById('alert-receiver').hidden = true
    document.getElementById('alert-response').hidden = true
    let caller = document.getElementById('txt-caller')
    let receiver = document.getElementById('txt-receiver')
    if (!caller.value.trim().match(/^\d{10}$/)) {
        document.getElementById('alert-caller').hidden = false
        document.getElementById('alert-caller').innerText = 'Caller number should only contain 10 digits';
        return false;
    }
    if (!receiver.value.trim().match(/^\d{10}$/)) {
        document.getElementById('alert-receiver').hidden = false
        document.getElementById('alert-receiver').innerText = 'Receiver number should only contain 10 digits';
        return false
    } 
    let data = {
        caller: caller.value,
        receiver: receiver.value
    }
    postData('emergency/call', data).then(res => res.json()).then(res => {
        if (res.body.includes('200:OK')) {
            caller.value = ''
            receiver.value = ''
            document.getElementById('alert-response').hidden = false
            document.getElementById('alert-response').className = 'alert alert-success'
            document.getElementById('alert-response').innerText = 'Call has been initiated.'
        } else {
            document.getElementById('alert-response').hidden = false
            document.getElementById('alert-response').className = 'alert alert-danger'
            document.getElementById('alert-response').innerText = 'Unable to call error occurred'
        }
    })
    return false
}

function message() {
    let contact = document.getElementById('txt-contact')
    let message = document.getElementById('txt-message')
    document.getElementById('alert-contact').hidden = true
    document.getElementById('alert-message').hidden = true
    document.getElementById('alert-message-response').hidden = true
    let contacts = contact.value.trim().split(',')
    for (ct of contacts) {
        if (!ct.match(/^\d{10}$/)) {
            document.getElementById('alert-contact').hidden = false
            document.getElementById('alert-contact').innerText = `${ct} is not a valid contact number. `;
            return false;
        }
    }
    if (message.value.trim().length < 1) {
        document.getElementById('alert-message').hidden = false
        document.getElementById('alert-message').innerText = `Plaease enter a valid message`;
        return false;
    }
    let data = {
        contacts: contact.value.trim(),
        message: message.value.trim()
    }
    postData('emergency/message', data).then(res => res.json()).then(resp => {
        resp = JSON.parse(resp)
        if (resp.status.includes('OK')) {
            contact.value = ''
            message.value = 'Help!!!'
            document.getElementById('alert-message-response').hidden = false
            document.getElementById('alert-message-response').className = 'alert alert-success'
            document.getElementById('alert-message-response').innerText = 'Message has been sent.'
        } else {
            document.getElementById('alert-message-response').hidden = false
            document.getElementById('alert-message-response').className = 'alert alert-danger'
            document.getElementById('alert-message-response').innerText = 'Error!! unable to send the message'
        }
    })
    return false
}

function login() {
    let userName = document.getElementById('username')
    let password = document.getElementById('password')
    let body = {
        userName:userName.value.trim(),
        password:password.value.trim()
    }
    postData('auth/login', body).then(res => {
        if (res.ok) {
            return res.json()
        } else {
            alert('Invalid Credentials')
        }
    }).then(resp => {
        if (resp && resp.token) {
            userName.value=''
            password.value=''
            localStorage.setItem('token', resp.token)
            window.location.href='profile'
        } 
    })
}

function postData(url, body) {
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    })
}

function logout(){
    localStorage.removeItem('token')
    location.href='/'
}
function initCall(caller,receiver,name){
    let body = {
        caller,
        receiver
    }
    postData('emergency/call', body).then(res => res.json()).then(res => {
        if (res.body.includes('200:OK')) {
            alert(`Call has been initiated to ${name}`)
        } else {
            alert( `Unable to call`)
        }
    })
}
function sendMessage(contacts,message,name){
    let data = {
        contacts,
        message
    }
    postData('emergency/message', data).then(res => res.json()).then(resp => {
        resp = JSON.parse(resp)
        if (resp.status.includes('OK')) {
            alert(`Message has been sent to ${name}`)
        } else {
            alert( `Unable to send message`)
        }
    })
}