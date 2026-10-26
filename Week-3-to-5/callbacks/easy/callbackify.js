// Problem Description – callbackify(fn)
//
// Converts a Promise-returning function into a Node.js-style callback function.
//
// Input:
// - `fn`: A function that takes any number of arguments and returns a Promise.
//
// Output:
// - Returns a new wrapper function.
//
// Wrapper Function Behavior:
// - Accepts any number of arguments, where the LAST argument is always a callback function:
//   `wrapperFn(arg1, arg2, ..., callback)`
// - Calls the original `fn` with all the arguments except the last one (the callback).
// - When the Promise resolves with `result`: invokes `callback(null, result)`.
// - When the Promise rejects with `error`: invokes `callback(error)`.
//
// Example:
//   const asyncAdd = (a, b) => Promise.resolve(a + b);
//   const callbackAdd = callbackify(asyncAdd);
//
//   callbackAdd(2, 3, (err, result) => {
//     console.log(result); // 5
//   });

function callbackify(fn) {
  return (...args) => {
    const callbackFunc = args[args.length - 1];
    const remainingArgs = [];
    for (let i = 0; i < args.length - 1; i++) {
      remainingArgs.push(args[i]);
    }
    fn(...remainingArgs)
      .then((data) => {
        callbackFunc(null, data);
      })
      .catch((err) => {
        callbackFunc(err);
      });
  };
}

module.exports = callbackify;
