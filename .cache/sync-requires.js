// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/mindsea/Documents/psnl/Projects/nedu.github.io/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/Users/mindsea/Documents/psnl/Projects/nedu.github.io/src/templates/blog-post.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/mindsea/Documents/psnl/Projects/nedu.github.io/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/mindsea/Documents/psnl/Projects/nedu.github.io/src/pages/404.js")),
  "component---src-pages-blog-js": preferDefault(require("/Users/mindsea/Documents/psnl/Projects/nedu.github.io/src/pages/blog.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/mindsea/Documents/psnl/Projects/nedu.github.io/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/mindsea/Documents/psnl/Projects/nedu.github.io/src/pages/index.js")),
  "component---src-pages-portfolio-js": preferDefault(require("/Users/mindsea/Documents/psnl/Projects/nedu.github.io/src/pages/portfolio.js")),
  "component---src-pages-resume-js": preferDefault(require("/Users/mindsea/Documents/psnl/Projects/nedu.github.io/src/pages/resume.js"))
}

exports.json = {
  "layout-index.json": require("/Users/mindsea/Documents/psnl/Projects/nedu.github.io/.cache/json/layout-index.json"),
  "converting-from-a-truth-table-to-a-boolean-expression.json": require("/Users/mindsea/Documents/psnl/Projects/nedu.github.io/.cache/json/converting-from-a-truth-table-to-a-boolean-expression.json"),
  "intro-to-react-query.json": require("/Users/mindsea/Documents/psnl/Projects/nedu.github.io/.cache/json/intro-to-react-query.json"),
  "dev-404-page.json": require("/Users/mindsea/Documents/psnl/Projects/nedu.github.io/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/mindsea/Documents/psnl/Projects/nedu.github.io/.cache/json/404.json"),
  "blog.json": require("/Users/mindsea/Documents/psnl/Projects/nedu.github.io/.cache/json/blog.json"),
  "contact.json": require("/Users/mindsea/Documents/psnl/Projects/nedu.github.io/.cache/json/contact.json"),
  "index.json": require("/Users/mindsea/Documents/psnl/Projects/nedu.github.io/.cache/json/index.json"),
  "portfolio.json": require("/Users/mindsea/Documents/psnl/Projects/nedu.github.io/.cache/json/portfolio.json"),
  "resume.json": require("/Users/mindsea/Documents/psnl/Projects/nedu.github.io/.cache/json/resume.json"),
  "404-html.json": require("/Users/mindsea/Documents/psnl/Projects/nedu.github.io/.cache/json/404-html.json")
}