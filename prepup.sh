#!/bin/bash

# Check if exactly two arguments are provided
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <Lab Name>"
    exit 1
fi

# Assign arguments to variables
lab=$1

studentFile="$lab/.bodhiFiles/studentFiles"

# Copy folders and rename them (don't copy node_modules)
rsync -a --exclude="node_modules" "$lab/" ".evaluationScripts/"
rsync -a --exclude="node_modules" "$studentFile" "labDirectory/"

# Archive the folders
tar -czvf instructor.tgz .evaluationScripts
tar -czvf student.tgz labDirectory

# Remove the copied and renamed folders
rm -rf .evaluationScripts labDirectory
