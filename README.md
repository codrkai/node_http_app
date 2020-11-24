# Node_Http_App

This tutorial focuses on the basics of Node JS programmding by setting up the coding environment, then creating a simple http server with simple URL routing to display a webpage.

Install node either by going to [nodejs.org](https://nodejs.org) or [homebrew](https://brew.sh)

Initialize node
```javascript
npm init -y
```

Install nodemon for development testing (the command "--save-dev" is for adding as a development dependency inside of package.json)
```javascript
npm install --save-dev nodemon
```

Check your version of node and verify it with the current version at nodejs.org
```javascript
node -v
npm -v
```


If you are using Homebrew, please make sure to update homebrew and it's packages using these commands.
```javascript
brew update
brew upgrade
brew install node
```

If you are running into errors with homebrew, here are a few trouble shooting tips.

Run update TWICE and then the DOCTOR command.
```javascript
brew update
brew update
brew doctor
```

You may need to fix the homebrew symlink file.
```
sudo chown -R $(whoami) $(brew --prefix)/*
brew link --overwrite node
```
