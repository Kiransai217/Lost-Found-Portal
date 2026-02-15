const express = require("express");
const bcrypt = require("bcrypt");
const db = require("../firebase");

const router = express.Router();

router.get("/", (req, res) => {
    res.redirect("/login");
});

router.get("/signup", (req, res) => {
    res.render("signup");
});

router.post("/signup", async (req, res) => {
    const {name, email, password } = req.body;

    const snapshot = await db.collection("users")
    .where("email", "==", email)
    .get();

    if(!snapshot.empty){
        return res.send("Email already registered");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.collection("users").add({
        name,
        email,
        password: hashedPassword
    });

    res.redirect("/login");
});

router.get("/login", (req, res) => {
    res.render("login");
});

router.post("/login", async (req, res) => {
    const {email, password } = req.body;

    const snapshot = await db.collection("users")
    .where("email", "==", email)
    .get();

    if(snapshot.empty) return res.send("User not found");

    const userDoc = snapshot.docs[0];
    const user = userDoc.data();

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.send("Incorrect password");

    req.session.userId = userDoc.id;
    res.redirect("/dashboard");
});

router.get("/dashboard", async (req, res) => {
    if(!req.session.userId) return res.redirect("/login");

    const snapshot = await db.collection("items")
    .where("userId", "==", req.session.userId)
    .get();

    const items = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));

    res.render("dashboard", {items});
});

router.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/login");
});

module.exports = router;