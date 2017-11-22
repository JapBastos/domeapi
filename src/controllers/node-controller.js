'use strict';

const mongoose = require('mongoose');
const Node = mongoose.model('Nodes');

exports.get = (req, res, next) => {
  Node.find({}, 'name slug value')
  .then(data => {
    res.status(200).send(data);
  }).catch(e => {
    res.status(400).send(e);
  });
};

exports.getBySlug = (req, res, next) => {
  Node.find({slug: req.params.slug}, 'name slug value read_only')
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
      res.status(201).send({ message: 'Nó sensor Cadastrado com sucesso!' });
    }).catch(e => {
      res.status(400).send({ message: 'Falha ao Cadastrar nó sensor!', data: e});
    });
};

exports.put = (req, res, next) => {
  Node.findOneAndUpdate({slug: req.params.slug}, {
    $set: {
      name: req.body.name,
      slug: req.body.slug,
      on_status: req.body.on_status
    }
  })
  .then(x => {
    res.status(200).send({ message: 'Nó sensor atualizado com sucesso!' });
  }).catch(e => {
    res.status(400).send({ message: 'Falha ao atualizar nó sensor!', data: e});
  });
};

exports.delete = (req, res, next) => {
  Node.findOneAndRemove({slug: req.params.slug})
  .then(x => {
    res.status(200).send({ message: 'Nó sensor removido com sucesso!' });
  }).catch(e => {
    res.status(400).send({ message: 'Falha ao remover nó sensor!', data: e});
  });
};
