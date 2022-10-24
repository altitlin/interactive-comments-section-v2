pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/altitlin/interactive-comments-section-v2', branch: 'dev')
      }
    }

    stage('error') {
      steps {
        nodejs('nodejs') {
          sh 'npm install'
        }

      }
    }

  }
}