node ('master'){  
    def app
    stage('Clone-Git') {
        /* Let's make sure we have the repository cloned to our workspace */
       checkout scm
    }  
    
    stage('Build-And-Tag') {
    /* This builds the actual image; synonymous to
         * docker build on the command line */
         app = docker.build("akizilkaya/snake")
    }
    stage('Post-To-DockerHub') {
        docker.withRegistry('https://registry.hub.docker.com', 'test-docker-cred') {
          app.push("latest")}
         }
    
    stage('Pull-image-server') {
         sh "docker-compose down"
         sh "docker-compose up -d"	
      }
}
