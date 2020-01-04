### 初始化git仓库

`git init` 这个仓库会存放git对项目代码进行备份的文件

### 配置个人信息

`git config --global user.name "bigkaiwu"`

`git config --global user.email "bigkaiwu@163.com"`

### push到远程仓库

`git add .` / `git add ./README.md`

`git status` 查看当前状态 changes to be committed: 

`git commit -m "提交代码声明"`

`git status` nothing to commit, working directory clean

`git remote add origin name@github.git`

#### `git add .`和`git commit -m "提交代码声明"`合并

`git commit --all -m "提交代码声明"`

### 查看日志

`git log`/ `git log --oneline`简洁版

`git reflog` 提交切换的版本号都将被记录

### 版本回退

`git reset --hard Head~0`0为索引，回退到上一个版本

`git reset --hard 版本号`通过版本号精确回退

### 创建切换分支

`git branch dev`创建dev分支

`git branch`查看当前所有分支

`git checkout dev`切换到dev分支

`git checkout master`切换到主分支

`git merge dev`将主分支和dev分支合并

`git branch -d dev`删除dev分支，不能在dev分支上时删除dev，自己杀自己

### github

不是git，只是一个网站。只不过是这个网站提供了允许别人通过git上传代码的功能

### use https push/pull

`git push httpsaddress`会把当前分支的内容上传到远程的master分支上，master可省略，其他分支在后面加上分支名

`git pull httpsaddress`会把远程分支的数据得到，前提是本地要初始化一个仓储

`git clone httpsaddress`会得到远程仓库相同的数据，如果多次执行回覆盖本地内容

### use ssh(!important)

`ssh-keygen -t rsa -C "bigkaiwu@163.com"`生成公钥id_rsa_pub

Settings-ssh and gpg keys-add new ssh key

`git push sshaddress master`

### push/pull简写

`git remote add origin address`像声明一个变量

`git push origin`

`git push origin`如在push时，加上-u参数，那么在下一次push时只需要写上`git push`就能上传代码，加上-u之后，git会把当前分支与远程指定的分支进行关联`git push origin dev`

`git pull origin`

`git pull --rebase origin master`

`git push -u origin master`

### other

`git checkout -b dev`创建并切换到dev分支上

`git branch -d dev`删除dev分支











