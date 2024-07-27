import React, { useState } from 'react';
import { SalesData } from '../types/product';
import { 
    Card, 
    CardContent, 
    Typography, 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow, 
    Paper, 
    TablePagination } from '@mui/material';

interface SalesTableProps {
  sales: SalesData[];
}

const SalesTable: React.FC<SalesTableProps> = ({ sales }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const displayedSales = sales.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Sales Data</Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Week Ending</TableCell>
                <TableCell>Retail Sales</TableCell>
                <TableCell>Wholesale Sales</TableCell>
                <TableCell>Units Sold</TableCell>
                <TableCell>Retailer Margin</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {displayedSales.map((sale, index) => (
                <TableRow key={index}>
                  <TableCell>{sale.weekEnding}</TableCell>
                  <TableCell>{sale.retailSales.toLocaleString()}</TableCell>
                  <TableCell>{sale.wholesaleSales.toLocaleString()}</TableCell>
                  <TableCell>{sale.unitsSold.toLocaleString()}</TableCell>
                  <TableCell>{sale.retailerMargin.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[3, 5, 10, 25]}
          component="div"
          count={sales.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </CardContent>
    </Card>
  );
};

export default SalesTable;
