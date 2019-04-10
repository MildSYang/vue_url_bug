let gulp = require('gulp')
const glob = require('glob')
const replace = require('replace-in-file')

function cretePathLv (lv) {
  let str = '../'
  for (let i = 0; i < lv - 1; i++) {
    str += '../'
  }
  return str
}

gulp.task('default', async (cb) => {
  console.log('replace css background image url')
  let file = {}
  let level = 1
  glob.sync('dist/css/**/*.css').forEach(name => {
    level = name.split('/').length - 2
    if (!file[ level ]) {
      file[ level ] = []
    }
    file[ level ].push(name)
  })
  for (let i in file) {
    try {
      let reg = new RegExp(`url\\(\\.{2}\/img`, 'g')
      const changes = await replace({
        files: file[ i ],
        from: reg,
        to: `url(${cretePathLv(i)}img`
      })
      console.log('Modified files:', changes)
    } catch (error) {
      cb(error)
    }
  }
})
