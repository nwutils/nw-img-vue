# nw-img-vue

Caches copies of online images locally and loads them first if available

## In NW.js

* Checks for a local cached copy in Appliction Data folder (`window.nw.App.dataPath + '\nw-img-cache\'`)
* If no local version exists, downloads the image to cache
* Always display image from cache (to prevent double-downloading)

## In Browsers

* If `window.nw` or `window.require` is not detected, just passes the URL directly into an `img` tag. No caching is performed. Useful for codebases that are used for Web and Desktop builds.
