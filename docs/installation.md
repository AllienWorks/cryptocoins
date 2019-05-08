# Installation

Available install options:

- [npm](#npm)
- [SVG icons](#svg-icons)
- [Webfont version](#webfont-version)
- [CDN](#cdn)

## npm

Install [Cryptocoins NPM package](https://www.npmjs.com/package/cryptocoins-icons):

```
$ npm i cryptocoins-icons
```

---


## SVG icons

SVG is better option, if you want to use just a few icons (including whole webfont would be data-inefficient. Find the icons you need in "SVG" folder and copy them to your project. Then use them as regular images:

``` html
<img src="img/BTC.svg" alt="Bitcoin">
```

**Tip:** You can also open each SVG icon in text editor and copy its contents directly into HTML, resulting in fewer HTTP requests and ability to style icons direcly via CSS. There are also [many scripts](http://stackoverflow.com/questions/11978995/how-to-change-color-of-svg-image-using-css-jquery-svg-image-replacement) that do the same automatically – your choice.

When extracted to HTML directly, you can style the icons via CSS like this:

> Note: be sure to use SVG's "fill" property instead of "color".

```
.btc { fill: black; }
.btc:hover { fill: orange; }
```

You can also include `cryptocoins-color.css` which contains all the coins' main colors. This stylesheet colors all the icons via `fill` by default, so edit it as you please.

---


## Webfont version

Ideal when you want to include all icons at once.

> Pro tip: if you want to load icons efficiently (only those you need), [generate the webfont yourself](https://allien.work/blog/howto-generate-icon-webfont)

First clone or download [Cryptocoins](https://github.com/AllienWorks/cryptocoins) and extract its contents.

Webfont is ideal when you want to use majority of Cryptocoins icons. Copy `webfont/` folder to your project and link `cryptocoins.css` in your project (you can optionally include also `cryptocoins-colors.css` if you want to use predefined colors):

``` html
<!-- CSS defining icons (required) -->
<link rel="stylesheet" href="webfont/cryptocoins.css">

<!-- CSS defining icon/coin colors (optional) -->
<link rel="stylesheet" href="webfont/cryptocoins-colors.css">
```

Then insert your icons in HTML, e.g.:

> Cryptocoins targets any element with `cc` class. You can use `<i>`, `<div>` or whatever you want.

``` html
<i class="cc BTC"></i>
```

If you're familiar with Font Awesome, it's pretty much the same.

---


## CDN

Cryptocoins are also hosted on [jsDelivr CDN](https://www.jsdelivr.com/package/npm/cryptocoins-icons).
