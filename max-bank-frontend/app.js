
const express = require("express");

const clientApi = require("./src/apis/clientsApi");

const cors = require("cors");

const server = express();

server.use(cors());

server.use(express.json());

server.listen(8081);

server.get("/client", async (req, res) => {
    try {
        const { data } = await clientApi.get();

        return res.json({ data });

    } catch (error) {
        res.json({ error: error.message });

    }
});

server.get("/client/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const { data } = await clientApi.get(`/${id}`);

        return res.json({ name: data.name, balance: data.balance });

    } catch (error) {
        res.json({ error: error.message });

    }
});