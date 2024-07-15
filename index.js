const express = require('express');
const app = express();
const PORT = 4041;
const crypto = require('crypto');
const cookieParser = require('cookie-parser');
app.set('view engine', 'ejs');
app.set('views', 'view');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const users = [];
const generateToken = () => {
    return crypto.randomBytes(64).toString('hex');
}
app.get("/signUpPage", (req, res) => {
    return res.render("signup");
})
app.get("/logInPage", (req, res) => {
    return res.render("login");
})
app.get("/logOutPage", (req, res) => {
    return res.render("logout");
})
app.post('/signup', (req, res) => {
    const { username, password } = req.body;

    if (users.find(usr => usr.username == username)) {
        return res.status(409).send("User already exist");
    }
    users.push({ username, password });
    return res.status(201).send("User signed up successfully");

})
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.some(user => user.username == username && user.password == password);
    if (user) {
        const token = generateToken();
        res.cookie('auth', token, { httpOnly: true, maxAge: 30000 });
        res.cookie('username', username, { httpOnly: true, maxAge: 30000 })
        return res.redirect('/secured_page');
    } else {
        return res.status(401).send("Invalid Credentials");
    }
})
app.post('/logout', (req, res) => {
    res.clearCookie('auth');
    res.clearCookie('username');
    return res.status(200).send("Logout");
})
function isAuthenticated(req, res, next) {
    if (req.cookies.auth && req.cookies.username) {
        return next();
    } else {
        return res.status(403).send("Access denied. Please login first.");
    }
}
app.get('/secured_page', isAuthenticated, (req, res) => {
    res.render('securedPage');

})
app.listen(PORT, () => {
    console.log("Starting Server...");
})
