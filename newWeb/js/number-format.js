var nums = document.getElementsByClassName('number');
var sumNums = document.getElementsByClassName('sum-number');
var sum = 0.0;
for(i=0;i<nums.length;i++){
    var num = nums[i].innerHTML;
    nums[i].innerHTML = numeral(num).format('0,0.0');
}
for(i=0;i<sumNums.length;i++){
    var num = sumNums[i].innerHTML;
    sum = sum+Number(num);
    sumNums[i].innerHTML = numeral(num).format('0,0.0');
}
var total = document.getElementById('total');
total.innerHTML = numeral(sum).format('0,0.0');