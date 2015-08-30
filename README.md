# ScrambleJS
> Efficient shuffling of arrays and strings in JavaScript

## Getting it 

ScrambleJS is available as Node module 
```shell
$ npm install scramble --save
```

As well as a bower component 
```shell 
$ bower install scramble --save 
```

Or it can be directly set up from this repo
```shell 
$ git clone git@github.com:sanchitgera/ScrambleJS
$ cd ScrambleJS/
$ npm install 
$ npm run uglify
```

## Usage 

On the server 
```js
var scramble = require('scramble');

var input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var output = scramble(input); 
```

In the browser 
```html
<script src="./path/to/my/scripts/scrambled.min.js"></script>
<script>
  scramble('This is a long string with way too many spaces');
</script>
```

## Options 

### Preserve 
You can additionally preserve a portion of the array and have it fixed through the scrambling process. For example, 
```js
var input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for( var i = 0; i < 3; i++) {
  scramble(input, {
    preserve: [2, 5]
  });
}
//Output 1 
[ 8, 10, 3, 4, 5, 6, 7, 1, 9, 2 ]
//Output 2
[ 2, 10, 3, 4, 5, 6, 8, 1, 7, 9 ]
//Output 3
[ 1, 8, 3, 4, 5, 6, 7, 2, 9, 10 ]

```
This preserves the elements between the indices 2 and 5 (inclusive) in every iteration. 


## Attach
Scramble can be invoked as a native function on arrays and strings by calling `attach` first. 

```js
// Attaches scramble as a native function
scramble.attach(); 

var inputArray = ['foo', 'bar', 'baz'];
inputArray.scramble();

var inputString = 'Hello World!';
inputString.scramble();
```
Modifying built in objects isn't, however, best practice necessarily. Be careful :)  

## Testing 
All tests are contained in `lib/scrambleSpec`. To run them, 
```
$ npm install 
$ npm test
```

## License

Copyright (c) 2015, Sanchit Gera. (MIT License)

See LICENSE for more info.
