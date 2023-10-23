import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import TableRow from '@material-ui/core/TableRow';
import CmtDropdownMenu from 'src/@coremat/CmtDropdownMenu';
import CmtAvatar from 'src/@coremat/CmtAvatar';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import IntlMessages from 'src/@jumbo/utils/IntlMessages';
import { Delete, Edit, MoreHoriz, Visibility } from '@material-ui/icons';
// import { timeFromNow } from '../../../../@jumbo/utils/dateHelper';
// import { Block, CheckCircleOutline, Delete, Edit, Mail, MoreHoriz, Visibility } from '@material-ui/icons';
// import { useDispatch } from 'react-redux';
// import { sentMailToUser, updateUserStatus } from '../../../../redux/actions/Users';

const useStyles = makeStyles(theme => ({
  titleRoot: {
    marginBottom: 2,
    fontSize: 14,
    letterSpacing: 0.25,
    color: theme.palette.common.dark,
  },
}));

const getUserActions = user => {
  const actions = [
    {
      action: 'view',
      label: <IntlMessages id="users.appModule.viewUser" />,
      icon: <Visibility />,
    },
    {
      action: 'edit',
      label: <IntlMessages id="users.appModule.editUser" />,
      icon: <Edit />,
    },
    {
      action: 'roles',
      label: <IntlMessages id="users.roles.label.title" />,
      icon: <Edit />,
    },
    // { action: 'email', label: 'Email', icon: <Mail /> },
  ];

  // if (user.status === 'active') {
  //   actions.push({ action: 'suspend', label: 'Suspend', icon: <Block /> });
  // } else {
  //   actions.push({
  //     action: 'activate',
  //     label: 'Reactivate',
  //     icon: <CheckCircleOutline />,
  //   });
  // }

  actions.push({
    action: 'delete',
    label: <IntlMessages id="users.appModule.deleteUser" />,
    icon: <Delete />,
  });
  return actions;
};

const UserListRow = ({
  row,
  isSelected,
  onRowClick,
  onUserEdit,
  onUserDelete,
  onUserView,
  onUserRoles,
  onUserPurchaseAreas,
  onUserBusinessUnits,
}) => {
  const classes = useStyles();
  // const dispatch = useDispatch();

  const onUserMenuClick = menu => {
    if (menu.action === 'view') {
      onUserView(row);
    } else if (menu.action === 'edit') {
      onUserEdit(row);
    } else if (menu.action === 'roles') {
      //console.log(menu.action);
      onUserRoles(row);
    } else if (menu.action === 'delete') {
      /*else if (menu.action === 'email') {
      dispatch(sentMailToUser());
    } else if (menu.action === 'suspend') {
      dispatch(updateUserStatus({ id: row.userId, status: 'suspended' }));
    } else if (menu.action === 'activate') {
      dispatch(updateUserStatus({ id: row.userId, status: 'active' }));
    } */ onUserDelete(
        row,
      );
    }
  };

  const labelId = `enhanced-table-checkbox-${row.userId}`;
  const isItemSelected = isSelected(row.userId);
  const userActions = getUserActions(row);

  return (
    <TableRow
      hover
      onClick={event => onRowClick(event, row.userId)}
      role="checkbox"
      aria-checked={isItemSelected}
      tabIndex={-1}
      key={row.userId}
      selected={isItemSelected}>
      <TableCell padding="checkbox">
        <Checkbox checked={isItemSelected} inputProps={{ 'aria-labelledby': labelId }} />
      </TableCell>
      <TableCell component="th" id={labelId} scope="row" padding="none">
        <Box display="flex" alignItems="center">
          <Box mr={{ xs: 4, md: 5 }}>
            <CmtAvatar size={40} src={row.profile_pic} alt={row.userName} />
          </Box>
          <div>
            <Typography className={classes.titleRoot} component="div" variant="h4">
              {row.userDescription}
            </Typography>
          </div>
        </Box>
      </TableCell>
      <TableCell>{row.userRut}</TableCell>
      <TableCell>{row.userName}</TableCell>
      <TableCell>{row.userEmail}</TableCell>
      <TableCell>
        {/* {row.status === 'suspended' ? `Suspended by ${row.suspendedBy} (${timeFromNow(row.suspendedAt)})` : row.status} */}
        {row.userStatus === 'S' ? `Activo` : 'Inactivo'}
      </TableCell>
      {/* <TableCell>{timeFromNow(row.lastLoginAt)}</TableCell> */}
      {/* <TableCell align="right">{row.emailUsage} GB</TableCell> */}
      <TableCell align="center" onClick={event => event.stopPropagation()}>
        <CmtDropdownMenu items={userActions} onItemClick={onUserMenuClick} TriggerComponent={<MoreHoriz />} />
      </TableCell>
    </TableRow>
  );
};

export default React.memo(UserListRow);
