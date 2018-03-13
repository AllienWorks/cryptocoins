# Contributing guidelines

First of all, thank all of you who want to take some of your time to make Cryptocoins better. It's highly appreciated!

These guidelines were written to inform you about all the things needed for icon contributions, effectively saving time for everyone involved. Let's keep this short and to-the-point. If you have any doubt/questions, feel free to [contact me](https://allien.work).


## tl;dr

1. fork the [Cryptocoins repo](https://github.com/AllienWorks/cryptocoins)
2. add/edit/rename icons in the `SVG/` folder
3. generate the webfont via running `gulp`
   - you'll need to `yarn install` or `npm install` first
   - get [yarn](https://yarnpkg.com/en/) or [npm](https://www.npmjs.com/)
4. define icons' main colors in `webfont/cryptocoins-colors.css`
5. add the icons (manually) to `demo.html` preview
   - make sure the webfont displays newly icons added correctly (some editors output not-quite-compatible SVGs unfortunately)
6. add info about all the newly added icons to `README.md`'s updates section at the bottom
   - feel free to add your username as credit (see update v2.7)
7. commit your changes
8. submit a [Pull Request](https://github.com/AllienWorks/cryptocoins/compare) back to the original repo – once approved, it will be merged