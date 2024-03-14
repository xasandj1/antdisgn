import React from 'react'
import { Link } from 'react-router-dom'
import { UseModal } from '../hook/UseModal'
import { Modal } from '../components/Ul/Modal'
import { Button, Checkbox, Form, Input } from 'antd';
import { loadState, saveState } from "../config/storage"
const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

export const Header = () => {
    const { close, isOpen, open } = UseModal()
    const user = loadState('user')

    return (
        <header className='my-3'>
            <div className="container flex items-center justify-between">
                <Link to={"/"} className='font-bold text-xl'>Logo</Link>
                <Link to={"/user"} className='font-bold text-xl'>User</Link>
                <button onClick={open} className='font-bold text-xl p-2 bg-blue-700 text-white rounded'>Enter</button>
                <Modal isOpen={isOpen} close={close}>
                    {!user && <Form
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        style={{
                            maxWidth: 600,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="dashed" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>}
                </Modal>
            </div>
        </header>
    )
}
