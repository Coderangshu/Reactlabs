# Instructions  
  
## General:  
1. #### To create Docker image using the Dockerfile - ```docker buildx build -t react-lab:latest .```  
2. #### To run each Lab locally go inside that lab's folder and run - ``docker run -it --rm -p 30000:30000 -v .:/home/.evaluationScripts react-lab``  

## Upload:
1. #### To generate the upload .tgz binaries of a lab use ``./prepup.sh <path-to-.bodhiFiles> <path-to-lab>``
3. #### In Add Script section add *Name - Evaluate* and *Script - /home/.evaluationScripts/.bodhiFiles/evaluate.sh*  
