
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("C:\\Users\\mansu\\Desktop\\work\\blog\\frontend\\.cache\\dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("C:\\Users\\mansu\\Desktop\\work\\blog\\frontend\\src\\pages\\404.js")),
  "component---src-pages-index-js": preferDefault(require("C:\\Users\\mansu\\Desktop\\work\\blog\\frontend\\src\\pages\\index.js")),
  "component---src-pages-strapi-category-slug-js": preferDefault(require("C:\\Users\\mansu\\Desktop\\work\\blog\\frontend\\src\\pages\\{strapiCategory.slug}.js")),
  "component---src-pages-strapi-post-slug-js": preferDefault(require("C:\\Users\\mansu\\Desktop\\work\\blog\\frontend\\src\\pages\\{strapiPost.slug}.js"))
}

