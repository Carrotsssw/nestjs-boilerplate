export interface IOrderItem {
  id: string;
  product_sku_id: string;
  product_sku_name: string;
  product_sku_amount: string;
}

export interface IOrder {
  id: string;
  net: string;
  order_item: Array<IOrderItem>
  status: number;
  create_time: string;
  update_time: string;
}