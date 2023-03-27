class MyError extends Error {
    constructor(message) {
      super(message);
      this.name = 'MyError';
    }
  }
  
  // Example usage:
  try {
    throw new MyError('Something went wrong');
  } catch (err) {
    console.error(err.name); // MyError
    console.error(err.message); // Something went wrong
    console.error(err.stack); // stack trace
  }