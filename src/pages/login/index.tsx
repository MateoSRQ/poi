import {useEffect, useState} from 'react'
import style from './index.module.css'

import {Button, Drawer, Form, Input} from 'antd';
import { useNavigate } from "react-router-dom";
import 'antd/dist/antd.css'
import {useStore} from '../../store'


export default function Component() {
    const [form] = Form.useForm();
    let username = useStore(state => state.username)
    let route    = useStore(state => state.route)
    let navigate = useNavigate();
    const login = useStore(state => state.login);


    console.log(username)

    useEffect(() => {
        console.log('useEffect')
        if (username && route) {
            navigate("../" + route, { replace: true });
        }

    },[username])


    const handleFinish = (e: any) => {
        console.log('handleFinish');
        login(e.username, e.password);
        navigate("/", { replace: true });
    }

    return (
        <div className={style.component}>
            <div className={style.container}>
                <img src="assets/logo.png" style={{width: '50%'}}/>
                <div className={style.title}>
                    Plan Operativo Institucional
                </div>
                <Form
                    layout='vertical'
                    form={form}
                    onFinish={handleFinish}
                >
                    <Form.Item label="Usuario" name="username" rules={[{ required: true }]}>
                        <Input placeholder="" />
                    </Form.Item>
                    <Form.Item label="Contraseña" name="password">
                        <Input.Password placeholder="" />
                    </Form.Item>
                    {/*<Form.Item>*/}
                    {/*    <div style={{textAlign: 'center', 'fontSize': '10px', lineHeight: '10px' }}>*/}
                    {/*        <p>admin / admin</p>*/}
                    {/*        <p>adminTI / adminTI</p>*/}
                    {/*        <p>loadTI / loadTI</p>*/}
                    {/*        <p>editTI / editTI</p>*/}
                    {/*    </div>*/}
                    {/*</Form.Item>*/}
                    <Form.Item >
                        <Button type="primary" htmlType="submit" block>Ingresar</Button>
                    </Form.Item>

                </Form>
            </div>
        </div>
    )
}

