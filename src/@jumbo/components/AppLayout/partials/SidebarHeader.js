import React, { useContext } from 'react';
import { MenuItem, MenuList, Paper, Popover, Typography } from '@material-ui/core';
import CmtAvatar from 'src/@coremat/CmtAvatar';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { useDispatch, useSelector } from 'react-redux';
import { AuthMethods } from 'src/services/auth';
import { CurrentAuthMethod } from 'src/@jumbo/constants/AppConstants';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
// import PersonIcon from '@material-ui/icons/Person';
// import SettingsIcon from '@material-ui/icons/Settings';
import SidebarThemeContext from 'src/@coremat/CmtLayouts/SidebarThemeContext/SidebarThemeContext';
import IntlMessages from 'src/@jumbo/utils/IntlMessages';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '30px 16px 12px 16px',
    borderBottom: props => `solid 1px ${props.sidebarTheme.borderColor}`,
  },
  userInfo: {
    paddingTop: 24,
    transition: 'all 0.1s ease',
    height: 75,
    opacity: 1,
    '.Cmt-miniLayout .Cmt-sidebar-content:not(:hover) &': {
      height: 0,
      paddingTop: 0,
      opacity: 0,
      transition: 'all 0.3s ease',
    },
  },
  userTitle: {
    color: props => props.sidebarTheme.textDarkColor,
    marginBottom: 8,
  },
  userSubTitle: {
    fontSize: 14,
    fontWeight: theme.typography.fontWeightBold,
    letterSpacing: 0.25,
  },
}));

const SidebarHeader = () => {
  const { authUser } = useSelector(({ auth }) => auth);
  const { sidebarTheme } = useContext(SidebarThemeContext);
  const classes = useStyles({ sidebarTheme });
  const dispatch = useDispatch();
  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const onLogoutClick = () => {
    handlePopoverClose();
    dispatch(AuthMethods[CurrentAuthMethod].onLogout());
    history.push('/signin');
  };

  return (
    <div className={classes.root}>
      <CmtAvatar
        src={
          'https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1650058697~hmac=95a09f2ce9c1a8e46dd0c4a777756f5f'
        }
        alt="User Avatar"
      />
      <div className={classes.userInfo} onClick={handlePopoverOpen}>
        <div
          className="pointer"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}>
          <div className="mr-2">
            <Typography className={classes.userTitle} component="h3" variant="h6">
              {authUser.name}
            </Typography>
            <Typography className={classes.userSubTitle}>{authUser.email}</Typography>
          </div>
          <ArrowDropDownIcon />
        </div>
      </div>

      {open && (
        <Popover
          open={open}
          anchorEl={anchorEl}
          container={anchorEl}
          onClose={handlePopoverClose}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'right',
          }}>
          <Paper elevation={8}>
            <MenuList>
              {/* <MenuItem onClick={handlePopoverClose}>
                <PersonIcon />
                <div className="ml-2">Profile</div>
              </MenuItem>
              <MenuItem onClick={handlePopoverClose}>
                <SettingsIcon />
                <div className="ml-2">Settings</div>
              </MenuItem> */}
              <MenuItem onClick={onLogoutClick}>
                <ExitToAppIcon />
                <div className="ml-2">{<IntlMessages id="popup.logout" />}</div>
              </MenuItem>
            </MenuList>
          </Paper>
        </Popover>
      )}
    </div>
  );
};

export default SidebarHeader;