export interface Producto {
  id?: number;
  nombre: string;
  description: string;
  imagen?: any;
  precio: number;
}

export interface ItemCart {
  idProducto: number;
  nombre: string;
  imagen: any;
  precio: number;
  cantidad: number;
}
