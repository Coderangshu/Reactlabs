#!/bin/bash

# Check if exactly two arguments are provided
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <folder1> <folder2>"
    exit 1
fi

# Assign arguments to variables
folder1=$1
folder2=$2

# Copy folders and rename them (don't copy node_modules)
rsync -a --exclude="node_modules" "$folder1/" ".evaluationScripts/"
rsync -a --exclude="node_modules" "$folder2/" "labDirectory/"

# Archive the folders
tar -czvf instructor.tgz .evaluationScripts
tar -czvf student.tgz labDirectory

# Remove the copied and renamed folders
rm -rf .evaluationScripts labDirectory
