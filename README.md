# ba64
A small npm module for saving base 64 encoded images to your file system.

## Installation

```bash
npm i ba64 -S
```
```js
var fs = require("fs"); // You need the fs module if you want to save your images.
var ba64 = require("ba64");
```

## Usage

<a name="getExt" href="#getExt">#</a> ba64.<b>getExt</b>(<i>base64_image_string</i>)

Returns the file extension of the base 64 encoded image.

<a name="save" href="#save">#</a> ba64.<b>save</b>(<i>base64_image_string</i>, <i>path/to/file_name</i>)

Saves the base 64 encoded image to the file system. `file_name` should not include the file extension; ba64 will do that for you.