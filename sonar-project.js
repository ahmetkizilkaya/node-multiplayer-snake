const scanner = require('sonarqube-scanner');
 
scanner(
  {
    serverUrl : 'http://192.168.144.8:9000',
    token: '525f5a09578d503ae9ecc4185cfda0b197bf35bc',
    options: {
      'sonar.sources': '.'
    }
  },
  () => process.exit()
)
