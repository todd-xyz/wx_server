## 微信服务器验证
#### 安装
```sh
mkdir vx_server
cd vx_server
git clone https://github.com/todd-xyz/wx_server.git
```
修改app.js 中token为你在微信公众平台小程序的token,否则无法通过验证。
```
npm install
node app.js
```