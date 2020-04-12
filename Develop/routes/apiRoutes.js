var noteData = require("../db/db.json");

module.exports = function(app) {
  
  /* Read the `db.json` file and return all saved notes as JSON.*/
  app.get("/api/notes", function(req, res) {
    res.json(noteData);
  });

  /* Receive a new note to save on the request body, 
  add it to the `db.json` file, and then return the new note 
  to the client.  */
  app.post("/api/notes", function(req, res) {
    let received = req.body;
    received.id = noteData.length.toString();
    noteData.push(received);
    res.json(received);
  })

  /* Delete the note corresponding to that ID, and re-number
  all notes to have an ID corresponding to their index.
  This solution was not elegant as JSONs cannot have integers
  with a leading 0, including 0; as such, I had to cast the
  note position to a string. A better solution probably
  exists elsewhere*/
  app.delete("/api/notes/:id", function(req,res) {
    let deleteID = req.params.id;
    for (var i = 0; i < noteData.length; i++) {
      if (noteData[i].id == deleteID) {
        noteData.splice(i, 1);
        break;
      }
    }
    for (var i = 0; i < noteData.length; i++) {
      noteData[i].id = i.toString();
    }
    return res.json(true);
  })
};

