require("dotenv").config();
const express = require("express");
const cors = require("cors");

const loginRoute = require("./routes/loginRoutes");

const app = express();
app.use(cors()); // allow frontend requests
app.use(express.json()); // parse JSON body

app.use("/api", loginRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
