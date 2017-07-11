var input;

function calc() {
	document.getElementById("mean").innerHTML = getAverage();
	document.getElementById("median").innerHTML = getMedian();
	document.getElementById("mode").innerHTML = getMode();
}

function getAverage() {
	input = document.getElementById("nums").value;
	var nums = input.split(",");
	var sum = 0;
	var count = 0;
	
	for (i = 0; i < nums.length; i++) {
		sum = sum + parseInt(nums[i]);
		count++;
	}
	
	var ave = (sum/count).toFixed(2);
	return ave;
}

function getMedian() {
	input = document.getElementById("nums").value;
	var nums = input.split(",");
	sort(nums);
	var middle = 0;
	var median = 0;
	
	if (nums.length%2 == 1) {
		middle = (parseInt(nums.length)-1)/2;
		median = nums[middle];
	}
	else {
		middle = nums.length/2;
		median = (parseInt(nums[middle]) + parseInt(nums[middle-1]))/2;
	}
	return median;
}

function getMode() {
	input = document.getElementById("nums").value;
	var nums = input.split(",");
	var ints = [];
	var modes = [];
	var occurrenceMap = {};
	var occurrences = 0;
	
	for (i = 0; i < nums.length; i++) {
		ints.push(parseInt(nums[i]));
	}
	var str = "";
	var modeArr = my_mode(ints);
	
	for (i = 0; i < modeArr.length; i++) {
		str = str + modeArr[i] + ",";
	}
	return str.substring(0,str.length-1);
}

function my_mode(numbers) {
	var modes = [],
        count = [],
        i,
        number,
        maxIndex = 0;
    for (i = 0; i < numbers.length; i += 1) {
        number = numbers[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }
    for (i in count) if (count.hasOwnProperty(i)) {
        if (count[i] === maxIndex) {
            modes.push(Number(i));
        }
    }
    return modes;
}


function sort(arr) {
	var minIdx, temp, 
      len = arr.length;
  for(var i = 0; i < len; i++){
    minIdx = i;
    for(var  j = i+1; j<len; j++){
       if(arr[j]<arr[minIdx]){
          minIdx = j;
       }
    }
    temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
  }
}