require('dotenv').config();
const app = require('./src/app');

const boot = () => {
    app.listen(3000, () => {
        console.log(`Server running on port 3000`);
    })
}

boot();