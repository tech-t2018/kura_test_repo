pipeline {
  agent any
  stages {
    stage ('First') {
      steps {
      sh 'echo "HELLO WORLD"'
      sh '''
        echo "This will list current dir content"
        ls -lh
        '''
      }
    }
    stage ('Second') {
      agent {
        label 'React-dev'
      }
      steps {
      sh '''
        hostname
        ls -lh
        '''
      }
    }
  }
} 
