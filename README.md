# util-keymirror

Create an object similar to React's keymirror

# Usage

```
const keymirror = require('util-keymirror');

const responses = keymirror([
  'ROBOT',
  'NOT_EMAIL_OWNER',
  'NO_CONN_COOKIE'
]);

module.exports = responses;

console.log(responses);

{
  ROBOT: 'ROBOT',
  NOT_EMAIL_OWNER: 'NOT_EMAIL_OWNER',
  NO_CONN_COOKIE:  'NO_CONN_COOKIE'
}
```