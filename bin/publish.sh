#!/bin/bash

# result=`git branch | grep "*"`
# curBranch=${result:2}
# echo $curBranch
# exit 0

rm -rf src/lib
rm -rf src/types
# mkdir src/lib

# if [ ! -n "$1" ]
# then
# echo "未指定发布版本号"
# exit 1
# fi

tsc
if [ $? -ne 0 ]
then
    echo "ts文件转js失败"
    exit 1
fi

cd src
npm publish --allow-same-version --no-git-tag-version
if [ ! $? -ne 0 ]
then
    cd ..
    git add .
    git commit -m "发布$1版本"
    git push
    git tag $1
    git push origin $1
else
    exit 1
fi


