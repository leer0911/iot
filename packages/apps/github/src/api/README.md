# API

- 个人主要信息 https://api.github.com/users/用户名
- 个人所有 repo https://api.github.com/users/用户名/repos
- repo 详细信息 https://api.github.com/repos/用户名/仓库名
- 获取某个 repo 的内容列表 https://api.github.com/repos/solomonxie/gists/contents
- 获取 repo 中子目录的内容列表 https://api.github.com/repos/solomonxie/gists/contents/目录名
- 获取 repo 中某文件信息（不包括内容） https://api.github.com/repos/solomonxie/gists/contents/文件路径
- 获取某文件的原始内容（Raw）

1.  通过上面的文件信息中提取 download_url 这条链接，就能获取它的原始内容了
2.  或者直接访问：https://raw.githubusercontent.com/用户名/仓库名/分支名/文件路径

- repo 中所有的 commits 列表 https://api.github.com/repos/用户名/仓库名/commits
- 某一条 commit 详情 https://api.github.com/repos/用户名/仓库名/commits/某一条commit的SHA
- issues 列表 https://api.github.com/repos/用户名/仓库名/issues
- 某条 issue 详情 https://api.github.com/repos/用户名/仓库名/issues/序号
- 某 issue 中的 comments 列表 https://api.github.com/repos/用户名/仓库名/issues/序号/comments
- 某 comment 详情 https://api.github.com/repos/用户名/仓库名/issues/comments/评论详情的ID。其中评论ID是从issues列表中获得的

## 查询参数 (Parameters)

如果在上面基本链接中加入查询条件，那么返回的数据就是 filtered，过滤了的。比如要求只返回正在开放的 issues，或者让列表数据分页显示。常用如下：

- 分页功能。格式是 `?page=页数&per_page=每页包含数量`

  - 如 `https://api.github.com/users/solomonxie/repos?page=2&per_page=3`

- issues 状态。格式是 `?state=状态`

  - 如 `https://api.github.com/repos/solomonxie/solomonxie.github.io/issues?state=closed`

## 权限认证 Authentication

到此为止之前所有都查询都是不需要任何权限的，给个地址就返回数据，全公开

常用的认证方法有三种，Basic authentication, OAuth2 token, OAuth2 key/secret

Basic authentication

```bash
curl -u "用户名:密码" https://api.github.com
```
