# dd-linked-list-reverse


The package will reverse a linked list. Can be used in combination with linked-list-print package to print the reversed list in a String format.

### Installing

```
npm install --save linked-list-reverse
```

And in Node:

```
var reverse = require('linked-list-reverse');
```

## Examples

```
const reverse = require('linked-list-reverse');
const print = require('linked-list-print');

const c = {
  value: 'c',
  next: undefined,
},

const b = {
  value: 'b',
  next: c,
}

const a = {
  value: 'a',
  next: b,
};


print(a);
// a->b->c

const output = reverse(a);
print(output);
// c->b->a
```


## Authors

* **Chris Deaton** - [cldeaton](https://github.com/cldeaton)
