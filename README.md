<!DOCTYPE html>
<html>
<head>
    <title>Our Wishlist</title>
    <script type="module">
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
        import { getFirestore, collection, addDoc, onSnapshot, query, orderBy } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

        // INSERT YOUR FIREBASE CONFIG HERE
        const firebaseConfig = {
            apiKey: "...",
            authDomain: "...",
            projectId: "...",
            storageBucket: "...",
            messagingSenderId: "...",
            appId: "..."
        };

        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);

        // Logic to add a wish
        window.addWish = async () => {
            const item = document.getElementById('wishInput').value;
            if (item) {
                await addDoc(collection(db, "wishes"), { item: item, timestamp: Date.now() });
                document.getElementById('wishInput').value = '';
            }
        };

        // Logic to display wishes in real-time
        onSnapshot(query(collection(db, "wishes"), orderBy("timestamp", "desc")), (snapshot) => {
            const list = document.getElementById('wishList');
            list.innerHTML = '';
            snapshot.forEach((doc) => {
                const li = document.createElement('li');
                li.textContent = doc.data().item;
                list.appendChild(li);
            });
        });
    </script>
</head>
<body>
    <h1>Radhika & Hardik's Wishlist</h1>
    <input type="text" id="wishInput" placeholder="Enter a wish...">
    <button onclick="addWish()">Add Wish</button>
    <ul id="wishList"></ul>
</body>
</html>
