const express = require('express'),
  app = express(),
  PORT = process.env.PORT || 4000;

app.set('view engine', 'pug');
app.use('/dist', express.static('dist'));

app.get('/_health', (req, res) => {
  res.send(':-)');
});

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`Application started on port:${PORT}`);
});
