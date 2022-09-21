# exmaple-layout-with-enhance
An example using @enhance/eleventy-plugin with Eleventy's layout templates to help diagnose an issue

```
git clone git@github.com:hicksy/exmaple-layout-with-enhance.git
npm install
npm start
```

STR:

1. run `npm start`
2. Open the `_site/index.html` and see duplicate <html>, <head> etc tags



A basic site, using index.html paired with index.json. The index.json informs Eleventy to use the sitem template located in `_includes/layout.njk`. 
It appears that Eleventy's template actions occur after the content for an idividual page has been rendered (and Enhance has rendered the custom elements)) 
