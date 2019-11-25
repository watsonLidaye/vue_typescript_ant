

function cloneJson(obj:Object) {
	return JSON.parse(JSON.stringify(obj))
}

export default {
	cloneJson
}