// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/home/nedu/Desktop/WebDev/Portfolio Website/nedu.github.io/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/home/nedu/Desktop/WebDev/Portfolio Website/nedu.github.io/src/templates/blog-post.js")),
  "component---src-pages-404-js": preferDefault(require("/home/nedu/Desktop/WebDev/Portfolio Website/nedu.github.io/src/pages/404.js")),
  "component---src-pages-blog-js": preferDefault(require("/home/nedu/Desktop/WebDev/Portfolio Website/nedu.github.io/src/pages/blog.js")),
  "component---src-pages-contact-js": preferDefault(require("/home/nedu/Desktop/WebDev/Portfolio Website/nedu.github.io/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/home/nedu/Desktop/WebDev/Portfolio Website/nedu.github.io/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/home/nedu/Desktop/WebDev/Portfolio Website/nedu.github.io/src/pages/page-2.js")),
  "component---src-pages-portfolio-js": preferDefault(require("/home/nedu/Desktop/WebDev/Portfolio Website/nedu.github.io/src/pages/portfolio.js")),
  "component---src-pages-resume-js": preferDefault(require("/home/nedu/Desktop/WebDev/Portfolio Website/nedu.github.io/src/pages/resume.js"))
}

exports.json = {
  "layout-index.json": require("/home/nedu/Desktop/WebDev/Portfolio Website/nedu.github.io/.cache/json/layout-index.json"),
  "100-web-projects.json": require("/home/nedu/Desktop/WebDev/Portfolio Website/nedu.github.io/.cache/json/100-web-projects.json"),
  "post-two.json": require("/home/nedu/Desktop/WebDev/Portfolio Website/nedu.github.io/.cache/json/post-two.json"),
  "404.json": require("/home/nedu/Desktop/WebDev/Portfolio Website/nedu.github.io/.cache/json/404.json"),
  "blog.json": require("/home/nedu/Desktop/WebDev/Portfolio Website/nedu.github.io/.cache/json/blog.json"),
  "contact.json": require("/home/nedu/Desktop/WebDev/Portfolio Website/nedu.github.io/.cache/json/contact.json"),
  "index.json": require("/home/nedu/Desktop/WebDev/Portfolio Website/nedu.github.io/.cache/json/index.json"),
  "page-2.json": require("/home/nedu/Desktop/WebDev/Portfolio Website/nedu.github.io/.cache/json/page-2.json"),
  "portfolio.json": require("/home/nedu/Desktop/WebDev/Portfolio Website/nedu.github.io/.cache/json/portfolio.json"),
  "resume.json": require("/home/nedu/Desktop/WebDev/Portfolio Website/nedu.github.io/.cache/json/resume.json"),
  "404-html.json": require("/home/nedu/Desktop/WebDev/Portfolio Website/nedu.github.io/.cache/json/404-html.json")
}