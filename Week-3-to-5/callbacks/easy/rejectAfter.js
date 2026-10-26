// Problem Description – rejectAfter(ms, callback)
//
// You are required to create a function named rejectAfter that accepts a time
// duration in milliseconds and a callback function.
// The function should wait for the specified time and then invoke the callback
// with an error.

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function rejectAfter(ms, callback) {
  const time = new Date().getTime();
  wait(ms).then(() => {
    callback(new Error(`Rejected after ${ms}ms`), null);
  });
}

module.exports = rejectAfter;
