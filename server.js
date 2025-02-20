const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// 存储采购申请数据
let purchases = [];

// 获取所有采购申请
app.get('/api/purchases', (req, res) => {
  res.json(purchases);
});

// 创建新的采购申请
app.post('/api/purchases', (req, res) => {
  const purchase = {
    id: Date.now().toString(),
    ...req.body,
    createTime: new Date().toISOString(),
    updateTime: new Date().toISOString(),
    status: '草稿'
  };
  purchases.push(purchase);
  res.json(purchase);
});

// 更新采购申请状态
app.put('/api/purchases/:id', (req, res) => {
  const index = purchases.findIndex(p => p.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: '采购申请不存在' });
  }
  purchases[index] = {
    ...purchases[index],
    ...req.body,
    updateTime: new Date().toISOString()
  };
  res.json(purchases[index]);
});

app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}`);
}); 