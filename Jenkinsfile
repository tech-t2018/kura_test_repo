pipeline {
  agent any
  stages {
    stage ('Build') {
      steps {
      sh 'rm -rf ./kura_test_repo/cypress2'
      sh '''
        npm install 
        npm run start
        '''
      }
    }
    stage ('Second') {
      agent {
        label 'React-dev'
      }
      steps {
      sh '''
        rm -rfv !("./kura_test_repo/cypress2")
        npm intall --save-dev ./cypress2/cypress
        npx cypress run ./cypress2
        '''
      }
    }
  }
} 
