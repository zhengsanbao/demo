import React, { useState } from 'react';
import { PurchaseRequest, PurchaseStatus, PurchaseItem } from '../types/purchase';

const PurchaseForm: React.FC = () => {
  const [formData, setFormData] = useState<Partial<PurchaseRequest>>({
    title: '',
    department: '',
    items: [],
    status: PurchaseStatus.DRAFT
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 实现表单提交逻辑
    console.log('提交的表单数据：', formData);
  };

  return (
    <div className="purchase-form">
      <h2>采购申请表</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>标题：</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
          />
        </div>
        <div>
          <label>部门：</label>
          <input
            type="text"
            value={formData.department}
            onChange={(e) => setFormData({ ...formData, department: e.target.value })}
            required
          />
        </div>
        {/* TODO: 添加采购项目列表 */}
        <button type="submit">提交申请</button>
      </form>
    </div>
  );
};

export default PurchaseForm; 