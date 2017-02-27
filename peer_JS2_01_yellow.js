// NOTE: Yellow
console.log('START: Talk-it-Out-Yellow');
// 1. Start with the number 32 and set that equal to 'value'
var value = 32;
console.log('value = ', value);
// 2. Create condition logic to check if the value is greater or equal to 23
// 2-1. If true, add 3 to 'value'
// 2-2. If false, subtract 1 from 'value'
if (32 >= 23) {
  value += 3;
} else {
  value -= 1;
}
// NOTE: 32 > 23 so value = 35
console.log('value = ', value);
// 3. Create a string that is set to 91, add it to 'value'
value += "91"
console.log('value = ', value);
// 4. Create an array, loop through 'value' using charAt, set array[i] to each value
var array = [];
for (var i = 0; i < value.length; i++) {
  array.push(value.charAt(i));
}
console.log('Array = ', array);
// 5. Remove the first and last values off the array
array.shift();
array.pop();
console.log('Array = ', array);
// 6. Create a new variable. Loop backwards through the array and store each value into the new Variable, combining each of the values of that array (backwards remember!)
var back = "";
for (var i = array.length - 1; i >= 0; i--) {
  back += array[i];
}
console.log('back = ', back);
// 7. parseInt both the 'value' and the new variable created in Step 6, ensure that both 'value' and the new variable are set to these new parsed values;
console.log('value = ', value, typeof value);
console.log('back = ', back, typeof back);
value = parseInt(value);
back = parseInt(back);
console.log('value = ', value, typeof value);
console.log('back = ', back, typeof back);
// 8. Add 'value' and the new variable created in Step 6 together and store them in 'value'
value += back;
console.log('value = ', value);
// 9. If the new value of 'value' is greater than 3287, set 'value' equal to 8. If not, check to see if it is equal to 3686, if it is, set 'value' equal to 13. If neither of these are true, set the value to 1.
// NOTE: value = 3686
if (value > 3287) {
  value = 8;
} else if (value == 6102) {
  value = 13;
} else {
  value = 1;
}
console.log('value = ', value);
// 10. Create a while loop that counts down from 4 and increments 'value' by 1.
var i = 4
while (i > 0) {
  value++
  i--
}
console.log('value = ', value);
// 11. Create a function that accepts an argument 'val'. The function should convert 'val' to a String, then drop the first character off the String, but only if there is more than 1 character in the String. Return 'val' and set the 'value' to the returned value.
function last (val) {
  val = val.toString();
  if (val.length > 1) {
    val = val.substring(1);
  }
  return val;
}
// 12. Call the function.
value = last(value);
// 13. Console log value. Create an index.html file, link the this Javascript file. Load in the browser, check the value.
console.log('                                            value = ', value);
// 14. Your answer should be a String value that equals 2. Is that what you got?
console.log('14. Your answer should be a String value that equals 2');
console.log('END: Talk-it-Out-Yellow');
