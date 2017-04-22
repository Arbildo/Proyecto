var db = require('./../database');

function CancionModelo() {}
CancionModelo.prototype.listar = function(parametros) {
    parametros = parametros || {};
    return db.comentario.find(parametros).populate('autor').exec();
};

CancionModelo.prototype.crear = function(data) {
    return db.comentario.create(data);
};

CancionModelo.prototype.actualizar = function(id, data) {
    return db.comentario.findOneAndUpdate({
        _id: id
    }, data, { new: true }).exec();
};

CancionModelo.prototype.eliminar = function(id) {
    return db.comentario.findOneAndRemove({ _id: id}).exec();
}

module.exports = new CancionModelo();
