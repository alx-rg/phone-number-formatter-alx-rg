# Phone-Number-Formatter-ARG

---

## npm library used to format phone number digits into a proper North American Phone number.

## Installation (is simple)

`npm i phone-number-formatter-arg`

---

# Using the library

## numFormat()

#### takes the input given and return a typical phone number format: (204) 222-2222.

```js
numFormat(2342342345);
// returns '(234)-234-2345'

numFormat("234 234 2345");
// returns '(234)-234-2345'

numFormat("555 456-9809");
// returns '(555)-456-9809'

numFormat("688-777-8376");
// returns '(688)-777-8376'

numFormat("phone:773-222-2222");
// returns '(773)-222-2222'

numFormat("area code: 343-1223");
// returns 'Too few numbers - Please supply 10 digits'

numFormat("555(222)-4343-123");
// returns 'Too many numbers - Please supply 10 digits'
```
