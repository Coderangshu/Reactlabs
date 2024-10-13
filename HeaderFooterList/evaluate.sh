#!/bin/bash

cp /home/labDirectory/* /home/.evaluationScripts/src/components/
cd /home/.evaluationScripts
npm test > /dev/null 2>&1
python3 parse.py
rm out.txt