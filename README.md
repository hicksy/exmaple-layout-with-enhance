# exmaple-layout-with-enhance

Using the pre-release version of Eleventy (at time of writting 2.0.0-canary.16), we can hook into the new `eleventy.after` hook signature, to re-parse and write the whole HTML document after eleventy has inserted the content into the specified layout. 

This example uses patch-package ([see this gist])(https://gist.github.com/hicksy/67bcc168782f4b093fb3127826dfa4c2) to add a new method `writeOutuput` to the @enhance/eleventy-plugin, which is then called during the `eleventy.after` hook. This hook fires after the page content has been parsed and then merged with the layout(s). 

Using this hook we can ensure that the final written HTML contained in `_site` is valid, as @enhace's parser validates and fixes the unwanted html, head etc tags. 


