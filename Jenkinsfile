node ('Ubuntu-AppServer'){  
    def app
    stage('Cloning Git') {
        /* Let's make sure we have the repository cloned to our workspace */
       checkout scm
    } 
    
    stage('SAST-SCAN'){
        build 'Security-SAST-Snyk'
    }

    stage('Build-and-Tag') {
    /* This builds the actual image; synonymous to
         * docker build on the command line */
        app = docker.build("akizilkaya/snake")
    }
    stage('Post-to-dockerhub') {
    
     docker.withRegistry('https://registry.hub.docker.com', 'docker-cred') {
            app.push("latest")
        			}
         }

    stage('IMAGE-SCANNER'){
        build 'SECURITY-IMAGE-SCANNER-AQUA'
    }
    
    stage('Pull-image-server') {
    
         sh "docker-compose down"
         sh "docker-compose up -d"	
      }
    
    stage('DAST-SCAN'){
        build 'SECURITY-DAST-Arachni'
    }

 
}
