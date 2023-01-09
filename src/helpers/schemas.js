const { body } = require('express-validator')

const id = [
    body('id').isInt().notEmpty()
];

const add_lk = [
    body('title').isString().optional(),
    body('url').isURL().notEmpty()
]

module.exports = { id, add_lk }
