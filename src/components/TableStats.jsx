import React from 'react';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import '../styles/Card.css';
import '../styles/Layout.css';

const TableStats = () => {

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0),
    createData('Ice cream sandwich', 237, 9.0),
    createData('Eclair', 262, 16.0),
    createData('Eclair', 262, 16.0),
    createData('Eclair', 262, 16.0),
    createData('Eclair', 262, 16.0),
    createData('Eclair', 262, 16.0),
  ];
  
  return (
    <Box
      className="glass-box"
      sx={{
        width: '100%',
        overflow: 'hidden',
        backgroundColor: 'transparent',
      }}
    >
      <TableContainer sx={{backgroundColor: '#2D325A', maxHeight: 300}} >
      <Table sx={{backgroundColor: '#2D325A'}} stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow className="table-header-row">
            <TableCell className="table-header-cell-row">Rank</TableCell>
            <TableCell className="table-header-cell-row">User</TableCell>
            <TableCell className="table-header-cell-row">Level</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0, m: 0.5 } }}
            >
              <TableCell className="table-cell-row" component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell className="table-cell-row">{row.calories}</TableCell>
              <TableCell className="table-cell-row">{row.fat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
  );
}

export default TableStats;

