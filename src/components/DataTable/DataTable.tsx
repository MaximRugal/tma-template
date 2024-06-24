import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'date', headerName: 'Date', width: 90 },
  { field: 'type', headerName: 'Type', width: 90 },
  { field: 'status', headerName: 'Status', width: 90 },
  {
    field: 'amount',
    headerName: 'Amount',
    type: 'number',
    width: 70,
  },
];

const rows = [
  { id: 1, date: '01-03-24', type: 'Debit Card', status: 'Withdraw', amount: 35 },
  { id: 2, date: '01-03-24', type: 'Debit Card', status: 'Withdraw', amount: 16 },
  { id: 3, date: '01-03-24', type: 'Debit Card', status: 'Withdraw', amount: 100 },
  { id: 4, date: '01-03-24', type: 'Debit Card', status: 'Withdraw', amount: 150 },
  { id: 5, date: '01-03-24', type: 'Debit Card', status: 'Withdraw', amount: 44 },
  { id: 6, date: '01-03-24', type: 'Debit Card', status: 'Withdraw', amount: 36 },
  { id: 7, date: '01-03-24', type: 'Debit Card', status: 'Withdraw', amount: 65 },
  { id: 8, date: '01-03-24', type: 'Debit Card', status: 'Withdraw', amount: 45 },
  { id: 9, date: '01-03-24', type: 'Debit Card', status: 'Withdraw', amount: 42 },
  { id: 10, date: '01-03-24', type: 'Debit Card', status: 'Withdraw', amount: 35 },
  { id: 12, date: '01-03-24', type: 'Debit Card', status: 'Withdraw', amount: 16 },
  { id: 13, date: '01-03-24', type: 'Debit Card', status: 'Withdraw', amount: 100 },
  { id: 14, date: '01-03-24', type: 'Debit Card', status: 'Withdraw', amount: 150 },
  { id: 15, date: '01-03-24', type: 'Debit Card', status: 'Withdraw', amount: 44 },
  { id: 16, date: '01-03-24', type: 'Debit Card', status: 'Withdraw', amount: 36 },
  { id: 17, date: '01-03-24', type: 'Debit Card', status: 'Withdraw', amount: 65 },
  { id: 18, date: '01-03-24', type: 'Debit Card', status: 'Withdraw', amount: 45 },
  { id: 19, date: '01-03-24', type: 'Debit Card', status: 'Withdraw', amount: 42 },
];

export default function DataTable() {
  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        // disableColumnFilter={true}
        disableColumnMenu={true}
        pageSizeOptions={[10, 20]}
        checkboxSelection
      />
    </div>
  );
}
