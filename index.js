module.exports = {
  rules: {
    'body-min-lines': function (parsed, when, value) {
      const input = parsed.body;

      if (!input) {
        return [true];
      }

      const lineLength = input.split(/\r?\n/).length;

      return [
        lineLength >= value,
        `body's lines must be greater than ${value}, now is ${lineLength}`
      ];
    }
  }
}
