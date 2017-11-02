const Quill = require('quill');
var toolbarOptions = [
  ['bold', 'italic'],
  ['link', 'image'], 
  ['blockquote', 'code-block'],

  [{ 'header': 1 }, { 'header': 2 }],

  ['clean']
];
var options = {
  theme: 'bubble',
  modules: {
    toolbar: toolbarOptions
  },
};
var editor = new Quill('.markdown-body', options);
editor.focus();