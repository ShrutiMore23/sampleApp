pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                echo 'Code pulled from GitHub'
            }
        }

        stage('Build Containers') {
            steps {
                sh 'docker compose up --build -d'
            }
        }

        stage('Check Running Containers') {
            steps {
                sh 'docker ps'
            }
        }
    }
}