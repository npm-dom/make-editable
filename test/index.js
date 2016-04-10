var editable = require("../");
var test = require("tape");

test('make given document editable', function (t) {
  t.plan(5);

  document.body.innerHTML = '<iframe src="./frame.html" />';

  var iframe = document.querySelector('iframe');

  iframe.onload = function () {
    var editor = editable(iframe.contentWindow.document);
    editor.selectAll();

    editor.bold();
    t.equal(read(iframe), '<b>hello world\n</b>');

    editor.italic();
    t.equal(read(iframe), '<b><i>hello world\n</i></b>');

    editor.link('http://github.com/azer/prova');
    t.equal(read(iframe), '<b><i><a href="http://github.com/azer/prova">hello world\n</a></i></b>');

    editor.unlink();
    editor.plain();

    editor.color('#ff0000');
    editor.bgcolor('#ffff00');

    t.equal(read(iframe), '<font color="#ff0000" style="background-color: rgb(255, 255, 0);">hello world\n</font>');

    editor.plain();

    t.equal(read(iframe), 'hello world');
  };
});

function read (iframe) {
  return iframe.contentWindow.document.body.innerHTML.trim();
}
