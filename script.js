function addNewWish() {
    const input = document.getElementById('wishInput');
    const list = document.getElementById('wishList');

    if (input.value.trim() !== "") {
        // Create the list item
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${input.value}</span>
            <button onclick="this.parentElement.remove()" style="background: #ff4d4d; font-size: 12px;">Delete</button>
        `;
        
        // Add to list and clear input
        list.appendChild(li);
        input.value = "";
    } else {
        alert("Please enter a wish!");
    }
}
