// Create web server
var express = require("express");
var router = express.Router();
var fs = require("fs");
var path = require("path");
var formidable = require("formidable");
var db = require("../db");

// Get all comments
router.get("/", function(req, res, next) {
  db.query("SELECT * FROM comments", function(err, rows) {
    if (err) {
      console.log(err);
    } else {
      res.json(rows);
    }
  });
});

// Get comment by id
router.get("/:id", function(req, res, next) {
  db.query(
    "SELECT * FROM comments WHERE id = ?",
    [req.params.id],
    function(err, rows) {
      if (err) {
        console.log(err);
      } else {
        res.json(rows[0]);
      }
    }
  );
});

// Get comment by post_id
router.get("/post/:id", function(req, res, next) {
  db.query(
    "SELECT * FROM comments WHERE post_id = ?",
    [req.params.id],
    function(err, rows) {
      if (err) {
        console.log(err);
      } else {
        res.json(rows);
      }
    }
  );
});

// Add comment
router.post("/", function(req, res, next) {
  var comment = {
    post_id: req.body.post_id,
    comment: req.body.comment,
    name: req.body.name,
    email: req.body.email
  };

  db.query("INSERT INTO comments SET ?", comment, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(comment);
    }
  });
});

// Update comment
router.put("/:id", function(req, res, next) {
  var comment = {
    post_id: req.body.post_id,
    comment: req.body.comment,
    name: req.body.name,
    email: req.body.email
  };

  db.query(
    "UPDATE comments SET ? WHERE id = ?",
    [comment, req.params.id],
    function(err, result) {
      if (err) {
        console.log(err);
      } else {
        res.json(comment);
      }
    }
  );
});

// Delete comment
router.delete("/:id", function(req, res, next) {
  db.query("DELETE FROM comments WHERE id = ?", [req.params.id], function(
    err,
    result