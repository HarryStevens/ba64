var fs = require("fs");

// gets the extension of a base64 encoded image
function getExt(data_url){
	return data_url.split("data:image/")[1].split(";")[0];
}

// gets the base64 encoded image from the data url
function getBa64Img(data_url){
	return data_url.split(";base64,").pop();
}

// saves a base64 encoded image synchronously
module.exports.saveSync = function(data_url, file_path){

	if (!file_path){
		throw new Error("You must specify a file path as the second argument.");
	}

	fs.writeFileSync(file_path + "." + getExt(data_url), getBa64Img(data_url), {encoding: "base64"});
}

// saves a base64 encoded image asynchronously
module.exports.save = function(data_url, file_path, callback){

	if (!file_path){
		throw new Error("You must specify a file path as the second argument.");
	}

	if (typeof callback == "undefined"){
		throw new Error("bs64.save() is an asynchronous function and must have a callback as its third parameter.")
	}

	fs.writeFile(file_path + "." + getExt(data_url), getBa64Img(data_url), {encoding: "base64"}, callback);
	
}

module.exports.getExt = getExt;
module.exports.getBa64Img = getBa64Img;