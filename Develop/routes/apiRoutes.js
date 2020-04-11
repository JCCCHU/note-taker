var noteData = require("../db/db.json");

module.exports = function(app) {
  
  /* Should read the `db.json` file and return all saved notes as JSON.*/
  app.get("/api/notes", function(req, res) {
    res.json(noteData);
  });

  /* Should receive a new note to save on the request body, 
  add it to the `db.json` file, and then return the new note 
  to the client.  */
  app.post("/api/notes", function(req, res) {
    let received = req.body;
    console.log(noteData);
    received.id = noteData.length.toString();
    noteData.push(received);
    console.log(noteData);
    res.json(received);
  })

  app.delete("/api/notes/:id", function(req,res) {
    let deleteID = req.params.id;
    console.log(noteData);
    for (var i = 0; i < noteData.length; i++) {
      if (noteData[i].id == deleteID) {
        noteData.splice(i, 1);
        break;
      }
    }
    for (var i = 0; i < noteData.length; i++) {
      noteData[i].id = i.toString();
    }
    console.log(noteData);
    return res.json(true);
  })

};

