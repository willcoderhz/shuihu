# 水浒英雄介绍程序

## 项目描述

本项目是一个基于React的简单应用，旨在展示《水浒传》中各位英雄的相关信息。用户可以点击英雄的名称来查看详细的人物介绍和插图，还能查看人物相关的诗句。

## 功能特色

1. **英雄列表展示**：
   用户可以在首页查看到所有英雄的列表，点击列表中的名称即可查看英雄的详细介绍。

2. **详细人物介绍**：
   在人物介绍页，用户不仅可以看到英雄的插图，还能查看与人物相关的诗句。点击图片，介绍文字会平滑地出现，图片会自动往右侧移动。

3. **平滑切换效果**：
   在查看不同英雄介绍时，切换过程平滑，提供良好的用户体验。

## 技术栈

- React
- CSS

## 如何运行

1. 克隆项目到本地
   ```sh
   git clone <项目仓库地址>
   ```
2. 进入项目目录
   ```sh
   cd <项目目录>
   ```
3. 安装依赖
   ```sh
   npm install
   ```
4. 运行项目
   ```sh
   npm start
   ```

访问 `http://localhost:3000` 即可查看项目。

## 项目结构

```
项目根目录
│
├── src
│   ├── components
│   │   ├── HeroLeaflet.js    # 英雄详情组件
│   │   └── HeroList.js       # 英雄列表组件
│   ├── App.js                # 主应用组件
│   ├── index.js              # 入口文件
│   └── styles.css            # 样式文件
│
├── public
│   ├── index.html            # HTML模板文件
│   └── images                # 图片资源目录
│
├── package.json              # 项目依赖及配置文件
└── README.md                 # 项目说明文档
```

## 展望

未来我们计划加入更多功能，如搜索功能，更多人物详情等，以丰富本项目，提供更好的用户体验。

## 贡献

欢迎任何形式的贡献和建议，可以通过提交Pull Request或者提出Issue来参与项目的贡献。

## 许可证

本项目采用MIT许可证，有关详细信息，请参见[LICENSE](LICENSE)文件。

希望这个README文件对您有所帮助！