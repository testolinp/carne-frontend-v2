const routes = require('next-routes')

module.exports = routes()

.add('issues')
.add('issue', '/issue/:slug')
.add('artists')
.add('artist', '/artist/:name:lastname')
.add('about')
.add('submit')