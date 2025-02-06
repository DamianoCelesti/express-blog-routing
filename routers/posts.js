const express = require('express')
const router = express.Router();
// importo l'array
const posts = require('../data/posts');

// rotte di CRUD di posts
// index
router.get('/', function (req, res) {
    // invio l'array in formato JSON come risposta
    res.json(posts);
});
// show
router.get('/:id', function (req, res) {
    res.send('Dettagli del post numero ' + req.params.id);
});
// store
router.post('/', function (req, res) {
    res.send('Creazione nuovo post');
});
// update
router.put('/:id', function (req, res) {
    res.send('Modifica del post numero ' + req.params.id);
});
// modify
router.patch('/:id', function (req, res) {
    res.send('Modifica parziale del post numero ' + req.params.id);
});
// destroy
router.delete('/:id', function (req, res) {
    res.send('Eliminazione del post numero ' + req.params.id);
});

module.exports = router;