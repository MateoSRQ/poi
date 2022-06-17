import { useState } from 'react'
import logo from './logo.svg'
import style from './index.module.css'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';

import Table from '../../components/table'
import { Button, Drawer } from 'antd';

import 'antd/dist/antd.css'
const { Meta } = Card;

function Component() {
const [visible, setVisible] = useState(false);

const showDrawer = () => {
    setVisible(true);
}

const onClose = () => {
    setVisible(false);
}


return (
    <div className={style.component}>
        <div className={style.title}>
            Plan Operativo Institucional
        </div>
        <div className={style.container}>
            <Table handleCellClick={showDrawer} />
            <Drawer  placement="right" onClose={onClose} visible={visible} closeIcon={null}>
                <Card
                    style={{ width: 330, marginBottom: '20px' }}
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                    actions={[
                        <SettingOutlined key="setting" />,
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
                    ]}
                >
                    <Meta
                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                        title="Documento 1"
                        description="Este es un documento"
                    />
                </Card>

                <Card
                    style={{ width: 330, marginBottom: '20px' }}
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                    actions={[
                        <SettingOutlined key="setting" />,
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
                    ]}
                >
                    <Meta
                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                        title="Documento 2"
                        description="Este es un documento"
                    />
                </Card>

                <Card
                    style={{ width: 330, marginBottom: '20px' }}
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                    actions={[
                        <SettingOutlined key="setting" />,
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
                    ]}
                >
                    <Meta
                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                        title="Documento 3"
                        description="Este es un documento"
                    />
                </Card>
            </Drawer>
        </div>
    </div>
    )
}

export default Component
