const scanner = require('sonarqube-scanner');
 
scanner(
  {
    serverUrl : 'http://192.168.144.8:9000',
    options: {
      'sonar.sources': '.'
    }
  },
  () => process.exit()
)
