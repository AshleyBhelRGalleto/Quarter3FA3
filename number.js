function generateStory() {
    let firstNum = Math.ceil(Math.random() * 20);
    let secondNum = Math.ceil(Math.random() * 20);
    let thirdNum = Math.ceil(Math.random() * 20);
    
    let highestValue = Math.max(firstNum, secondNum, thirdNum);
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let nthLetter = alphabet[firstNum - 1] || "Z";
    let totalDuration = secondNum * thirdNum;
    
    // Fix: Use totalDuration instead of totalMinutes
    let hours = Math.floor(totalDuration / 60);
    let minutes = totalDuration % 60;
    
    let story = "A crew of " + highestValue + " fearless pirates set sail in search of the legendary treasure.\n" +
                "Their only clue was a single letter on an ancient map: '" + nthLetter + "'.\n" +
                "Battling raging storms and fierce sea monsters, they finally arrived at the island.\n\n" +
                "They had only " + totalDuration + " minutes (" + hours + " hours and " + minutes + " minutes) to uncover the treasure before the tide rose and swallowed the island whole.\n\n" +
                "Will they succeed, or will the treasure remain lost forever? See yaa!";
    
    document.getElementById("story").innerText = story;
}
