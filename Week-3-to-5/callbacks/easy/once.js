// Problem Description – once(fn)
//
// You are required to implement a wrapper function named once that accepts a
// callback-based asynchronous function `fn`.
// The wrapper should ensure that `fn` is executed only on the first call.
// Any subsequent calls should not re-execute `fn` and should instead invoke
// the callback with the same result (or error) from the first invocation.

function once(fn) {
  let hasRun = false;
  let hasFinished = false;
  let cachedErr = null;
  let cachedResult = null;
  const waitingCallbacks = [];

  return (...args) => {
    const callback = args[args.length - 1];
    const fnArgs = args.slice(0, -1);
    if (hasFinished) {
      return callback(cachedErr, cachedResult);
    }
    waitingCallbacks.push(callback);
    if (hasRun) return;

    hasRun = true;
    fn(...fnArgs, (err, result) => {
      hasFinished = true;
      cachedErr = err;
      cachedResult = result;

      while (waitingCallbacks.length > 0) {
        const cb = waitingCallbacks.shift();
        cb(cachedErr, cachedResult);
      }
    });
  };
}

module.exports = once;
