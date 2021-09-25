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
        npm intall cypress
        npx cypress run
        '''
      }
    }
  }
} 
