module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css", "images");
  };

module.exports = function(eleventyConfig) {
  eleventyConfig.setOutputDir('./docs');
};
