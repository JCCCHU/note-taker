var path = require("path");

module.exports = function(app) {

  // Ensures all JS files served have the correct header
  app.use('*.js', (req, res, next) => {
    res.set('Content-Type', 'text/javascript')
    next();
  })

  // Serves notes.html
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  // Servers the index.js file to the HTML pages
  app.get("/assets/js/index.js", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/js/index.js"));
  });

  // If no matching route is found default to home
  // The HREFs leading to index.html do refer to root 
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
