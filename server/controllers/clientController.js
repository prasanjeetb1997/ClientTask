const clientModel = require("../models/clientModel")

async function createClient(req, res) {

    try {
        const dbresponse = await clientModel.create(req.body)
        return res.send(dbresponse)

    } catch (error) {
        res.send(error)
    }
}



async function fetchAll(req, res) {

    try {
        const dbresponse = await clientModel.find()
        return res.send(dbresponse)

    } catch (error) {
        res.send(error)
    }
}


async function deleteClient(req, res) {

    try {
        const dbresponse = await clientModel.findByIdAndDelete(req.params.id)
        return res.send(dbresponse)

    } catch (error) {
        res.send(error)
    }
}


async function fetchClient(req, res) {

    try {
        const dbresponse = await clientModel.findById(req.params.id)
        return res.send(dbresponse)

    } catch (error) {
        res.send(error)
    }
}

async function updateClient(req, res) {

    try {
        const dbresponse = await clientModel.findByIdAndUpdate(req.params.id, req.body)
        return res.send(dbresponse)

    } catch (error) {
        res.send(error)
    }
}


module.exports = { createClient, fetchAll, deleteClient, fetchClient, updateClient }