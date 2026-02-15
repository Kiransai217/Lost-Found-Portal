const express = require("express");
const db = require("../firebase");
const session = require("express-session");

const router = express.Router();

router.get("/add", (req, res) => {
    if(!req.session.userId){
        return res.redirect("/login");
    }
    res.render("addItem");
});

router.post("/add", async (req, res) => {
    if(!req.session.userId){
        return res.redirect("/login");
    }
    const {title, description, category, contact} = req.body;
    await db.collection("items").add({
        title,
        description,
        category,
        contact,
        userId: req.session.userId
    });

    res.redirect("/dashboard");
});

router.get("/delete/:id", async (req, res) => {
    if(!req.session.userId){
        return res.redirect("/login");
    }

    await db.collection("items").doc(req.params.id).delete();
    res.redirect("/dashboard");
});

router.get("/edit/:id", async (req, res) => {
    if(!req.session.userId){
        return res.redirect("/login");
    }

    const doc = await db.collection("items").doc(req.params.id).get();
    
    if(!doc.exists){
        return res.send("Item not found");
    }

    res.render("editItem", {
        item: {
            id: doc.id,
            ...doc.data()
        }
    });
});

router.post("/edit/:id", async (req, res) => {
    if(!req.session.userId){
        return res.redirect("/login");
    }

    const {title, description, category, contact,} = req.body;

    await db.collection("items").doc(req.params.id).update({
        title,
        description,
        category,
        contact
    });

    res.redirect("/dashboard");
});

module.exports = router;