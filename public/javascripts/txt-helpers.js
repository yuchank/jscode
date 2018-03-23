const _print = (message) => _log(message, new Date());
const _log = (message, timestamp = new Date()) => console.log(`${timestamp.toString()}: ${message}`);
