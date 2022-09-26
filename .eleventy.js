let plugin = require('@enhance/eleventy-plugin')

module.exports = function (eleventyConfig) {
  let extension = 'html'
  eleventyConfig.addTemplateFormats(extension)
  eleventyConfig.addExtension(extension, plugin)

  eleventyConfig.on('eleventy.after', async ({results}) => {
    // Run me after the build ends
    for(build of results) {
      await plugin.outputWrite(build.content, build.outputPath)
    }
  });

  eleventyConfig.addWatchTarget("./elements/**/*.mjs");
}