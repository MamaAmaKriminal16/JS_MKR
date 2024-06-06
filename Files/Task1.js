function findMiddleCharacter() {
    let word = prompt("Enter a word:");

    if (word === null) {
        alert("Canceled.");
        return;
    }

    word = word.trim();
    if (word === "") {
        alert("Invalid value");
        return;
    }

    let length = word.length;
    let middle;

    if (length % 2 === 0) {
        middle = word.substring((length / 2) - 1, (length / 2) + 1);
    } else {
        middle = word.charAt(Math.floor(length / 2));
    }

    alert(middle);
}


findMiddleCharacter();
