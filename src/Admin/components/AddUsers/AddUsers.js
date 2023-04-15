import React, { useState } from 'react';
import {
  Form,
  Input,
  Radio,
} from 'antd';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import _ from 'lodash';
import { useNavigate } from 'react-router-dom/dist';
import { addUsersAdmin } from '../../Slices/usersSlice';

const AddUsers = () => {
  const [componentSize, setComponentSize] = useState('default');
  const [imgSrc, setImgSrc] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      id: '',
      email: '',
      phone: '',
      role: '',
      avatar: {},

    },
    onSubmit: (values) => {
      console.log('values', values);
      //Tạo đối tượng formdata => Đưa giá trị values từ formik vào formdata
      let formData = new FormData();
      for (let key in values) {
        if (key !== 'avatar') {
          formData.append(key, values[key]);
        } else {
          formData.append('File', values.avatar, values.avatar.name);
        }
      }
      //Gọi api gửi các giá trị formdata về backend xử lý
      dispatch(addUsersAdmin(formData, navigate));

    }
  })

  const handleChangeFile = (e) => {
    //Lấy file ra từ e
    let file = e.target.files[0];
    if (file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/gif' || file.type === 'image/png') {
      //Tạo đối tượng để đọc file
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        // console.log(e.target.result);
        setImgSrc(e.target.result);//Hình base 64

      }
      //Đem dữ liệu file lưu vào formik
      formik.setFieldValue('avatar', file);
    }
  }


  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <div>
      <Form
        onSubmit={formik.handleSubmit}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <h3>Add Users</h3>
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Id">
          <Input name="id" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Email">
          <Input name="email" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Phone number">
          <Input name="phone" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Role">
          <Input name="role" onChange={formik.handleChange} />
        </Form.Item>

        <Form.Item label="Avatar">
          <input type="file" onChange={handleChangeFile} accept="image/png, image/jpeg,image/gif,image/png" />
          {/* accept để nhận định dạng file */}
          <br />
          <img style={{ width: 150, height: 150 }} src={imgSrc} alt="..." />
        </Form.Item>
        
        <Form.Item label="Tác vụ">
          <button type="submit" className="bg-blue-500 text-white p-2">Add</button>
        </Form.Item>
      </Form>
    </div>
  );
};



export default AddUsers;