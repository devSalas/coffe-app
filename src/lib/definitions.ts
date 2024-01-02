export interface CategoryI {
  id_category: number
  name: string
}

export interface MenuI {
  id_menu: number
  name: string
  description: string 
  price: number
  category_id: string
  category: CategoryI
}

export interface UserI {
  id_user: string
  name: string
  email: string
  role: string
}

export interface OrderI {
  id_order: string
  menu: MenuI
  menu_id: string
  user: UserI
  user_id:string
  amount: number
  order_date: string
  total_price: number
  state: string
  payment_method: string
}