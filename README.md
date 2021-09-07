# jsBilling
![Build](https://app.travis-ci.com/JustinPooters/jsBilling.svg?branch=main)

``jsBilling`` is a open-source alternative to WHMCS, Hostbill and alikes, jsBilling is inspired by [pyBilling](https://github.com/pyTrinkets/pyBilling) by [Robert S](https://robert-s.dev).

## Installing jsBilling
To install jsBilling you need a VPS of at least 2GB Ram with 40GB Storage, Operating system does need to be Linux, Distro doesn't really matter, as long as its up-to date. My recommendation is Ubuntu 20.04 or above. 

Install commands:
```bash
# Install the latest updates for the OS
sudo apt-get update -y

# Install dependencies
sudo apt-get install node npm git-all -y

# Clone the repo
git clone https://github.com/justinpooters/jsBilling

# Enter the jsBilling folder
cd jsBilling

# Move the file
# for LINUX use this one
mv about.json.example about.json
# for WINDOWS use this one
move about.json.example about.json

# Install node Packages
npm install

# Run jsBilling (stable release)
npm run stable

# if you wanna run the beta, please use the following command
npm run beta
```

## Update notes
All unit tests will be available on [Travis-CI](https://app.travis-ci.com/github/JustinPooters/jsBilling)

Dev1:
```
This shit is as unstable as it can be, don't use this (yet). 
```


Btw if you like the project, star it ;)