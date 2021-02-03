#Github Pages:
#--create react-app
#--npm init react-app [name of react-project] in your local machine
#-- cd [your react-project] in your local machine
#-- check your react-app by using command "npm start"
#--create github repo in your GITHUB account
#** Now install Githubpages***
#--npm install gh-pages
#-- **Go to your package.json and check whether githubpages are install or devDependencies
#-- ** do Changes in package.json files
  # -- "homepage": "http://[ your Github username ].git.io/[name your github repo]
       Example: "homepage": "https://github.com/VasaviGannena/react-portfolio.git"
    -- **Add  to line to Script in package.json
       "script" : {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build",
       ......
       }
 # --Go to react-project in your local machince and open your terminal and type
 # **git init**
 # **git remote add origin [your github repo of react-project] https://github.com/VasaviGannena/react-portfolio.git
  **Now do changes in react-project what do you want to build**
  --Here I am build my react-app portfolio
  ** Now save file in github **
       -- git add .
       --git commit -m "name of your commit"
       
 ** Now deploy your react-project from your local machine in github
      -- npm run deploy
 ** Now push your code in github
    -- git push -u orgin [name of your branch] master
 ** now go to you github repo and check in the settings (Github pages)
 --** my githubpage :
      ---Your site is published at https://github.com/VasaviGannena/react-portfolio.git
      
  ** ---End here and Enjoy your coding --- ***
 
 
       
  
  
       
   


