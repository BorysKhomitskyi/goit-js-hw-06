const formLogin = document.querySelector(".login-form");

let formInfo = new Object();

formLogin.addEventListener("submit", formSubmit);

function formSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget; 

    if (email.value === "" || password.value === "") {
        return alert("Всі поля повинні бути заповнені!");
    }
    formInfo.email = `${email.value}`;
    formInfo.password = `${password.value}`;
    console.log(formInfo);   
    
    event.currentTarget.reset();   
} 
