import * as React from 'react';
import { useState, useEffect, useCallback, Fragment } from 'react';
import axios from 'axios';

import { styled, alpha } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SearchIcon from '@mui/icons-material/Search';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import InputBase from '@mui/material/InputBase';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AppToast from '../../../myTool/AppToast';

import {
  getAllServiceAPI,
  //  updateServiceByIDAPI,
  deleteServiceByIDAPI,
} from '../../../services/index';

//import FormDialog from "../../component/Admin/FormCreditClassInfor";
//import AppToast from "../../myTool/AppToast";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha('#C7D9FD', 0.15),
  '&:hover': {
    backgroundColor: alpha('#C7D9FD', 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#C7D9FD',
    color: theme.palette.common.black,
    fontWeight: 'bold',
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

export default function ServiceInfor() {
  const [listService, setListService] = useState([]);

  const [open, setOpen] = React.useState(false);
  const handleClose = useCallback(() => {
    setOpen(false);
    resetInput();
    loadService();
  }, [open]);
  const [openToast, setOpenToast] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const [timelineIdFocus, setTimelineIdFocus] = useState(0);
  const [serviceIdFocus, setServiceIdFocus] = useState(0);
  const [creditClassUpdate, setCreditClassUpdate] = useState({
    startTime: '',
    endTime: '',
    schoolYear: '',
    status: 1,
    joinedPassword: '',
    departmentId: 0,
    subjectId: 0,
    teacherId: [],
  });
  const [timeline, setTimeline] = useState({
    creditClassId: 0,
    dayOfWeek: 0,
    startLesson: 0,
    endLesson: 0,
    roomId: 0,
  });

  const resetInput = () => {
    setCreditClassUpdate({
      startTime: '',
      endTime: '',
      schoolYear: '',
      status: 1,
      joinedPassword: '',
      departmentId: 0,
      subjectId: 0,
      teacherId: [],
    });
    setTimeline({
      creditClassId: 0,
      dayOfWeek: 0,
      startLesson: 0,
      endLesson: 0,
      roomId: 0,
    });
  };

  async function loadService() {
    const res = await getAllServiceAPI();
    if (res?.status === 200) {
      console.log(res?.data);
      setListService(res?.data);
    }
  }

  async function updateService(id: any) {
    //const res = await updateServiceByIDAPI(id);
    //if (res?.data === 200) {
    //  console.log(res?.data);
    //}
  }

  async function deleteServiceById(id: any) {
    const res = await deleteServiceByIDAPI(id);
    if (res?.status === 200) {
      setOpenToast(true);
      loadService();
    } else {
      console.log('Da xay ra loi khi delete');
    }
  }

  useEffect(() => {
    loadService();
  }, []);

  const getTimeLine = (id: any) => {
    const token = localStorage.getItem('accessToken');
    var config = {
      method: 'get',
      url:
        axios.defaults.baseURL +
        '/api/admin/creditclass/get-credit-class-time-line?creditclass-id=' +
        id,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios(config)
      .then(function (response) {
        // console.log(response.data);
        if (response.status === 200) {
          // let { timeline, timelineId, ...rest }=response.data
          setTimeline(response.data.timelineDTORequest);
          setTimelineIdFocus(response.data.timelineId);
          setOpen(true);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  function handleEdit(id: any) {
    //updateProduct(id);
    //var config = {
    //  method: 'put',
    //  url: axios.defaults.baseURL + '/api/product/update/' + id,
    //};
    //axios(config)
    //  .then(function (response) {
    //    console.log(response);
    //if (response.status === 200) {
    //  let { creditClassId, ...creditClassInfor } = response.data;
    //  setCreditClassIdFocus(creditClassId);
    //  setCreditClassUpdate(creditClassInfor);
    //  getTimeLine(id);
    //}
    //  })
    //  .catch(function (error) {
    //    console.log(error);
    //  });
  }

  const handleDelete = (id: any) => {
    setServiceIdFocus(id);
    setOpenDetail(true);
  };
  const handleCloseConfirm = () => {
    setOpenDetail(false);
  };
  const handleConfirm = () => {
    deleteServiceById(serviceIdFocus);
    setOpenDetail(false);
  };

  return (
    <Fragment>
      <div
        style={{
          display: 'flex',
          margin: '10px 0',
          justifyContent: 'flex-end',
        }}
      >
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <Button
          color="success"
          variant="contained"
          onClick={handleClickOpen}
          endIcon={<AddIcon />}
        >
          Thêm
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Mã DV</StyledTableCell>
              <StyledTableCell align="center">Tên</StyledTableCell>
              <StyledTableCell align="center">Giá</StyledTableCell>
              <StyledTableCell align="center">Loại DV</StyledTableCell>
              <StyledTableCell align="center">Chức năng</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listService?.map((Service: any) => (
              <StyledTableRow key={Service.ServiceId}>
                <StyledTableCell component="th" scope="row" align="center">
                  {Service.serviceId}
                </StyledTableCell>
                <StyledTableCell align="center">{Service.name}</StyledTableCell>
                <StyledTableCell align="center">
                  {Service.price}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {Service.serviceTypeId?.serviceTypeName}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <IconButton
                    aria-label="edit"
                    size="large"
                    color="secondary"
                    onClick={() => handleEdit(Service?.ServiceId)}
                  >
                    <EditOutlinedIcon fontSize="inherit" />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    size="large"
                    color="error"
                    onClick={() => handleEdit(handleDelete(Service?.serviceId))}
                  >
                    <DeleteIcon fontSize="inherit" />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/*<Stack spacing={2} sx={{ margin: '20px' }}>
        <Pagination
          count={pageSum}
          variant="outlined"
          color="primary"
          onChange={handleChangePage}
        />
      </Stack>*/}
      {/*<FormDialog
        isOpen={open}
        handleClose={handleClose}
        creditClass={creditClassUpdate}
        timeline={timeline}
        timelineId={timelineIdFocus}
      />*/}
      <AppToast
        content={'Xóa sản phẩm có mã ' + serviceIdFocus + ' thành công'}
        type={0}
        isOpen={openToast}
        callback={() => {
          setOpenToast(false);
        }}
      />
      <Dialog
        open={openDetail}
        onClose={handleCloseConfirm}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Thông báo từ hệ thống'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Bạn có muốn xóa dịch vụ có mã {serviceIdFocus} không
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleCloseConfirm}>Cancel</Button>
          <Button onClick={handleConfirm}>Ok</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
