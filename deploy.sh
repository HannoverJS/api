#!/bin/bash

echo "Running bash script..."
now --local-config=now.json --token=$NOW_TOKEN --docker
