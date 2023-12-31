import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import PropTypes from 'prop-types';
import React from 'react';
import IntlMessages from 'src/@jumbo/utils/IntlMessages';

const headCells = [
  {
    id: 'id',
    numeric: false,
    disablePadding: true,
    label: <IntlMessages id="guides.appModule.idHeader" />,
  },
  {
    id: 'claveUnica',
    numeric: false,
    disablePadding: false,
    label: <IntlMessages id="guides.appModule.claveUnicaHeader" />,
  },
  {
    id: 'guia',
    numeric: false,
    disablePadding: false,
    label: <IntlMessages id="guides.appModule.guiaHeader" />,
  },  
  {
    id: 'nombreCliente',
    numeric: false,
    disablePadding: false,
    label: <IntlMessages id="guides.appModule.nombreClienteHeader" />,
  },
  {
    id: 'rutCliente',
    numeric: false,
    disablePadding: false,
    label: <IntlMessages id="guides.appModule.rutClienteHeader" />,
  },
  {
    id: 'direccion',
    numeric: false,
    disablePadding: false,
    label: <IntlMessages id="guides.appModule.direccionHeader" />,
  },
  {
    id: 'producto',
    numeric: false,
    disablePadding: false,
    label: <IntlMessages id="guides.appModule.productoHeader" />,
  },
  {
    id: 'proveedor',
    numeric: false,
    disablePadding: false,
    label: <IntlMessages id="guides.appModule.proveedorHeader" />,
  },
  {
    id: 'comuna',
    numeric: false,
    disablePadding: false,
    label: <IntlMessages id="guides.appModule.comunaHeader" />,
  },
  {
    id: 'gufechaSubidaia',
    numeric: false,
    disablePadding: false,
    label: <IntlMessages id="guides.appModule.fechaSubidaHeader" />,
  },
  {
    id: 'estado',
    numeric: false,
    disablePadding: false,
    label: <IntlMessages id="guides.appModule.estadoHeader" />,
  },
];

function GuideScanTableHead({ classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort }) {
  const onSortOrderChange = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}>
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={onSortOrderChange(headCell.id)}>
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? (
                    <IntlMessages id="guides.appModule.orderDesc" />
                  ) : (
                    <IntlMessages id="guides.appModule.orderAsc" />
                  )}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell align="center">{<IntlMessages id="guides.appModule.actions" />}</TableCell>
      </TableRow>
    </TableHead>
  );
}

GuideScanTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default React.memo(GuideScanTableHead);
