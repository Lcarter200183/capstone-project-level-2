
echo "# styleup-multipage-3le03l0iked03pwoujt9oei0e9prigk9eire03jiek" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Lcarter200183/styleup-multipage3le03l0iked03pwoujt9oei0e9prigk9eire03jiek.git
curl -sS https://webi.sh/gh | sh
//PRESS ENTER TO SELECT ALL THE DEFAULTS. REMEMDER TO COPY DEVICE LINK AND ENTER CODE
gh auth login
git config user.name "Lcarter200183"
git config user.email "Lcarter200183@yahoo.com"
git push -u origin main

//PRESS ENTER TO SELECT ALL THE DEFAULT. REMINDER TO COPY DEVICE LINK AND ENTER CODE
gh auth login

//ADD CHANGES THAT MADE TO THE README FILE
git add README.md

//ADD CHANGES THAT WERE MADE TO ALL FILES AND FOLDERS
git add . 

//CREATE A SAVE POINT AND ATTACHED A MEMO DESCRIPTION  -MEMO
git commit -m "I added info to the README file"

//SYNC CHANGES TO GITHUB 
git push origin main

//VIEW THE VALUE OF ORIGIN
got remote -v