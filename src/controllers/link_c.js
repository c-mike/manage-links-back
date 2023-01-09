const Link = require('../models/link_m')

async function all(_, res){
    await Link.findAll()
    .catch(error => res.status(404).send(error))
    .then(data => res.send(data))
}

async function add(req, res) {
    const {title, url} = req.body
    await Link.create(
        {title, url})
    .catch(error => { return res.status(400).send(error)})
    res.sendStatus(201)
}

async function remove(req, res) {
    const {id} = req.body
    await Link.destroy({
        where:{id}
    })
    .catch(error => { return res.status(404).send(error)})
    res.sendStatus(200)
}

async function edit(req, res) {
    const {id, title, url} = req.body
    await Link.update(
        {title, url}, 
        {where:{id}})
    .catch(error => { return res.status(404).send(error)})
    res.sendStatus(200)
}

module.exports = {all, add, remove, edit}
