#!/bin/bash
# Use -gt 1 to consume two arguments per pass in the loop (e.g. each
# argument has a corresponding value to go with it).
# Use -gt 0 to consume one or more arguments per pass in the loop (e.g.
# some arguments don't have a corresponding value to go with it such
# as in the --default example).
# note: if this is set to -gt 0 the /etc/hosts part is not recognized ( may be a bug )
while [[ $# -gt 1 ]]
do
key="$1"
case $key in
    -v|--version)
    VERSION="$2"
    shift # past argument
    ;;
    --default)
    DEFAULT=YES
    ;;
    *)
            # unknown option
    ;;
esac
shift # past argument or value
done
IS_SPECIFIC='^[0-9\.]+$'
if [[ $VERSION =~ $IS_SPECIFIC ]] ; then
   VERSION=v$VERSION
  else
  case $VERSION in
    lts )
    VERSION='v4.4.7' ;;
    latest )
    VERSION='v6.4.0' ;;
    *) 
    VERSION='v4.4.7' ;;
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
echo "Downloading node version: $VERSION"
sleep 3 
wget "https://nodejs.org/dist/$VERSION/node-$VERSION-linux-x64.tar.gz"
echo "Downloading completed"
sleep 3
tar -xvzf node-$VERSION-linux-x64.tar.gz
rm -rf node
ln -s node-$VERSION-linux-x64 node
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
