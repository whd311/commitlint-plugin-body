# commitlint-plugin-body
Verify git message body's line number

### Installation

```bash
npm install commitlint-plugin-body --save-dev
```

### Usage

```javascript
module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: ['body'],
  rules: {
    'body-min-lines': [2, 'always', 3]
  }
};
```
