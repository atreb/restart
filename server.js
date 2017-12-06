const express = require('express'),
  app = express(),
  PORT = process.env.PORT || 4000;

app.use('/static', express.static('static'));

app.get('/_health', (req, res) => {
  res.send(':-)');
});

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/static/index.html');
});

app.listen(PORT, () => {
  console.log(`Application started on port:${PORT}`);
});
