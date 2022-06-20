import {useEffect, useState} from 'react'
import style from './index.module.css'

import {Button, Drawer, Form, Input} from 'antd';
import { useNavigate } from "react-router-dom";
import 'antd/dist/antd.css'

export default function Component() {
    const [form] = Form.useForm();
    let navigate = useNavigate();

    const handleFinish = (e: any) => {
        if (e.username == 'admin') {
            navigate("../app", { replace: true });
        }
        else if (e.username == 'admin1') {
            navigate("../app1", { replace: true });
        }
        else if (e.username == 'admin2') {
            navigate("../app2", { replace: true });
        }
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
                    <Form.Item label="Usuario" name="username">
                        <Input placeholder="" />
                    </Form.Item>
                    <Form.Item label="Contraseña" name="password">
                        <Input.Password placeholder="" />
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary" htmlType="submit" block>Ingresar</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

