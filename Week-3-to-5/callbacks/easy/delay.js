// Problem Description – delay(ms, value, callback)
//
// You are required to write a function named delay that takes a time duration
// in milliseconds, a value, and a callback function.
// The function should wait for the given time and then invoke the callback
// with `null` as the first argument and the provided value as the second argument.

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function delay(ms, value, callback) {
  wait(ms).then(() => {
    callback(null, value);
  });
}

module.exports = delay;