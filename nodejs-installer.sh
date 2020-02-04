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
    VERSION='v12.14.1' ;;
    latest )
    VERSION='v13.7.0' ;;
    *) 
    VERSION='v12.14.1' ;;
  esac
fi
if [[ "$OSTYPE" == "linux-gnu" ]]; then
    echo "Removing old node..."
    sudo apt-get --purge remove node
    sudo apt-get --purge remove nodejs-legacy
    sudo apt-get --purge remove nodejs
    echo "Old node remove done!!"
fi
echo "Removing old node gyp and modules"
rm -rf ~/.node-gyp ~/.npm
echo "Create Softwares folder"
mkdir -p ~/Softwares && cd $_
echo "Downloading node version: $VERSION"
sleep 2
if [[ "$OSTYPE" == "darwin"* ]]; then
    OS_TYPE="darwin"
else
    OS_TYPE="linux"
fi
DOWNLOAD_FOLDERNAME="node-$VERSION-$OS_TYPE-x64"
curl -o "$DOWNLOAD_FOLDERNAME.tar.gz" "https://nodejs.org/download/release/$VERSION/node-$VERSION-$OS_TYPE-x64.tar.gz"
echo "Downloading completed"
sleep 2
tar -xvzf "$DOWNLOAD_FOLDERNAME.tar.gz"
rm "$DOWNLOAD_FOLDERNAME.tar.gz"
rm -f node
ln -s "$DOWNLOAD_FOLDERNAME" node
echo "Go Back to Home"
cd ~
echo "Updating .bashrc or .bash_profile file"
sleep 2
if [[ "$OSTYPE" == "darwin"* ]]; then
    echo '\nexport NODE=~/Softwares/node\nexport PATH=$PATH:$NODE/bin\nexport PATH' >> .bash_profile
    source .bash_profile
else
    echo '\nexport NODE=~/Softwares/node\nexport PATH=$PATH:$NODE/bin\nexport PATH' >> .bashrc
    source .bashrc
fi
sleep 2
echo "Installation done!!Please check with"
echo "node -v"
echo "Bye! Bye!"
echo "In case of any problem, contact deepak.m.shrma@gmail.com\nGithub:https://github.com/deepakshrma/"
