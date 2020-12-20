node ('Ubuntu-AppServer'){  
    def app
    stage('Clone-Git') {
        /* Let's make sure we have the repository cloned to our workspace */
       checkout scm
    }  
    
    stage('Build-And-Tag') {
    /* This builds the actual image; synonymous to docker build on the command line */
        sh 'echo BuildAndTag start'
        app = docker.build("akizilkaya/snake")
        sh 'echo BuildAndTag end'
    }
    
    stage('Post-To-DockerHub') {
        sh 'echo Post-To_DockerHub start'
        docker.withRegistry('https://registry.hub.docker.com', 'test-docker-cred') {
            sh 'echo with registry start'
            app.push("latest")
            sh 'echo with registry end'
        }
        sh 'echo Post-To_DockerHub end'
     }

    stage('Pull-Image-Server') {
         sh "docker-compose down"
         sh "docker-compose up -d"	
      }
}
