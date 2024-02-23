const express = require("express");
const router = express.Router();
const { createClient, fetchAll, deleteClient, fetchClient, updateClient } = require("../controllers/clientController")



router.post("/create", createClient)
router.get('/all', fetchAll)
router.delete('/delete/:id', deleteClient)
router.get('/client/:id', fetchClient)
router.put('/client/:id', updateClient)


module.exports = router