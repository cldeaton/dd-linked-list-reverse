const reverse = require('./dd-linked-list-reverse');

function print(obj){
  let newArr = [];
  printObj(obj);

  function printObj(obj) {
    for (var key in obj) {
      var value = obj[key];
      if (typeof value === 'object') {
        printObj(value);
      } else if (typeof value === "string") {
        newArr.push(value);
      }
    }
  }
  let printArr = newArr.toString().replace(/,/g, "->")
  return printArr;
}

test('result is output as a string seperated by "->"', () => {

  const d = {
    value: 'd',
    next: undefined
  }

  const c = {
    value: 'c',
    next: d
  }

  const b = {
    value: "b",
    next: c
  }

  const a = {
    value: 'a',
    next: b
  }

  let reversed = reverse(a);
  output = print(reversed);
  expect(output).toEqual('d->c->b->a');
});

test('result is output as a string seperated by "->"', () => {

  const d = {
    value: 'd',
    next: undefined
  }

  const c = {
    value: 'c',
    next: d
  }

  const b = {
    value: "b",
    next: c
  }

  const a = {
    value: 'a',
    next: b
  }

  let reversed = reverse(b);
  output = print(reversed);
  expect(output).toEqual('d->c->b');
});
