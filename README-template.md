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
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

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

First thing I want to take note for myself is that when putting a `script` tag in the html file, it should be follow with the `src` attribute not the `href` attribute.

When using the `forEach()` loop, to know which event is fired, we can use:
```js
console.log(event.currentTarget)
``` 
or 
```js
console.log(event.target)
```

If we use log the `event` only, it returns the `PointerEvent` instead.

When the form has (radio) buttons, we can add the `data` attribute to those button, it is useful when you want to access the value of the button through JS, for example:

```html
<button data-price="100">Click me!</button>
```

```js
const button = document.querySelector("button");
button.addEventListener("click", (event) => {
  console.log(event.target.dataset.price);
})
```

In the console, it will print the `data-price` of the button which is `100`, thing to note here again is that `typeOf` 100 is `string` not a `number`. If you want to work with it as number, you have to convert it into number using `parseInt()` or `parseFloat()`.

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
