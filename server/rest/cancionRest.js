var cbs = require('./../lib/callbacks');
var express = require('express');
var cancionRest = express();
var CancionModelo = require('./CancionModelo');

cancionRest.get('', function(req, res) {
    CancionModelo.listar()
        .then(
            cbs.devolverParametro(res),
            cbs.devolerError(res, 500)
        );
});

/*cancionRest.get('/entrada/:idEntrada', function(req, res) {
    CancionModelo.listar({ entrada: req.params.idEntrada })
        .then(
            cbs.devolverParametro(res),
            cbs.devolerError(res, 500)
        );
});*/

cancionRest.get('/:id', function(req, res) {
    CancionModelo.listar({ _id: req.params.id })
        .then(function (canciones) {
            if (canciones && canciones.length) {
                res.json(canciones[0]);
            } else {
                res.json(null);
            }
        }, cbs.devolerError(res, 500));
});

cancionRest.post('', function(req, res) {
    CancionModelo.crear(req.body)
        .then(
            cbs.devolverParametro(res),
            cbs.devolerError(res, 500)
        );
});

cancionRest.put('/:id', function(req, res) {
    CancionModelo.actualizar(req.params.id, req.body)
        .then(
            cbs.devolverParametro(res),
            cbs.devolerError(res, 500)
        );
});

cancionRest.delete('/:id', function(req, res) {
    CancionModelo.eliminar(req.params.id).then(function () {
        res.json({ status: 'ok' });
    }, cbs.devolerError(res, 500));
});

module.exports = cancionRest;
