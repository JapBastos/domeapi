'use strict';

const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

exports.get = (req, res, next) => {
  Customer
  .find({active:true}, 'name email')
    .then(data => {
      res.status(200).send(data);
    }).catch(e => {
      res.status(400).send(e);
    });
};

exports.post = (req, res, next) => {
  var customer = new Customer(req.body);
  customer.save()
    .then(x => {
      res.status(201).send({ message: 'Cliente Cadastrado com sucesso!' });
    }).catch(e => {
      res.status(400).send({ message: 'Falha ao Cadastrar Cliente!', data: e});
    });
};

exports.put = (req, res, next) => {
  Customer
  .findByIdAndUpdate(req.params.id, {
    $set: {
      name: req.body.name,
      email: req.body.email
    }
  })
    .then(x => {
      res.status(200).send({ message: 'Cliente atualizado com sucesso!' });
    }).catch(e => {
      res.status(400).send({ message: 'Falha ao atualizar Cliente!', data: e});
    });
};


exports.delete = (req, res, next) => {
  Customer
  .findOneAndRemove(req.body.id)
    .then(x => {
      res.status(200).send({ message: 'Cliente removido com sucesso!' });
    }).catch(e => {
      res.status(400).send({ message: 'Falha ao remover cliente!', data: e});
    });
};
