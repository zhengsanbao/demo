# 采购上报系统

这是一个简单的采购上报系统，包含前端和后端服务。

## 功能特点

- 采购申请的创建和管理
- 采购申请状态跟踪
- 采购清单管理
- 简单的审批流程

## 技术栈

### 后端
- Node.js
- Express
- REST API

### 前端
- React
- TypeScript
- Ant Design

## 如何运行

1. 启动后端服务
```bash
# 安装依赖
npm install

# 启动服务
npm start
```

2. 前端开发服务器将在另一个终端中运行
```bash
cd client
npm install
npm start
```

## API 接口

### GET /api/purchases
获取所有采购申请列表

### POST /api/purchases
创建新的采购申请

### PUT /api/purchases/:id
更新采购申请状态

## 开发计划

- [ ] 添加用户认证
- [ ] 实现更复杂的审批流程
- [ ] 添加数据持久化
- [ ] 添加采购统计报表
