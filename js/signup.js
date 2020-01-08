
window.onload = function () {
    const signupbtn = document.getElementById('btnSignUp');
    
    signupbtn.addEventListener('click', function () {
        const userNameNode = document.getElementById('username');
        const passWordNode = document.getElementById('password');
        const username = userNameNode.value;
        const password = passWordNode.value;

        fetch('http://localhost:4000/api/v1/job', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        })
            .then(data => {
                return data.json();
            })
            .then(json => {
                // console.log(json)
                // alert(json.message)
                if (json.success === 'true') {
                    alert('Sign Up Successful');
                    window.location.href = '/login'
                }
                else {
                    if(json.success === 'false'){
                        alert(json.message)
                    }
                }
            })
            .catch(err => {
                console.log(err)
            })
    })
}
