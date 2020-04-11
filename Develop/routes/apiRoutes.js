var noteData = require("../db/db.json");

module.exports = function(app) {
  
  app.get("/api/notes", function(req, res) {
    console.log(noteData);
    res.json(noteData);
  });

  app.post("/api/notes", function(req, res) {
    res.json(true);

  })
};