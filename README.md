
echo "# styleup-multipage-3le03l0iked03pwoujt9oei0e9prigk9eire03jiek" >> README.md
git init
git add README.md
git config user.name "Lcarter200183"
git config user.email "Lcarter200183@yahoo.com"
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Lcarter200183/styleup-multipage-3le03l0iked03pwoujt9oei0e9prigk9eire03jiek.git
curl -sS https://webi.sh/gh | sh
//PRESS ENTER TO SELECT ALL THE DEFAULTS. REMEMDER TO COPY DEVICE LINK AND ENTER CODE
gh auth login

git push -u origin main

//PRESS ENTER TO SELECT ALL THE DEFAULT. REMINDER TO COPY DEVICE LINK AND ENTER CODE
gh auth login

//ADD CHANGES THAT MADE TO THE README FILE
git add README.md

//ADD CHANGES THAT WERE MADE TO ALL FILES AND FOLDERS 3
git add . 

//CREATE A SAVE POINT AND ATTACHED A MEMO DESCRIPTION  -MEMO 2
git commit -m "I added info to the README file"

//PUSHES CHANGES TO THE ORIGIN'S MAIN BRANCH AND SAVES THE PARAMETERS
git push -u origin main

//SYNC CHANGES TO GITHUB 1
git push 

//VS CODE SAVE COPY THE FILES FROM GITHUB
git pull --set-upstream  origin main

//COPY FILES FROM GITHUB WITH DEFAULT PARAMETERS VS CODE
git pull

//VIEW THE VALUE OF ORIGIN AND THE URL OF OTHER REMOTE REPOSITORIES
got remote -v

//ASSIGNS A URL TO THE ORIGIN VARIABLE
git remote add origin https://github.com/Lcarter

//CHANGE THE VALUE OF ORIGIN VARIABLE 
git remote set-url origin https://github.com/Lcarter200183

//ACTIVATE OR INITIALIZE GIT SOURCE CONTROL
git init

//RENAMES THE CURRENT NAME TO MAIN
git branch -M main

//GET THE CURRENT VERSION OF GIT
git --version