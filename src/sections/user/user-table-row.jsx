
import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import Label from 'src/components/label';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function UserTableRow({
  selected,
  name,
  avatarUrl,
  company,
  role,
  points,
  isVerified,
  status,
  handleClick,
  teamname,
  globalRank
}) {
  

  return (
   
     <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
    <TableCell padding="checkbox">
      <Checkbox disableRipple checked={selected} onChange={handleClick} />
    </TableCell>

    <TableCell>
      <Label>{globalRank}</Label>
    </TableCell>

    <TableCell component="th" scope="row" padding="none">
      <Stack direction="row" alignItems="center" spacing={2}>
        <Avatar alt={name} src={avatarUrl} />
        <Typography variant="subtitle2" noWrap>
          {name}
        </Typography>
      </Stack>
    </TableCell>

    <TableCell>{points}</TableCell>

    <TableCell>{role}</TableCell>

    <TableCell>{teamname}</TableCell>
    <TableCell align="right">
          <IconButton>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
  </TableRow>

   
  
  );
}

UserTableRow.propTypes = {
  avatarUrl: PropTypes.any,
  company: PropTypes.any,
  handleClick: PropTypes.func,
  isVerified: PropTypes.any,
  name: PropTypes.any,
  role: PropTypes.any,
  selected: PropTypes.any,
  status: PropTypes.string,
  points: PropTypes.number,
  teamname: PropTypes.string,
  globalRank: PropTypes.any,
};
