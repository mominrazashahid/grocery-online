pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Building...'
                // your build commands here
            }
        }

        stage('Deploy') {
            steps {
                // sh 'docker version'
                echo 'Deploying....'
                // your deploy commands here
            }
        }
    }
}


