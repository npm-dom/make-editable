module.exports = enable;

function enable (doc) {
  doc.body.contentEditable = true;

  return {
    exec: call(doc),

    bold: call(doc, 'bold'),
    italic: call(doc, 'italic'),
    underline: call(doc, 'underline'),
    color: call(doc, 'foreColor'),
    bgcolor: call(doc, 'backColor'),
    fontName: call(doc, 'fontName'),
    fontSize: call(doc, 'fontSize'),
    plain: call(doc, 'removeFormat'),
    center: call(doc, 'justifyCenter'),
    justify: call(doc, 'justifyFull'),
    left: call(doc, 'justifyLeft'),
    right: call(doc, 'justifyRight'),
    indent: call(doc, 'indent'),
    outdent: call(doc, 'outdent'),

    img: call(doc, 'insertImage'),
    link: call(doc, 'createLink'),
    unlink: call(doc, 'unlink'),
    orderedList: call(doc, 'insertOrderedList'),
    unorderedList: call(doc, 'insertUnorderedList'),

    selectAll: call(doc, 'selectAll'),
    undo: call(doc, 'undo'),
    redo: call(doc, 'redo'),
    copy: call(doc, 'copy'),
    paste: call(doc, 'paste'),
    delete: call(doc, 'delete'),
    heading: call(doc, 'heading')
  };
}

function exec (doc, cmd, value, showDefaultUI) {
  doc.execCommand(cmd, showDefaultUI || false, value);
};

function call (doc, commandName) {
  return arguments.length == 1 ? custom : command;

  function custom (commandName, value, ui) {
    return exec(doc, commandName, value, ui);
  }

  function command (value, ui) {
    return exec(doc, commandName, value, ui);
  }
}
