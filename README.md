# util-keymirror

Create constant object.

# Usage

```
const keymirror = require('util-keymirror');

const responses = keymirror([
  'ROBOT',
  'NOT_EMAIL_OWNER',
  'NO_CONN_COOKIE'
]);

console.log(responses);

{
  ROBOT: 'ROBOT',
  NOT_EMAIL_OWNER: 'NOT_EMAIL_OWNER',
  NO_CONN_COOKIE:  'NO_CONN_COOKIE'
}
```