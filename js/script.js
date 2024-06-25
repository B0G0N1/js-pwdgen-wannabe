document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('password_button');

    button.addEventListener('click', () => {
        let name = prompt("Inserisci il tuo nome:");
        let surname = prompt("Inserisci il tuo cognome:");
        let favColor = prompt("Inserisci il tuo colore preferito:");
        let password = name + surname + favColor + "23";

        document.getElementById('password_display').innerText = password;
    });
});