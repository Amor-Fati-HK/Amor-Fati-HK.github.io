document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault(); 

    const passwordInput = document.getElementById('pwd').value;

    const encoder = new TextEncoder();
    const data = encoder.encode(passwordInput);

    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    const expectedHash = "49d2803c7593e7a13212a1a622b1b2861aea370ef11210d855c172890fa869d0"; 

    if (hashHex === expectedHash) {
        window.location.href = "/Chapters/Chapter 1/Chapter1.html"; 
    } else {
        alert("Accès Refusé. Try again.");
        document.getElementById('pwd').value = ""; 
    }
});