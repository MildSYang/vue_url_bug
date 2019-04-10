# vue_apicloud2

```
yarn install
yarn run serve
```
## 开发
```
  <content src="index.html" />
  为
  <content src="http://{ip}:8080/main/win.html" />
  yarn run serve
  即可同步手机查看效果
  
```


##发布
```
  yarn run build
  // dist文件出现后，执行gulp
  gulp
   
  // 拷贝dist内的文件到apicloud根目录,修改config.xml, 然后同步即可 
  <content src="http://{ip}:8080/main/win.html" />
  为
  <content src="html/main/win.html" />
```

>TODO 由于不是很懂vue-cli和webpack的结合，怎么写指定已查件都无效，赶项目就直接加了gulp使用
