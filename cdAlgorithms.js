// Negative 
function numToStr(arr) {
    for(var i=0; i<arr.length; i++){
        if(arr[i]<0){
            arr[i] = 'Negative';
        }
    }
    return arr;
}


// Swap Values
function swap(arr) {
    var temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    return arr;
}

// Max Min Avg
function maxMinAvg(arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];
    for(var i=0; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
        if(arr[i]<min){
            min = arr[i];
        }
        sum = sum + arr[i];
    }
    var avg = sum/arr.length;
    var newArray = [max,min,avg];
    return newArray;
}

// Swap negatives with: 0
function noNeg(arr) {
    for(var i=0; i<arr.length; i++){
        if(arr[i]<0){
            arr[i] = 0;
        }
    }
    return arr;
}

// Squares each item in the array
function squareVal(arr) {
    var newArray = [];
    for(var i=0; i<arr.length; i++){
        newArray.push(arr[i]*arr[i]);
    }
    return newArray;
}

// Greater that Y
function greaterY(arr, Y) {
    var count = 0;
    for(var i=0; i<arr.length; i++){
      if(arr[i]>Y){
        count++
      }
    }
    return count;
}

// Array Odd
function oddNumbers(arr) {
    var newArray = [];
    for(var i=0; i<arr.length; i++){
      if(arr[i] % 2 === 1) {
        newArray.push(arr[i]);
      }
    }
    return newArray;
}


// Find Average
function findAvg(arr) {
    var sum = 0;
    var avg = 0;
    for(var i=0; i<arr.length; i++){
        sum += arr[i];
    }
    avg = sum/arr.length;
    return avg;
}

// Find Max
function findMax(arr){
	var max = arr[0];
	for(var i=0; i<arr.length; i++){
		if(arr[i] > max){
			max = arr[i];
		}
	}
	return max;
}

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
