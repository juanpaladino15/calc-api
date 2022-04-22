const express = require("express");
const router = express.Router();

const { Operation } = require("./models.js");

router.get("/add/:a/:b", async function (req, res) {
    const params = req.params;
    const a = Number(params.a);
    const b = Number(params.b);
    const result = a + b;

    await Operation.create({
        type: "ADD",
        args: {
            a: a,
            b: b,
        },
        result,
    });

    return res.send({ result });
});

router.get("/res/:a/:b", async function (req, res) {
    return res.send({ result: "No implementado" });
});

router.get("/mul/:a/:b", async function (req, res) {
    
    const params = req.params;
    const a = Number(params.a);
    const b = Number(params.b);
    const result = a * b;

    await Operation.create({
        type: "MUL",
        args: {
            a: a,
            b: b,
        },
        result,
    });
    
    return res.send({ result });
});

router.get("/div/:a/:b", async function (req, res) {
    // Tener en cuenta division por 0
    // Si b es 0 retornar "Error: div by 0"

    return res.send({ result: "No implementado" });
});

router.get("/history", async function (req, res) {
    return res.send({ result: "No implementado" });
});

module.exports = router;
