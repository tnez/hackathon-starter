#!/usr/bin/env bash

# README
###
# Move starter kit README to DEVELOPMENT-INSTRUCTIONS
mv README.md DEVELOPMENT-INSTRUCTIONS.md
mv README.template.md README.md

# GIT
###
# Clear starter kit git history and make initial commit.
rm -rf ./.git
git init .
INITIAL_COMMIT_MSG=$(cat <<-EOS
Initial commit

This project was bootstrapped using [hackathon-starter](https://github.com/tnez/hackathon-starter).

Now we are ready for teh h4x0rTh0nk!!!
EOS
)
git add .
git commit -m "$INITIAL_COMMIT_MSG"
