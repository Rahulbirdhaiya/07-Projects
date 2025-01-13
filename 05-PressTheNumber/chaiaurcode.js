/* const insert = document.getElementById('insert');

window.addEventListener('keypress', (e) => {
    insert.innerHTML = `
                <table>
            <tr>
                <th>key</th>
                <th>keycode</th>
                <th>code</th>
            </tr>
            <tr>
                <td>${e.key === " " ? "space" : e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
            </table>
    `
}); 
*/

// ChatGPT Code

const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
    // Get the name of the key
    let keyName = e.key;
    
    // Handle special keys
    if (e.key === " ") {
        keyName = "Space";
    } else if (e.key === "ArrowLeft") {
        keyName = "Left Arrow";
    } else if (e.key === "ArrowRight") {
        keyName = "Right Arrow";
    } else if (e.key === "ArrowUp") {
        keyName = "Up Arrow";
    } else if (e.key === "ArrowDown") {
        keyName = "Down Arrow";
    } else if (e.key === "Control") {
        keyName = "Ctrl";
    } else if (e.key === "Shift") {
        keyName = "Shift";
    } else if (e.key === "Alt") {
        keyName = "Alt";
    } else if (e.key === "Meta") {
        keyName = "Meta";
    }

    // Update the innerHTML with the key details
    insert.innerHTML = `
        <table>
            <tr>
                <th>Key</th>
                <th>Code</th>
            </tr>
            <tr>
                <td>${keyName}</td>
                <td>${e.code}</td>
            </tr>
        </table>
    `;
});