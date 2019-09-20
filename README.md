# nw-img-vue

Caches copies of online images locally and loads them first if available


* * *


## Usage:

1. `npm install --save-dev nw-img-vue`
1. In `main.js` add this:
    ```js
    import NwImg from 'nw-img-vue';
    Vue.use(NwImg);
    ```
1. In any `.vue` file add
    ```html
    <NwImg src="https://example.com/image.jpg" alt="Example Alt Text" />
    ```
    * Or this, depending on your setup.
        ```html
        <nw-img src="https://example.com/image.jpg" alt="Example Alt Text"></nw-img>
        ```

You can also just download the `NwImg.vue` file directly from GitHub and drop it in your project. It is completely self-contained and requires no dependencies.


* * *


Works well with **NW.js Vue-CLI Example**:

* https://github.com/nwutils/nw-vue-cli-example


* * *


## How this works:


### In NW.js

* Checks for a local cached copy in the OS's appliction data folder (`window.nw.App.dataPath + '\nw-img-cache\'`)
* If no local version exists, downloads the image to cache
* Always display image from cache (to prevent double-downloading)


### In Browsers

* If `window.nw` or `window.require` is not detected, it just passes the URL directly into an `img` tag. No caching is performed. Useful for codebases that are used for both Web and Desktop builds.
