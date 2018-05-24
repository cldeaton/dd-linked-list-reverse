const print = require('./dd-linked-list-reverse');


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



test('result is output as a string seperated by "->"', () => {
  reversed = reverse(a);
  output = print(a);
  expect(output).toEqual('d->c->b->a');
});

test('result is output as a string seperated by "->"', () => {
  reversed = reverse(b);
  output = print(b);
  expect(output).toEqual('d->c->b');
});
