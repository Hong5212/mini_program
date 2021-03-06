## 1. 什么是小程序？

- 无需要下载，用完即走
- 2017年1月9日发布，刚发布的时候要求压缩包体积最大不能超过1`M`，同年4月将1`M`提升到2`M`

## 2. 小程序特点？

- 体积小
- 同`app`进行互补，可以实现`app`基本的功能
- 微信扫一扫或者是搜索就可以去下载
- 开发周期短，成本较低

## 3. 适配方案

- `viewport`适配：`width = device-width`
- 单位：`rpx`
- `iphone6`：1`rpx` = 1物理像素 = 0.5`px`  dpr( 像素比) = 物理像素`/`设备独立像素 = 2

## 4. 重要文件

- `wxml` `view`结构  --> `html`
- `wxss` `view`样式  -->  `css`
- `js` `view` 行为  -->  `js`
- `json`文件：数据 `&&` 配置

## 5. 数据绑定

- 在`data`中初始化页面需要的数据，在页面可以直接使用

## 6. 冒泡事件和非冒泡事件

- 冒泡事件：`bind` + 事件名
- 非冒泡事件：`catch` + 事件名

### 7. 模板template
  1. 定义：template 属性： name(标识模板)
  2. 使用：template 属性： is(模板的name)
  3. 引入模板结构： <import src='路径'/>
  4. 引入模板样式： @import '路径'
  5. 传参： data='{{...item}}'
### 8. 列表渲染
  1. wx:for
  2. wx:key为每个个体元素进行标记
  3. 遍历的个体： item
  4. 遍历的下标： index
### 9. 本地缓存（setStorage, setStorageSync）
  1. 缓存的是用户是否收藏当前文章： {0: true, 1: false}
  2. 注意：
    1. 缓存之前应该先去获取之前本地缓存的数据
    2. 缓存的新数据是在原有数据的基础上进行的
    3. 当页面加载的时候onLoad中获取本地缓存的数据(动态修改当前页面是否收藏文章的状态)
    4. 如果storage中没有缓存过通过key获取的value为空！！！
    5. 如果用户之前没有缓存过的话： 初始化一个空对象在storage中
