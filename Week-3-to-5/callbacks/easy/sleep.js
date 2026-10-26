// Problem Description – sleep(ms, callback)
//
// You are required to write a function named sleep that accepts a time duration
// in milliseconds and a callback function.
// The function should wait for the specified time and then invoke the callback.

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function sleep(millis, callback) {
  wait(millis).then((res) => callback());
}

module.exports = sleep;
