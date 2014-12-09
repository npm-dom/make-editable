## make-editable

Make given document element editable by user

## Install

```bash
$ npm install make-editable
```

## Usage

```js
var makeEditable = require('make-editable')

var editable = makeEditable(document.querySelector('iframe').contentWindow.document)

editable.bold()
editable.link('http://foobar.com')
editable.img('http://foo.com/bar.jpg')
editable.exec(command, value, showDefaultUI)
```

## Command Reference

* exec: *exec(commandName, value, showUI)*

**Formatting:**

* bold: `bold`
* italic: `italic`
* underline: `underline`
* color: `foreColor`
* bgcolor: `backColor`
* fontName: `fontName`
* fontSize: `fontSize`
* plain: `removeFormat`
* center: `justifyCenter`
* justify: `justifyFull`
* left: `justifyLeft`
* right: `justifyRight`
* indent: `indent`
* outdent: `outdent`

**Elements:**

* img: `insertImage`
* link: `link`
* unlink: `unlink`
* orderedList: `insertOrderedList`
* unorderedList: `insertUnorderedList`

**Other:**

* selectAll: `selectAll`
* undo: `undo`
* redo: `redo`
* copy: `copy`
* paste: `paste`
* delete: `delete`
