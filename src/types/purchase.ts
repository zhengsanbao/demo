// 采购申请的状态类型
export enum PurchaseStatus {
  DRAFT = '草稿',
  PENDING = '待审核',
  APPROVED = '已审核',
  REJECTED = '已拒绝'
}

// 采购项目类型
export interface PurchaseItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  unit: string;
  totalAmount: number;
  description?: string;
}

// 采购申请类型
export interface PurchaseRequest {
  id: string;
  title: string;
  requesterId: string;
  requesterName: string;
  department: string;
  status: PurchaseStatus;
  items: PurchaseItem[];
  totalAmount: number;
  createTime: string;
  updateTime: string;
  approver?: string;
  approveTime?: string;
  remarks?: string;
} 