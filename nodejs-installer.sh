#!/bin/bash
version=$1
fversion=$1
isSpecific='^[0-9\.]+$'
if [[ $version =~ $isSpecific ]] ; then
   fversion=v$version
  else
  case $version in
    lts )
    fversion='v4.4.7' ;;
    latest )
    fversion='v6.2.2' ;;
    *) 
    fversion='v4.4.7' ;;
  esac
fi
echo "removing old node..."
sudo apt-get --purge remove node
sudo apt-get --purge remove nodejs-legacy
sudo apt-get --purge remove nodejs
echo "old node remove done!!"
echo "Changing owner of the folder"
sudo chown $(whoami):$(whoami) /opt/
cd /opt
echo "Downloading node version: $fversion"
sleep 3 
wget "https://nodejs.org/dist/$fversion/node-$fversion-linux-x64.tar.gz"
echo "Downloading completed"
sleep 3
tar -xvzf node-$fversion-linux-x64.tar.gz
rm -rf node
ln -s node-$fversion-linux-x64 node
echo "Go Back to Home"
cd ~
echo "Updating .bashrc file"
sleep 3
echo "export NODE=/opt/node" >> .bashrc
echo 'export PATH=$PATH:$NODE/bin' >> .bashrc
echo 'export PATH' >> .bashrc
. .bashrc
sleep 3
echo "Installation done!!Please check with"
echo "node -v"
echo "Bye! Bye!"
echo "In case of any error, contact deepak.m.shrma@gmail.com"
