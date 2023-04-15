import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TablePagination,
//   TableRow,
// } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsersAdmin, getUsersAdmin } from "../Slices/usersSlice";
import { NavLink, useNavigate } from "react-router-dom/dist";
import { EditOutlined, CalendarOutlined, DeleteOutlined } from "@ant-design/icons";
import { Fragment } from "react";
import { Table } from 'antd';



export default function Content() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.usersAdmin)
  console.log(userInfo)

  useEffect(() => {
    dispatch(getUsersAdmin())
  }, [])

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      sorter: (a, b) => a.id - b.id,
      sortDirections: ['descend', 'ascend'],
      width: '10%'
      // sortOrder:'descend'
    },
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      render: (text, users, index) => {
        return <Fragment>
          <img src={users.avatar} alt={users.name} width={60} height={60} onError={(e) => { e.target.onError = null; e.target.src = `https://picsum.photos/id/${index}/50/50` }} />
        </Fragment>
      },
      width: '15%'
      // sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      sorter: (a, b) => {
        let emailA = a.email.toLowerCase().trim();
        let emailB = b.email.toLowerCase().trim();
        if (emailA > emailB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ['descend', 'ascend'],
      width: '25%'
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      render: (text, users) => {
        return <Fragment>
          {users.phone.length > 50 ? users.phone.substr(0, 50) + ' ...' : users.phone}
        </Fragment>
      },
      sortDirections: ['descend', 'ascend'],
      width: '20%'
    },
    {
      title: 'Role',
      dataIndex: 'role',
      // sorter: (a, b) => {
      //     let roleA = a.role.toLowerCase().trim();
      //     let roleB = b.role.toLowerCase().trim();
      //     if(roleA > roleB) {
      //         return 1;
      //     }
      //     return -1;
      // },
      render: (text, users) => {
        return <Fragment>
          {users.role.length > 50 ? users.role.substr(0, 50) + ' ...' : users.role}
        </Fragment>
      },
      sortDirections: ['descend', 'ascend'],
      width: '15%'
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (text, users) => {
        return <Fragment>
          <NavLink key={1} className=" mr-2  text-2xl" to={`/editusers/${users.id}`}><EditOutlined style={{ color: 'blue' }} /> </NavLink>

          <span style={{ cursor: 'pointer' }} key={2} className="text-2xl"
            onClick={() => {
              //Gọi action xoá
              if (window.confirm('Bạn có chắc muốn xoá tài khoản ' + users.email)) {
                //Gọi action
                dispatch(deleteUsersAdmin(users.id));
              }

            }}><DeleteOutlined style={{ color: 'red' }} /> </span>

        </Fragment>
      },
      sortDirections: ['descend', 'ascend'],
      width: '25%'
    },
  ];

  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }

  return (
    <Paper sx={{ maxWidth: 1400, margin: "auto", overflow: "hidden" }}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
      >
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <SearchIcon color="inherit" sx={{ display: "block" }} />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                placeholder="Search by email address, phone number, or user UID"
                InputProps={{
                  disableUnderline: true,
                  sx: { fontSize: "default" },
                }}
                variant="standard"
              />
            </Grid>
            <Grid item>
              <Button onClick={() => {
                navigate('/addusers')
              }} variant="contained" sx={{ mr: 1 }}>
                Add user
              </Button>
              <Tooltip title="Reload">
                <IconButton>
                  <RefreshIcon color="inherit" sx={{ display: "block" }} />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>

        {/* Table  */}

        <Table columns={columns} dataSource={userInfo} onChange={onChange} rowKey={"id"} />

      </Paper>
    </Paper>
  );
}


