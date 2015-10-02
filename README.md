# NodeJs-4.0-Reference-Guide
NodeJs-4.0-Reference-Guide
Sticky Notes:
###function
1. `functions` are first-class objects, i.e. they are objects and can be manipulated and passed around just like any other object. Specifically, they are Function objects.
2. In the case of a constructor called with the new keyword, the default value is the value of its this parameter. For all other functions, the default return value is undefined.
3. Arguments are passed to functions by `value`.
4. Object references are values, too, and they are special: if the function changes the referred object's properties, that change is visible outside the function.
```js
ex.
//2-Arguments-passed-by-value.js
```
