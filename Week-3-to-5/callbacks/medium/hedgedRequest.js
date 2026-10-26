// Problem Description – Hedged Request
//
// You have a Primary async source and a Secondary backup.
// Start the Primary immediately. If it is slow, start the Secondary.
//
// Return the first successful result and ignore the rest.
// Only fail if both fail, and ensure the callback runs once.
//
// Requirements:
// - Start Primary immediately.
// - Start Secondary after timeoutMs if needed.
// - First success wins.
// - Callback must be called exactly once.
function hedgedRequest(primary, secondary, timeoutMs, onComplete) {
  let err1 = null;
  let err2 = null;
  let callBackCalled = false;
  let time = new Date().getTime();
  primary((err, data) => {
    if (err) {
      err1 = err;

      if (err1 && err2) {
        onComplete(new Error("Secondary Failed"));
      }
    }
    if (data) {
      if (!callBackCalled) {
        callBackCalled = true;
        onComplete(null, data);
      }
    }
  });

  setTimeout(() => {
    secondary((err, data) => {
      if (err) {
        err2 = err;

        if (err1 && err2) {
          onComplete(new Error("Secondary Failed"));
        }
      }
      if (data) {
        if (!callBackCalled) {
          callBackCalled = true;
          onComplete(null, data);
        }
      }
    });
  }, timeoutMs);
}

module.exports = hedgedRequest;
