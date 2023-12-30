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