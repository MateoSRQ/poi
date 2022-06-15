import { useState } from 'react'
import logo from './logo.svg'
import style from './index.module.css'

import Table from '../../components/table'

import 'antd/dist/antd.css'


function Component() {
return (
    <div className={style.component}>
        <div className={style.container}>
            <Table />
        </div>
    </div>
    )
}

export default Component
