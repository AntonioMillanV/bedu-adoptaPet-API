const mongoose = require('mongoose')
const Mascota = mongoose.model('Mascota')

function crearMascota(req, res, next) {
  var mascota = new Mascota(req.body)
  mascota.anunciante = req.usuario.id
  mascota.estado = 'disponible'
  mascota.save().then(mascota => {
    res.status(201).send(mascota)
  }).catch(next)
}

function obtenerMascotas(req, res, next) {
    if(req.params.id){
      Mascota.findById(req.params.id)
              .populate('anunciante', 'username nombre apellido bio foto').then(mascotas => {
            res.send(mascotas)
          }).catch(next)
    } else {
      Mascota.find().then(mascotas=>{
        res.send(mascotas)
      }).catch(next)
    }
  }

function obtenerMascota(req, res) {
    // Simulando dos usuarios y respondiendolos
    var mascota1 = new Mascota('Chilaquil', 'lomitos', 'foto-Chilaquil.jpg', 'Es el perro del meme xD', 'Refugio de lomitos peluditos A.C.', 'CDMX')
    var mascota1 = new Mascota('Milaneso', 'lomitos', 'foto-Milaneso.jpg', 'Es el otro perro del meme xD', 'Refugio de lomitos peluditos A.C.', 'CDMX')
    res.send([mascota1, mascota2].filter(obj => obj.id === req.params.id))
}

function modificarMascota(req, res) {
    // Simulando un usuario previamente existente que el cliente modifica
    var mascota1 = new Mascota('Chilaquil', 'lomitos', 'foto-Chilaquil.jpg', 'Es el perro del meme xD', 'Refugio de lomitos peluditos A.C.', 'CDMX')
    var modificaciones  = req.body
    mascota1 = {...mascota1, ...modificaciones}
    res.send(mascota1);
}

function eliminarMascota(requ, res) {
    // Se simula la eliminación de usuario, regresando un 200
    res.status(200).send(`se ha eliminado el registro de ${req.params.nombre}`);
}

// Exportamos las funciones definidas
module.exports = {
    crearMascota,
    obtenerMascotas,
    obtenerMascota,
    modificarMascota,
    eliminarMascota
}