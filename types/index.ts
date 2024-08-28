// types.ts
export interface ExchangeRate {
  nombre: string;
  compra: number;
  venta: number;
  fecha: string;
  variacion: number;
}

export type ExchangeRates = ExchangeRate[];
