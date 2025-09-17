module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      input: "src",
      output: "docs"
    },
    htmlTemplateEngine: "njk",
    passthroughFileCopy: true,
    // Keep files in root of output
    templateFormats: ["html", "njk"], 
  };
};
