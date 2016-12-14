

// Iterate an array
function iterArr(arr){
	var sum = 0;
	for(var i=0; i<arr.length; i++){
		sum =+ arr[i];
	}
	return sum;
}
iterArr([1,2,5]);

// Sum odd 5000
function sum_odd_5000(){
	var sum = 0;
	for(var i = 1; i <= 5000; i++){
		if(i%2 == 1){
			sum = sum + i;
		}
	}
	return sum;
}

// Get even 1000
function get_even_numbers(){
	var sum = 0;
	for(var i = 1; i < 1001; i++){
		if(i % 2 === 0){
			sum += i;
		}
	}
	return sum;
}

// Get 1 to 255
function get_array(){
	var arr = [];
	for(var i = 1; i < 256; i++){
		arr.push(i);
	}
	return arr;
}
