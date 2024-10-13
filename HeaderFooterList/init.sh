#!/bin/bash
if [ -f "/opt/secret.txt" ]; then
    echo "No Need!"
else
    cp /home/.evaluationScripts/components_copy/* /home/labDirectory/
    echo Done > /opt/secret.txt
fi

cd /home/.evaluationScripts
npm install
npm start