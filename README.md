
# Britlex-template <img src="./src/img/favicon/favicon.ico" alt="Logo of the project">

![](https://img.shields.io/badge/Code-HTML5-%23E34F26?style=flat&logo=html5)
![](https://img.shields.io/badge/Code-Scss-%23CC6699?style=flat&logo=sass)
![](https://img.shields.io/badge/Tools-Figma-%23F24E1E?style=flat&logo=figma)
![](https://img.shields.io/badge/Tools-npm-%23CB3837?style=flat&logo=npm)
![](https://img.shields.io/badge/Tools-nvm-%23339933?style=flat&logo=node.js)
![](https://img.shields.io/badge/Tools-webpack.js-%238DD6F9?style=flat&logo=webpack)
![](https://img.shields.io/badge/Tools-Handlebars.js-%23000000?style=flat&logo=handlebarsdotjs)

My implementation of the "Britlex" template based on a layout from the figma service.

## 🛠️ Technologies & Tools

* HTML
* SCSS
* OOCSS + BEM naming
* Emmet
* Webpack
* Handlebars

## 📖 Style guide

### Formatting

* Soft tabs (2 spaces)
* camelCase

### OOCSS and BEM

* `.listingCard` — is the “block” and represents the higher-level component. Stores the structure.
* `.listingCard__title` — is an “element” and represents a descendant of `.listing-card`. Stores the structure.
* `.listingCard_featured` — is a “modifier” and represents a different state or variation on the `.listing-card` block. Stores state, behavior and design.

## 📂 Structure project

```
src/
 |--css/
 |   |--abstracts/ (global variable, function)
 |   |--base/ (boilerplate code)
 |   |--components/ (small components)
 |   |--layout/ (global wireframe)
 |   |--themes/ (different themes)
 |   |--vendors/ (external libraries)
 |
 |--fonts/
 |--img/
 |--layout/
     |--pages
     |--partials
```