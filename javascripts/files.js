//var path = require('path'), fs=require('fs');
var methods = {};

methods.fromDir = function(startPath,filter){
    var obj = {};
//    startPath.forEach(function(value){
    for(var key in startPath){
	var value = startPath[key];
	var dirpath = '../images/'+value;
	    console.log(value);
	    obj[value] = [];
	    if (!fs.existsSync(dirpath)){
		console.log("no dir ", value);
		return;
	    }
	    var files=fs.readdirSync(dirpath);
	    for(var i=0;i<files.length;i++){
		var filename=path.join(dirpath,files[i]);
		var stat = fs.lstatSync(filename);
		if (stat.isDirectory()){
		    fromDir(filename,filter); //recurse
		}
		else if (containsAny(filename, filter)>=0) {
		    console.log('-- found: ',files[i]);
		    obj[value].push({image: files[i], caption: ""});
		};
	    };
	    console.log(obj);
    
    }
//);
    var json = JSON.stringify(obj);
    fs.writeFile('../images/test.json', 'var data = '+json);
    //console.log('Starting from dir '+startPath+'/');


};

function containsAny(str, substrings) {
    for (var i = 0; i != substrings.length; i++) {
       var substring = substrings[i];
       if (str.indexOf(substring) != - 1) {
         return str.indexOf(substring);
       }
    }
    return -1; 
}
exports.data = methods;
//fromDir(['family', 'wedding', 'life'] ,['.jpg']);
//fromDir('wedding',['.png','.jpg']);
//fromDir('life',['.png','.jpg']);

