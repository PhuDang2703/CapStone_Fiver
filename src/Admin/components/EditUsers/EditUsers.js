import { PlusOutlined } from '@ant-design/icons';
import {
    Button,
    Checkbox,
    Form,
    Input,
    InputNumber,
    Select,
    Upload,
} from 'antd';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom/dist';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUsersAdminById } from '../../Slices/usersSlice';


const EditUsers = () => {
    const [componentDisabled, setComponentDisabled] = useState(false);
    const { usersInfoForUpdate } = useSelector(state => state.usersAdmin)
    console.log(usersInfoForUpdate);

    const [imgSrc, setImgSrc] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        //Lấy thông tin param từ url
        dispatch(getUsersAdminById(params.id))
    }, [])

    const formik = useFormik({
        // enableReinitialize: true,
        initialValues: {
            id: usersInfoForUpdate.id,
            email: usersInfoForUpdate.email,
            phone: usersInfoForUpdate.phone,
            role: usersInfoForUpdate.role,
            avatar: null,

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
            //   dispatch(addUsersAdmin(formData, navigate));

        }
    })

    const handleChangeFile = async (e) => {
        //Lấy file ra từ e
        let file = e.target.files[0];
        if (file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/gif' || file.type === 'image/png') {
            //Đem dữ liệu file lưu vào formik (await để đảm bảo dữ liệu hình ảnh sử lý update xong mới load ra tránh bất đồng bộ dưới load trc mà trên chưa load xong)
            await formik.setFieldValue('hinhAnh', file);
            //Tạo đối tượng để đọc file
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                // console.log(e.target.result);
                setImgSrc(e.target.result);//Hình base 64

            }
            
        }
    }

    return (
        <>
            <h3>Edit User</h3>
            <Checkbox
                checked={componentDisabled}
                onChange={(e) => setComponentDisabled(e.target.checked)}
            >
                Form disabled
            </Checkbox>
            <Form
                onSubmit={formik.handleSubmit}
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                disabled={componentDisabled}
                style={{
                    maxWidth: 600,
                }}
            >

                <Form.Item style={{ marginTop: 20 }} label="Id">
                    <InputNumber name="id" onChange={formik.handleChange} />
                </Form.Item>

                <Form.Item label="Email">
                    <Input name="email" onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Phone Number">
                    <Input name="phone" onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Role">
                    <Select name="role" onChange={formik.handleChange}>
                        <Select.Option value="ADMIN">ADMIN</Select.Option>
                        <Select.Option value="USER">USER</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item label="Upload" valuePropName="fileList">
                    <Upload onChange={handleChangeFile} accept="image/png, image/jpeg,image/gif,image/png" action="/upload.do" listType="picture-card">
                        <div>
                            <PlusOutlined />
                            <div
                                style={{
                                    marginTop: 8,
                                }}
                            >
                                Upload Avatar
                            </div>
                        </div>
                    </Upload>
                </Form.Item>

                <Form.Item label="Button">
                    <Button type="submit" className="bg-blue-500 text-white p-2">Button</Button>
                </Form.Item>
            </Form>
        </>
    );
};
export default () => <EditUsers />;