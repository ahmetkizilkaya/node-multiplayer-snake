node ('master'){  
    // def app
    stage('Cloning Git') {
        sh 'echo Cloning Git'
        /* Let's make sure we have the repository cloned to our workspace */
       checkout scm
    }  
    
    stage('Build-and-Tag') {
        sh 'echo Build-And-Tag'
    /* This builds the actual image; synonymous to
         * docker build on the command line */
        // app = docker.build("akizilkaya/snake")
    }
    stage('Post-to-dockerhub') {
        sh 'echo Post-To-DockerHub'
       /*
        docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
          app.push("latest")}
       */
         }
    
    stage('Pull-image-server') {
        sh 'echo Pull-Image-Server'
    /*
         sh "docker-compose down"
         sh "docker-compose up -d"	
    */
      }
}
