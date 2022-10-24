pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/altitlin/interactive-comments-section-v2', branch: 'dev')
      }
    }

    stage('Installing packages') {
      steps {
        sh 'npm install'
        nodejs 'nodejs'
      }
    }

  }
}