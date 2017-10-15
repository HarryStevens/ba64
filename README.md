# ba64
[![Build Status](https://travis-ci.org/HarryStevens/ba64.svg?branch=master)](https://travis-ci.org/HarryStevens/ba64) [![Coverage Status](https://coveralls.io/repos/github/HarryStevens/ba64/badge.svg?branch=master)](https://coveralls.io/github/HarryStevens/ba64?branch=master)

A [tiny](https://github.com/sindresorhus/ama/issues/10#issuecomment-117766328) npm module for saving Base64 encoded images that are part of [data URLs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) to your file system. This is useful for saving images that have been uploaded to the browser via [`FileReader.readAsDataUrl()`](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL).

* [Installation](#installation)
* [Example](#example)
* [API](#API)

## <a name="installation" href="#installation">Installation</a>

```bash
npm i ba64 -S
```

## <a name="example" href="#example">Example</a>

```js
var fs = require("fs"),
	ba64 = require("ba64"),
	data_url = "data:image/jpeg;base64,[Base64 encoded image goes here]";

// Get the file extension of the data URL.
var ext = ba64.getExt(data_url); // Returns "jpeg"

// You can save the image synchronously.
ba64.saveSync(data_url, "myimage"); // Saves myimage.jpeg.

// You can also save the image asynchronously.
ba64.save(data_url, "myimage", function(err){
	if (err) throw err;

	console.log("Image saved successfully");

	// do stuff
});
```

## API

<a name="save" href="#save">#</a> ba64.**save**(*data_url*, *path/to/file_name*, *callback*)

Asynchronously saves the Base64 encoded image to the file system. `file_name` should not include the file extension; ba64 will do that for you.

<a name="saveSync" href="#saveSync">#</a> ba64.**save**(*data_url*, *path/to/file_name*)

Synchronously saves the Base64 encoded image to the file system. `file_name` should not include the file extension; ba64 will do that for you.

### Helper functions

<a name="getExt" href="#getExt">#</a> ba64.**getExt**(*data_url*)

Returns the file extension of the Base64 encoded image.

<a name="getBa64Img" href="#getBa64Img">#</a> ba64.**getBa64Img**(*data_url*)

Returns the Base64 encoded image without the [`data:` scheme prefix](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs).
