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
    img: call(doc, 'insertImage'),
    link: call(doc, 'createLink'),
    unlink: call(doc, 'unlink'),
    plain: call(doc, 'removeFormat'),
    undo: call(doc, 'undo'),
    redo: call(doc, 'redo'),
    indent: call(doc, 'indent'),
    outdent: call(doc, 'outdent'),
    selectAll: call(doc, 'selectAll'),
    orderedList: call(doc, 'insertOrderedList'),
    unorderedList: call(doc, 'insertUnorderedList'),
    copy: call(doc, 'copy'),
    paste: call(doc, 'paste'),
    delete: call(doc, 'delete'),
    fontName: call(doc, 'fontName'),
    fontSize: call(doc, 'fontSize'),
    center: call(doc, 'justifyCenter'),
    justify: call(doc, 'justifyFull'),
    left: call(doc, 'justifyLeft'),
    right: call(doc, 'justifyRight'),
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
