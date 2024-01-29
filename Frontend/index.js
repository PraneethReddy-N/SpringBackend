// document.addEventListener('DOMContentLoaded', (event) => {
// document.getElementById('greetingForm').addEventListener('submit',function(event){
//     event.preventDefault();
//     const name = document.getElementById('name').value;
//     getHelloMessage(name);
//     console.log("in event");
// });
// });

document.addEventListener('DOMContentLoaded', (event) => {
    console.log("dom");
document.getElementById('submit').addEventListener('click',function(){
    console.log("before name");
    event.preventDefault();
    const name = document.getElementById('name').value;
    getHelloMessage(name);
    console.log("in event");
});
});


async function getHelloMessage(name){
    console.log(name);
    try{
        const response = await fetch(`http://localhost:8080?name=${encodeURIComponent(name)}`,{
            method: 'GET'
        });
        if(!response.ok){
            throw new Error('Http error');
        }
        console.log("sent request");
        const message = await response.text();
        console.log("this message we got from spring boot" , message);
        document.getElementById('messageContainer').textContent = message;
        return message;
    }catch(error){
        console.error('Fetch error:', error);
        return null;
    }
}

function navigate(){
    const pages = document.querySelectorAll('.pages');
    const hash = window.location.hash || '#/login';

    pages.forEach(page => page.style.display = 'none');

    if(hash === '#/login'){
        document.getElementById('loginForm').style.display = 'block';
        document.getElementById('registerForm').style.display = 'none';
    }
    else if(hash === '#/register'){
        document.getElementById('registerForm').style.display = 'block';
        document.getElementById('loginForm').style.display = 'none';
    }
}

window.addEventListener('hashchange',navigate);

navigate();

document.addEventListener('DOMContentLoaded', (event) =>{
    document.getElementById('submitRegistration').addEventListener('click', function() {
        event.preventDefault();
        const id = document.getElementById('registerId').value;
        const name = document.getElementById('studentName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;

       

        sendNewlyRegisteredStudentData(id,name,email,password);
    });
});


async function sendNewlyRegisteredStudentData(id,name,email,password){
    const Student = {
        studentId: id,
        name:name,
        email: email,
        password:password
    };
    console.log("The student object:", Student);

    try{
        const response = await fetch('http://localhost:8080/Register',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Student)
        });

        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        window.location.hash = '#/login';

    }catch(error){
        console.error('Fetch error:', error);
    }

}

