const fs = require('fs');

fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading welcome.txt:', err.message);
        return;
    }
    console.log(data);
});
