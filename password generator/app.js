
const mainEL = document.querySelector('.main');


const passwordEL = document.createElement('input');
passwordEL.classList.add('password');
passwordEL.setAttribute('placeholder', 'generate password'); 

passwordEL.addEventListener('keypress', (e) =>{
   e.preventDefault();
});

const copyBtn = document.createElement('button');
copyBtn.classList.add('password-button');
copyBtn.innerText = 'copy';

copyBtn.addEventListener('click', (e) => {
   let password = generatorPassword(24);
   passwordEL.value = password; 
   navigator.clipboard.writeText(password); 
});


const generatorBtn = document.createElement('button');
generatorBtn.classList.add('password-button');
generatorBtn.innerText = 'generate';

generatorBtn.addEventListener('click', (e) => {
   let password = generatorPassword(24);
   passwordEL.value = password;
});

function generatorPassword(passwordLength) {
    const numderChars = "0123456789";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const symbolChars = "!@#$%^&*()_+-=[]{}|<>?";
    const allChars = numderChars + upperChars + lowerChars + symbolChars;

    let randomString = '';
    
    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * allChars.length);
        randomString += allChars[randomNumber]; 
    }

    return randomString;
}

mainEL.appendChild(passwordEL);
mainEL.appendChild(copyBtn);
mainEL.appendChild(generatorBtn);


const notification = document.createElement('div');
notification.classList.add('notification');
document.body.appendChild(notification);

function showNotification(message) {
   notification.textContent = message;
   notification.classList.add('show'); 

   setTimeout(() => {
       notification.classList.remove('show');
   }, 3000);
}


copyBtn.addEventListener('click', (e) => {
   let password = passwordEL.value;
   if (password) {
     
       navigator.clipboard.writeText(password)
           .then(() => {
               showNotification('Password copied!');
           })
           .catch(() => {
               showNotification('Error while copying'); 
           });
   }
});