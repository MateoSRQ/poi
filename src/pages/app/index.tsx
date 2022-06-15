import { useState } from 'react'
import logo from './logo.svg'
import style from './index.module.css'

import Table from '../../components/table'
import { Button, Drawer } from 'antd';

import 'antd/dist/antd.css'


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
        <div className={style.container}>
            <Table handleCellClick={showDrawer} />
            <Drawer title="Basic Drawer" placement="right" onClose={onClose} visible={visible}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </div>
    </div>
    )
}

export default Component
