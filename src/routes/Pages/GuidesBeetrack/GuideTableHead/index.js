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
    id: 'emailCliente',
    numeric: false,
    disablePadding: false,
    label: <IntlMessages id="guides.appModule.emailClienteHeader" />,
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
    id: 'guia',
    numeric: false,
    disablePadding: false,
    label: <IntlMessages id="guides.appModule.guiaHeader" />,
  },
  {
    id: 'gufechaSubidaia',
    numeric: false,
    disablePadding: false,
    label: <IntlMessages id="guides.appModule.fechaSubidaHeader" />,
  },
  {
    id: 'devolucion',
    numeric: false,
    disablePadding: false,
    label: <IntlMessages id="guides.appModule.devolucionHeader" />,
  },
  {
    id: 'patente',
    numeric: false,
    disablePadding: false,
    label: <IntlMessages id="guides.appModule.patenteHeader" />,
  },
  {
    id: 'fono',
    numeric: false,
    disablePadding: false,
    label: <IntlMessages id="guides.appModule.fonoHeader" />,
  },
  {
    id: 'sensible',
    numeric: false,
    disablePadding: false,
    label: <IntlMessages id="guides.appModule.sensibleHeader" />,
  },
  {
    id: 'fechaEntrega',
    numeric: false,
    disablePadding: false,
    label: <IntlMessages id="guides.appModule.fechaEntregaHeader" />,
  },
  {
    id: 'patenteReal',
    numeric: false,
    disablePadding: false,
    label: <IntlMessages id="guides.appModule.patenteRealHeader" />,
  },
  {
    id: 'encargadoPreparacion',
    numeric: false,
    disablePadding: false,
    label: <IntlMessages id="guides.appModule.encargadoPreparacionHeader" />,
  },
  {
    id: 'fechaPreparacion',
    numeric: false,
    disablePadding: false,
    label: <IntlMessages id="guides.appModule.fechaPreparacionHeader" />,
  },
  {
    id: 'encargadoDistribucion',
    numeric: false,
    disablePadding: false,
    label: <IntlMessages id="guides.appModule.encargadoDistribucionHeader" />,
  },
  {
    id: 'fechaEntrada',
    numeric: false,
    disablePadding: false,
    label: <IntlMessages id="guides.appModule.fechaEntradaHeader" />,
  },
  {
    id: 'encargadoDespacho',
    numeric: false,
    disablePadding: false,
    label: <IntlMessages id="guides.appModule.encargadoDespachoHeader" />,
  },
  {
    id: 'fechaDespacho',
    numeric: false,
    disablePadding: false,
    label: <IntlMessages id="guides.appModule.fechaDespachoHeader" />,
  },
  {
    id: 'encargadoEntrega',
    numeric: false,
    disablePadding: false,
    label: <IntlMessages id="guides.appModule.encargadoEntregaHeader" />,
  },
  {
    id: 'estadoEntrega',
    numeric: false,
    disablePadding: false,
    label: <IntlMessages id="guides.appModule.estadoEntregaHeader" />,
  },
  {
    id: 'estado',
    numeric: false,
    disablePadding: false,
    label: <IntlMessages id="guides.appModule.estadoHeader" />,
  },
  {
    id: 'pgi',
    numeric: false,
    disablePadding: false,
    label: <IntlMessages id="guides.appModule.pgiHeader" />,
  },
  {
    id: 'tagClientes',
    numeric: false,
    disablePadding: false,
    label: <IntlMessages id="guides.appModule.tagClientesHeader" />,
  },
  {
    id: 'tagDireccion',
    numeric: false,
    disablePadding: false,
    label: <IntlMessages id="guides.appModule.tagDireccionHeader" />,
  },
  {
    id: 'tagFaena',
    numeric: false,
    disablePadding: false,
    label: <IntlMessages id="guides.appModule.tagFaenaHeader" />,
  },
  {
    id: 'tagObservacionCliente',
    numeric: false,
    disablePadding: false,
    label: <IntlMessages id="guides.appModule.tagObservacionClienteHeader" />,
  },
  {
    id: 'tagPatente',
    numeric: false,
    disablePadding: false,
    label: <IntlMessages id="guides.appModule.tagPatenteHeader" />,
  },
  {
    id: 'tagPgi',
    numeric: false,
    disablePadding: false,
    label: <IntlMessages id="guides.appModule.tagPgiHeader" />,
  },
  {
    id: 'tagTipo',
    numeric: false,
    disablePadding: false,
    label: <IntlMessages id="guides.appModule.tagTipoHeader" />,
  },
  {
    id: 'tagTipoServicio',
    numeric: false,
    disablePadding: false,
    label: <IntlMessages id="guides.appModule.tagTipoServicioHeader" />,
  },
  {
    id: 'tagTotalDo',
    numeric: false,
    disablePadding: false,
    label: <IntlMessages id="guides.appModule.tagTotalDoHeader" />,
  },
  {
    id: 'tagTotalDoPeso',
    numeric: false,
    disablePadding: false,
    label: <IntlMessages id="guides.appModule.tagTotalDoPesoHeader" />,
  },
  {
    id: 'tagWH',
    numeric: false,
    disablePadding: false,
    label: <IntlMessages id="guides.appModule.tagWHHeader" />,
  },
];

function GuideTableHead({ classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort }) {
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

GuideTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default React.memo(GuideTableHead);
