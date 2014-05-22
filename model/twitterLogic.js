
/*
 * Tweetwe module
 */
 

module.exports = function(data) {
	function getAllInternal(){
		return data.getAll(); 
	};


	function getInternal(id){
		if(Number(id) === NaN || typeof Number(id) != 'number' )
			throw "Invalid id";
		return data.get(id); 
	};

	
	return { 
		getAll: getAllInternal,
		get: getInternal
	};

};



