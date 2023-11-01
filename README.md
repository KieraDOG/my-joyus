# React 哲学

## 命令式 vs 声明式

作为一个前端开发，那么入门的标志性的里程碑是**声明式的思考方式**

### 命令式

我需要实现一个怎么怎么样的功能

### 声明式

我需要一个怎么怎么样的结果

### 在前端领域的应用

结果 = **页面 (HTML + CSS) + 交互 (JS)**

我需要一个怎么怎么样的结果 = 我需要一个怎么怎么样的页面 + 我需要一个怎么怎么样的交互

## 1. 步骤一：将 UI 拆解为组件层级结构

**代码及文档**

EventExplorer
-- Header
-- Tabs
-- PopularEvents
---- Thumbnail
---- Event
------ Metadata
------ Description
------ ImageGallery
------ Footer
-------- Followers
-------- Actions

## 2. 步骤二：使用 React 构建一个静态版本

## 3. 步骤三：找出 UI 精简且完整的 state 表示 (最小单元)

## 4. 步骤四：验证 state 应该被放置在哪里

## 5. 步骤五：添加反向数据流
