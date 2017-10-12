var Metalsmith = require('metalsmith');
var markdown   = require('metalsmith-markdown');
var layouts   = require('metalsmith-layouts');
var drafts   = require('metalsmith-drafts');
var permalinks   = require('metalsmith-permalinks');
var collections   = require('metalsmith-collections');
var rootPath   = require('metalsmith-rootpath');

Metalsmith(__dirname)
  .source("src/input")

  .use(markdown())

  .use(collections({
  pages: {
    pattern: "pages/*.md",
    sortyBy: "date",
    reverse: true
  },
  install: {
    pattern: "install/*.md",
    sortyBy: "date",
    reverse: true
  },
  nav: {
    pattern: "nav/*.md",
    sortyBy: "date",
    reverse: true
  },
  qgis: {
    pattern: "*/*.md",
    sortyBy: "date",
    reverse: true
  }
  }))

  .use(permalinks({
        relative: false,
        pattern: ':dir/:title'
    }))

  .use(layouts({
    engine: 'handlebars',
    directory: 'layouts',
    partials: 'layouts/partials'
  }))

  .use(drafts())

  .use(rootPath())

  .destination("build/root")
  .build(function(err) {
  if (err) {console.log(err);}
        else {console.log('QGIS website generated with NO ERRORS, see results in: build/root/');}
  });

