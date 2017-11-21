'use strict';

const mongoose = require('mongoose');
const Node = mongoose.model('Nodes');

exports.get = (req, res, next) => {
  Node.find({active:true}, 'title slug price')
  .then(data => {
    res.status(200).send(data);
  }).catch(e => {
    res.status(400).send(e);
  });
};

exports.getBySlug = (req, res, next) => {
  Node.find({slug: req.params.slug, active:true}, 'title slug price tags')
  .then(data => {
    res.status(200).send(data);
  }).catch(e => {
    res.status(400).send(e);
  });
};

exports.post = (req, res, next) => {
  var node = new Node(req.body);
  node.save()
    .then(x => {
      res.status(201).send({ message: 'Produto Cadastrado com sucesso!' });
    }).catch(e => {
      res.status(400).send({ message: 'Falha ao Cadastrar Produto!', data: e});
    });
};

exports.put = (req, res, next) => {
  Node.findByIdAndUpdate(req.params.id, {
    $set: {
      title: req.body.title,
      price: req.body.price
    }
  })
  .then(x => {
    res.status(200).send({ message: 'Produto atualizado com sucesso!' });
  }).catch(e => {
    res.status(400).send({ message: 'Falha ao atualizar Produto!', data: e});
  });
};


exports.delete = (req, res, next) => {
  Node.findOneAndRemove(req.body.id)
  .then(x => {
    res.status(200).send({ message: 'Produto removido com sucesso!' });
  }).catch(e => {
    res.status(400).send({ message: 'Falha ao remover Produto!', data: e});
  });
};
