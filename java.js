async function checkPassword() {
    const correctHash = "87d9242ebce224dc26a841bfcabed404951cb596318f85d8b8a9f0bf6e18047d";
    const userInput = document.getElementById("passwordInput").value.trim();
    const button = document.getElementById("submitButton");

    const userHash = await hashPassword(userInput);
    console.log("User Input:", userInput);
    console.log("User Hash:", userHash);
    console.log("Correct Hash:", correctHash);

    if (userHash === correctHash) {
        window.location.href = "wishes.html"; 
    } else {
        button.innerText = "Wrong";
        button.classList.add("wrong");

        setTimeout(() => {
            button.innerText = "Submit";
            button.classList.remove("wrong");
        }, 1500);
    }
}

async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    
    return Array.from(new Uint8Array(hashBuffer))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
}
