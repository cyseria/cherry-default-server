# cherry-scaffold-server

cherry scaffold market simple server

*超级超级简单的 demo，只本地读写文件, 没有接入数据库*

## dev

```bash
npm install

# 使用 nodemon watch changes and update
npx nodemon start
```

open http://localhost:8008

## 部署

```
pm2 start index.js
```

## cherry 配置

```bash
cherry config set server 'http://localhost:8008/cherry'
```