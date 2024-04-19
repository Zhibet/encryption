const message = 'citlali';
const correct_password = 'namasta';
const password_input = document.getElementById('password');
const inputValue = password_input.value;
const message_display = document.getElementsByClassName('message')[0];
const help = document.getElementById("infoButton");

help.addEventListener('click', () => {
    const help_messages = document.getElementsByClassName('help');
    for (let i = 0; i < help_messages.length; i++) {
        help_messages[i].innerHTML = '7 letter word';
    }
    setTimeout(()=>{
        for (let i = 0; i < help_messages.length; i++) {
            help_messages[i].innerHTML = '';
        }
    },4000)
});


password_input.addEventListener('input', async () => {
    const password = password_input.value;
    const encrypted_message = encrypt();
    const decrypted_message = decryptMessage();
    if (password === correct_password) {
        message_display.innerHTML = decrypted_message;
    } else {
        message_display.innerHTML = encrypted_message;
    }
});
