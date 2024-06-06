const users = [
    { name: "Moore Hensley" },
    { name: "Sharlene Bush" },
    { name: "Ross Vazquez" },
    { name: "Elma Head" },
    { name: "Carey Barr" }
]

function createUserList(users) {
    const userList = document.getElementById('userList');

    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = user.name;
        listItem.addEventListener('click', () => {
            alert(`Hello, ${user.name}`);
        });
        userList.appendChild(listItem);
    });
}

createUserList(users);
