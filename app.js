var example = 
"typedef struct {"+
  "char* name;" + 
  "int value;" + 
"} Struct;"

function preprocessor(str) {
	var name = str.split("}")
	name = name[name.length-1].replace(/[;\s]/g, "")
	console.log(name)
}

preprocessor(example)
