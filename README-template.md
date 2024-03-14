# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![](./design/desktop-preview.jpg)

### Links

- Solution URL: [GitHub](https://github.com/NgocMinhThuNguyen/TIP-CALCULATOR)
- Live Site URL: [Live](https://ngocminhthunguyen.github.io/TIP-CALCULATOR/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript

### What I learned

- First thing I want to take note for myself is that when putting a `script` tag in the html file, it should be follow with the `src` attribute not the `href` attribute.

- When using the `forEach()` loop, to know which event is fired, we can use:
```js
console.log(event.currentTarget)
``` 
or 
```js
console.log(event.target)
```

If we use log the `event` only, it returns the `PointerEvent` instead.

- When the form has (radio) buttons, we can add the `data` attribute to those button, it is useful when you want to access the value of the button through JS, for example:

```html
<button data-price="100">Click me!</button>
```

```js
const button = document.querySelector("button");
button.addEventListener("click", (event) => {
  console.log(event.target.dataset.price);
})
```

- In the console, it will print the `data-price` of the button which is `100`, thing to note here again is that `typeOf` 100 is `string` not a `number`. If you want to work with it as number, you have to convert it into number using `parseInt()` or `parseFloat()`.

- Can use the `label` and `ouput` to show the result of a form.

- To reset a form, instead of apllying the logic manually, we can use  `type="reset"` for the reset button

- When change the radio input type to the text input type, use `.focus()` method if you want to set the input focus when radio button is selected

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

## Author

- Website - [Thu Nguyen](https://github.com/NgocMinhThuNguyen)
- Frontend Mentor - [@NgocMinhThuNguyen](https://www.frontendmentor.io/profile/NgocMinhThuNguyen)