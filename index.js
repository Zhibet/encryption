async function encryptMessage() {
    const plaintext = document.getElementById('plaintext').value;
    const encodedText = new TextEncoder().encode(plaintext);
    console.log(encodedText)
    const key = await window.crypto.subtle.generateKey(
        {name: 'AES-GCM', length: 256},
        true,
        ['encrypt', 'decrypt']
    );
    const iv = window.crypto.getRandomValues(new Uint8Array(12));
    const encrypted = await window.crypto.subtle.encrypt(
        {name: 'AES-GCM', iv: iv},
        key,
        encodedText
    );
    const encryptedArray = new Uint8Array(encrypted);
    const encryptedBase64 = btoa(String.fromCharCode(...encryptedArray));
    console.log(encryptedBase64)
    document.getElementsByClassName('encrypt')[0].textContent = encryptedBase64
}
