# Fundamentals: Exercises

_We will correct these exercises in class._

## Exercise 1

```js
// Look at these expressions below and determine whether they evaluate to true or false

1. true || false
2. false && false
3. 1 < 2 && 2 > 1
4. 31 < 13 || 1 < 2 && 3 > 1
5. 400 <= 400 && 399 < 400 && (30 > 31 || 400 > 31)
6. true && false && false || false && true
7. true && false || true || false
8. true && false && false || false && true ? true && false && false || false && true : 1 < 2 && 2 > 1
```

---

## Exercise 2

Given this data structure:

```js
let data = [0, [], [], [1, 2, 3, [4]]];
```

1. How would you access the value `0`?  
'data[0]'
2. How would you access the value `3`?  
'data[3][3]'
3. How would you access the value `4`?  
'data[3][3][0]'

---

## Exercise 3

- List the number of properties for each object.
- For each property, indicate its key and its value.
- For each property value, indicate its type.

```js
{ label: 'corn', price: 5.3 + '$' }; 2 properties - label=corn (string), price=5.3$ (number + string)
{ ISBN: 53532, isAvailable: true, author: 'Nakamoto' }; 3 properties - ISBN=53532 (number), isAvailable=true (boolean), author=Nakamoto (string)
```

---

## Exercise 4

```js
// Given
let person = { name: "Bob", age: 23 };
```

What is the value of the following expressions?

1. person.name
Bob
2. person['name']
Bob
3. person[name]
error (requires ',` or ")
