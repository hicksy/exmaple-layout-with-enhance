### An example using @enhance/eleventy-plugin with Eleventy's layout templates to help diagnose an issue

A basic site, using index.html paired with index.json. The index.json informs Eleventy to use the layout template located in `_includes/layout.njk`. 
It appears that Eleventy's template actions occur after the content for an idividual page has been rendered (and Enhance has rendered the custom elements)) 


```
git clone git@github.com:hicksy/exmaple-layout-with-enhance.git
npm install
npm start
```

STR:

1. run `npm start`
2. Open the `_site/index.html` and see duplicate <html>, <head> etc tags



## Potential solution

Example on [this branch](https://github.com/hicksy/exmaple-layout-with-enhance/tree/solution-using-pre-release-eleventy2.0) demonstrates how a future version of Eleventy could allow the plugin to hook into the the end of the Eleventy process, to re-validate / write the output once the page and layout have been combinded. 

_Note this requires using the un-released Eleventy version 2.0.0-canary._

You can also grab the patch-package patch [here](https://gist.github.com/hicksy/67bcc168782f4b093fb3127826dfa4c2)