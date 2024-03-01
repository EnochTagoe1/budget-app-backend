//Dependencies
const app = require("./app.js");

//Configuration
require("dotenv").config();
const PORT = process.env.PORT || 3777;

//Listen
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});