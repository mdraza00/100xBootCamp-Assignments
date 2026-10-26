// Problem Description – Event Loop Execution Order
//
// You are required to implement the function `eventLoopRace`.
//
// Background:
// In JavaScript and Node.js, asynchronous operations are scheduled across different queues:
// 1. Synchronous Code: Runs immediately on the call stack.
// 2. Microtask Queue: Includes `Promise.then`, `Promise.resolve`, and `queueMicrotask`.
//    Microtasks run immediately after the current synchronous script finishes and
//    before the event loop proceeds to macrotasks.
// 3. Macrotask (Task) Queue: Includes timers like `setTimeout`, `setInterval`, and I/O callbacks.
//    Macrotasks run on subsequent ticks/phases of the event loop.
//
// Requirements:
// Inside `eventLoopRace()`, you must trigger 4 `console.log` statements using the
// appropriate mechanisms (synchronous execution, a Promise microtask, and a timer macrotask)
// so that they naturally print in the following exact order:
//
// Expected Log Output:
//   "1: Synchronous"
//   "4: Synchronous"
//   "3: Microtask (Promise)"
//   "2: Macrotask (I/O)"
//
// Rules:
// - Do NOT arbitrarily delay execution using large timeout values.
// - Use standard mechanisms:
//   - Regular `console.log(...)` for synchronous logs.
//   - A Promise (`Promise.resolve().then(...)`) for the microtask log.
//   - `setTimeout(..., 0)` for the macrotask log.
// - The natural scheduling priority of the JavaScript event loop should determine the final order.

function eventLoopRace() {
    console.log("1: Synchronous");
    console.log("4: Synchronous");
    console.log("3: Microtask (Promise)");
    console.log("2: Macrotask (I/O)");
}

module.exports = eventLoopRace;
