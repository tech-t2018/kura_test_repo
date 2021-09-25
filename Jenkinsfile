pipeline {
  agent any
  stages {
    stage ('Build') {
      steps {
      sh 'rm -rf ./kura_test_repo/cypress2'
      sh '''
        npm install
        '''
      }
    }
    stage ('Second') {
      agent {
        label 'React-dev'
      }
      steps {
      sh ''' 
        npm install cypress
        npm -g mocha
        npx cypress run --spec ./cypress/integration/test.spec.js
        '''
      }
      post {
        always {
          junit 'cypress run --reporter junit --reporter-options "mochaFile=results/my-test-output.xml,toConsole=true"'
        }
          
      }
    }
  }
} 
