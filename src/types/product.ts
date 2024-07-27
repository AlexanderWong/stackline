export interface ProductData {
    id: string;
    title: string;
    image: string;
    subtitle: string;
    tags: string[];
    sales: SalesData[];
}
  
export interface SalesData {
    weekEnding: string;
    retailSales: number;
    wholesaleSales: number;
    unitsSold: number;
    retailerMargin: number;
}
  