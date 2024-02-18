import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(item, ano, evento, equipamento, localProblema, RIRNCRR) {
  return { item, ano, evento, equipamento, localProblema, RIRNCRR };
}

const rows = [
  createData('1', 159, 6.0, 24, 4.0,1),
  createData('2', 237, 9.0, 37, 4.3,1),
  createData('3', 262, 16.0, 24, 6.0,1),
  createData('4', 305, 3.7, 67, 4.3,1),
  createData('5', 356, 16.0, 49, 3.9,1),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Item</StyledTableCell>
            <StyledTableCell align="right">Ano</StyledTableCell>
            <StyledTableCell align="right">Evento</StyledTableCell>
            <StyledTableCell align="right">Equipamento</StyledTableCell>
            <StyledTableCell align="right">Local do Problema</StyledTableCell>
            <StyledTableCell align="right">RI; RNC; RR</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.item}
              </StyledTableCell>
              <StyledTableCell align="right">{row.ano}</StyledTableCell>
              <StyledTableCell align="right">{row.evento}</StyledTableCell>
              <StyledTableCell align="right">{row.equipamento}</StyledTableCell>
              <StyledTableCell align="right">{row.localProblema}</StyledTableCell>
              <StyledTableCell align="right">{row.RIRNCRR}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
