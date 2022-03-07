# [Odin | Calculator](https://ledathemis.github.io/odin-etch-a-sketch)

Technologies used:

![HTML5](https://img.shields.io/badge/html5-E34F26.svg?style=for-the-badge&logo=html5&logoColor=FFF)
![CSS3](https://img.shields.io/badge/css3-1572B6.svg?style=for-the-badge&logo=css3&logoColor=FFF)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

Struggles faced:

- Adding Keyboard support was definitely a challenge, because of the complications that I faced with KeyboardEvent.keyCode

- But I solved that using KeyboardEvent.key which gives much more consistent results across different keyboard layouts

- Other thing was stopping "Quick Find" from appearing after I press "/" key
- and It turns out that this was easily achieved by the following:

```js
event.preventDefault();
```
