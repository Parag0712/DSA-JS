var reverseString = function (s) {
    // Convert string to array of characters
    let arr = s.split('');
    let left = 0;
    let right = arr.length - 1;
    
    // Reverse the array
    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    
    // Convert array back to string
    let reversedString = arr.join('');
    console.log(reversedString);
};

reverseString("parag"); // Output: "garap"
