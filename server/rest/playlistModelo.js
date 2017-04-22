var db = require('./../database');

function PlaylistModelo() {}
PlaylistModelo.prototype.listar = function(parametros) {
    parametros = parametros || {};
    return db.entrada.find(parametros).populate('autor').exec();
};

PlaylistModelo.prototype.crear = function(data) {
    return db.entrada.create(data);
};

PlaylistModelo.prototype.actualizar = function(id, data) {
    return db.entrada.findOneAndUpdate({
        _id: id
    }, data, { new: true }).exec();
};

PlaylistModelo.prototype.eliminar = function(id) {
    return db.entrada.findOneAndRemove({ _id: id}).exec();
}

module.exports = new PlaylistModelo();
