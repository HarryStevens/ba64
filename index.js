var fs = require("fs");

// gets the extension of a base64 encoded image
function getExt(base64_string){
	return base64_string.split("data:image/")[1].split(";")[0];
}

// saves a base64 encoded image
module.exports.save = function(base64_string, file_path){
	var ext = getExt(base64_string);
	fs.writeFile(file_path + "." + ext, base64_string.split(";base64,").pop(), {encoding: "base64"}, function(err) {
	  if (err) {
			console.log("Error saving " + file_path + "." + ext);
			throw err;
		}
	});
}

module.exports.getExt = getExt;