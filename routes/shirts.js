var db = require("../models");
const express = require("express");
const router = express.Router({ mergeParams: true });

router.get("/", (req, res) => {
  db.Shirt.find()
    .then(function(shirt) {
      res.json(shirt);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.post("/", (req, res) => {
  db.Shirt.create(req.body)
    .then(function(newShirt) {
      res.status(201).json(newShirt);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.get("/:shirtId", (req, res) => {
  db.Shirt.findById(req.params.shirtId)
    .then(function(foundShirt) {
      res.json(foundShirt);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.put("/:shirtId", (req, res) => {
  db.Shirt.findOneAndUpdate({ _id: req.params.shirtId }, req.body, {
    new: true
  })
    .then(function(shirt) {
      res.json(shirt);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.delete("/:shirtId", (req, res) => {
  db.Shirt.remove({ _id: req.params.shirtId })
    .then(function() {
      res.json({ message: "deleted item" });
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.get("/size/:size", (req, res) => {
  db.Shirt.find({ size: req.params.size })
    .then(function(size) {
      res.json(size);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.get("/color/:color", (req, res) => {
  db.Shirt.find({ color: req.params.color })
    .then(function(color) {
      res.json(color);
    })
    .catch(function(err) {
      res.send(err);
    });
});

module.exports = router;
