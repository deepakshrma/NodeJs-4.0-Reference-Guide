# NodeJs-4.0-Reference-Guide
NodeJs-4.0-Reference-Guide

##How To install nodejs 4.0
```bash
#Go to home
cd ~
#run command
#New Script
wget https://raw.githubusercontent.com/deepakshrma/NodeJs-4.0-Reference-Guide/master/nodejs-installer.sh && bash nodejs-installer.sh -v lts
#here -v or --version can be sepecific to 0.10.37 or it could be latest/lts 
#Examples
bash nodejs-installer.sh -v lts
bash nodejs-installer.sh -v latest
bash nodejs-installer.sh -v 4.4.2
#Old Script
wget https://raw.githubusercontent.com/deepakshrma/NodeJs-4.0-Reference-Guide/master/install.sh && bash install.sh
#It will download and install nodejs 4.1.2 for you
```
####Note: 
run *_node -v_* to see current install version. If still you can't see node. Just make sure there is an entry in you .bashrc/.bash_profile
```bash
#At the end of file
export NODE=/opt/node
export PATH=$PATH:$NODE/bin
export PATH
```

Sticky Notes:
###function
1. `functions` are first-class objects, i.e. they are objects and can be manipulated and passed around just like any other object. Specifically, they are Function objects.
2. In the case of a constructor called with the new keyword, the default value is the value of its this parameter. For all other functions, the default return value is undefined.
```js
ex.
//2-Function-with-or-without-new.js
```
3. Arguments are passed to functions by `value`.
4. Object references are values, too, and they are special: if the function changes the referred object's properties, that change is visible outside the function.
```js
ex.
//3-Arguments-passed-by-value.js
```
5. The this keyword does not refer to the currently executing function, so you must refer to Function objects by name, even within the function body.
###The generator function expression (function* expression)
###The arrow function expression (=>)
Question:
Function constructor vs. function declaration vs. function expression
A function defined with the Function constructor assigned to the variable multiply:
```js
function multiply(x, y) {
   return x * y;
}
```
A function expression of an anonymous function assigned to the variable multiply:
```js
var multiply = function(x, y) {
   return x * y;
};
```
A function expression of a function named func_name assigned to the variable multiply:
```js
var multiply = function func_name(x, y) {
   return x * y;
};
```
