import React from 'react';
import { PurchaseRequest, PurchaseStatus } from '../types/purchase';

interface PurchaseListProps {
  purchases: PurchaseRequest[];
}

const PurchaseList: React.FC<PurchaseListProps> = ({ purchases }) => {
  return (
    <div className="purchase-list">
      <h2>采购申请列表</h2>
      <table>
        <thead>
          <tr>
            <th>标题</th>
            <th>申请人</th>
            <th>部门</th>
            <th>总金额</th>
            <th>状态</th>
            <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {purchases.map((purchase) => (
            <tr key={purchase.id}>
              <td>{purchase.title}</td>
              <td>{purchase.requesterName}</td>
              <td>{purchase.department}</td>
              <td>¥{purchase.totalAmount.toFixed(2)}</td>
              <td>{purchase.status}</td>
              <td>{purchase.createTime}</td>
              <td>
                <button onClick={() => console.log('查看详情', purchase.id)}>
                  查看
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PurchaseList; 