#!/bin/bash

cp /home/labDirectory/CheckoutForm.js /home/.evaluationScripts/src/components/

cd /home/.evaluationScripts

npm test > /dev/null 2>&1

python3 .bodhiFiles/autograder.py
rm .bodhiFiles/out.txt
