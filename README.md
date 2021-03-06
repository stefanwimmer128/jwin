# jwin

JustWhatINeed is a JavaScript library, which adds some useful functions that are often used by me

## How to install?

Installing this module is easy, just type:

``` bash
npm i [-S|--save] jwin[@[version]]
```

for example:

``` bash
npm i -S jwin@1.1.0
```

## How to include?

``` javascript
const $ = require("jwin");
```

## Examples of what you can do

``` javascript
const $ = require("jwin");

const myGroup = new $.Group([1, 2]); // Creates Group with elements [1, 2]

myGroup.add(3); // Ads 3 to elements [1, 2, 3]
myGroup.add(4); // Ads 4 to elements [1, 2, 3, 4]

const add = [5, 6];
const itr = new $.Iterator(add); // Creates an Iterator based on elements [5, 6]
while (itr.hasNext()) // Cycle as long there are values in the Iterator
{
    myGroup.add(itr.next()); // Adds current element to myGroup and cycle through the elements
}

const mapedGroup = myGroup.map((num) => num * 2); // See Array.prototype.map: [2, 4, 6, 8, 10, 12]

const filteredGroup = mapedGroup.filter((num) => num > 6); // See Array.prototype.filter: [8, 10, 12]

const sum = filteredGroup.reduce((sum, num) => sum + num, 0); // See Array.protorype.reduce: 30

console.log(sum); // 30
```
