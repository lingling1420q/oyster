pipeline {
    agent {
        docker {
            image 'node:12.14.0-stretch'
        }
    }
    triggers {
        pollSCM('*/1 * * * *')
    }
    environment {
        CI = 'true' 
    }
    stages {
        stage('Server build') {
            steps {
                sh 'cd server && npm install'
            }
        }
        stage('Server test') { 
            steps {
                sh 'cd server && npm run test:ci' 
            }
        }
        stage('Client install') {
            steps {
                sh 'cd client && npm install' 
            }
        }
        stage('Client test') {
            steps {
                sh 'cd client && npm run test:ci' 
            }
        }
        stage('Client build') {
            steps {
                sh 'cd client && npm run build' 
            }
        }
    }
    post {
        always {
            rocketSend currentBuild.currentResult
        }
    }
}