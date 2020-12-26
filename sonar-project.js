const scanner = require('sonarqube-scanner');
 
scanner(
  {
    serverUrl : 'http://192.168.144.8:9000',
    token: '27169c908db48fbb433faabdfdd223354dee4e1d',
    options: {
      'sonar.sources': '.'
    }
  },
  () => process.exit()
)
