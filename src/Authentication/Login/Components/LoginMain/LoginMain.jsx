import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Button } from "antd";
import { useSnackbar } from "notistack";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom/dist";
import { loginUser } from "../../../slices/authSlice";
import LoginForm from "../LoginForm/LoginForm";


export default function LoginMain(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { onClose } = props;
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    console.log(values);
    try {
      await dispatch(loginUser(values,navigate))
        .unwrap()
        .then(() => {
          enqueueSnackbar("Login Successfully", {
            variant: "success",
            autoHideDuration: 1500,
          });
          setTimeout(() => {
            onClose();
          }, 1000);
        });
    } catch (error) {
      console.log(error);
      enqueueSnackbar(error.message, {
        variant: "error",
        autoHideDuration: 1500,
      });
    }
  };
  
  return (
    <div>
      <DialogContent>
        <LoginForm onSubmit={handleSubmit} />
      </DialogContent>
      <DialogActions>
      
      </DialogActions>
    </div>
  );
}
