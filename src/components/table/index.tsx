import { useState } from 'react'
import logo from './logo.svg'
import style from './index.module.css'
import { Table } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import React from 'react';


import 'antd/dist/antd.css'

function Component(props: any) {

    console.log('Table');
    console.log(props.data);

    const cellClick = (e, i) => {
        console.log(e);
        console.log(i);
        props.handleCellClick(e, i)
    }


    const Columns = [
        { id: 'ID', dataIndex: 'id', key: 'id', width: 100, render: (text, record) => { return (<div style={{width: '100px'}}>{text}</div>) }},
        { title: 'Índice', dataIndex: 'indice', key: 'indice', width: 100 },
        { title: 'Nombre', dataIndex: 'nombre', key: 'nombre', width: 500, render: (text, record) => { return (<div style={{width: '1000px'}}>{text}</div>) }},
        { title: 'Responsable', dataIndex: 'responsable', key: 'responsable', width: 500, render: (text, record) => { return (<div style={{width: '500px'}}>{text}</div>) }},
        { title: 'Unidad de Medida', dataIndex: 'um', key: 'um', width: 100, render: (text, record) => { return (<div style={{width: '400px'}}>{text}</div>) }},
        { title: 'Meta Física', dataIndex: 'meta', key: 'meta', width: 100, render: (text, record) => { return (<div style={{width: '50px', textAlign: 'center'}}>{text}</div>) }},
        {
            title: '2022',
            width: 100,
            children: [
                {
                    title: 'T1',
                    width: 100,
                    children: [
                        { title: 'E', dataIndex: 'enero2022', key: 'enero2022', width: 50, render: (text, record) => {
                            console.log('----')
                            console.log(record)
                            let x = (record.xenero2022 == "")?"0":record.xenero2022
                            if (record.enero2022 == "") text = ""
                            else {
                                text = x + "/" + record.enero2022
                            }
                            let color = 'blue'
                            if (x < record.enero2022) color = 'black'


                            return (<div style={{width: '50px', textAlign: 'center', color: color}} onClick={() => { cellClick(record)}}>{text}</div>)
                        }},
                        { title: 'F', dataIndex: 'febrero2022', key: 'febrero2022', width: 50, render: (text, record) => { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                        { title: 'M', dataIndex: 'marzo2022', key: 'marzo2022', width: 50, render: (text, record) => { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                    ]
                },
                {
                    title: 'T2',
                    width: 100,
                    children: [
                        { title: 'A', dataIndex: 'abril2022', key: 'abril2022', width: 50, render: (text, record) => { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                        { title: 'M', dataIndex: 'mayo2022', key: 'mayo2022', width: 50, render: (text, record) => { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                        { title: 'J', dataIndex: 'junio2022', key: 'junio2022', width: 50, render: (text, record) => { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                    ]
                },
                {
                    title: 'T3',
                    width: 100,
                    children: [
                        { title: 'J', dataIndex: 'julio2022', key: 'julio2022', width: 50, render: (text, record) => { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                        { title: 'A', dataIndex: 'agosto2022', key: 'agosto2022', width: 50, render: (text, record) => { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                        { title: 'S', dataIndex: 'setiembre2022', key: 'setiembre2022', width: 50, render: (text, record) => { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                    ]
                },
                {
                    title: 'T4',
                    width: 100,
                    children: [
                        { title: 'O', dataIndex: 'octubre2022', key: 'octubre2022', width: 50, render: (text, record) => { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                        { title: 'N', dataIndex: 'noviembre2022', key: 'noviembre2022', width: 50, render: (text, record) => { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                        { title: 'D', dataIndex: 'diciembre2022', key: 'diciembre2022', width: 50, render: (text, record) => { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                    ]
                },
            ]
        },
        {
            title: '2023',
            width: 100,
            children: [
                {
                    title: 'T1',
                    width: 100,
                    children: [
                        { title: 'E', dataIndex: 'enero2023', key: 'enero2023', width: 50, render: (text, record) => { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                        { title: 'F', dataIndex: 'febrero2023', key: 'febrero2023', width: 50, render: (text, record) => { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                        { title: 'M', dataIndex: 'marzo2023', key: 'marzo2023', width: 50, render: (text, record) => { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                    ]
                },
                {
                    title: 'T2',
                    width: 100,
                    children: [
                        { title: 'A', dataIndex: 'abril2023', key: 'abril2023', width: 50, render: (text, record) => { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                        { title: 'M', dataIndex: 'mayo2023', key: 'mayo2023', width: 50, render: (text, record) => { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                        { title: 'J', dataIndex: 'junio2023', key: 'junio2023', width: 50, render: (text, record) => { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                    ]
                },
                {
                    title: 'T3',
                    width: 100,
                    children: [
                        { title: 'J', dataIndex: 'julio2023', key: 'julio2023', width: 50, render: (text, record) => { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                        { title: 'A', dataIndex: 'agosto2023', key: 'agosto2023', width: 50, render: (text, record) => { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                        { title: 'S', dataIndex: 'setiembre2023', key: 'setiembre2023', width: 50, render: (text, record) => { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                    ]
                },
                {
                    title: 'T4',
                    width: 100,
                    children: [
                        { title: 'O', dataIndex: 'octubre2023', key: 'octubre2023', width: 50, render: (text, record) => { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                        { title: 'N', dataIndex: 'noviembre2023', key: 'noviembre2023', width: 50, render: (text, record) => { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                        { title: 'D', dataIndex: 'diciembre2023', key: 'diciembre2023', width: 50, render: (text, record) => { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                    ]
                },
            ]
        },
        {
            title: '2024',
            width: 100,
            children: [
                {
                    title: 'T1',
                    width: 100,
                    children: [
                        { title: 'E', dataIndex: 'enero2024', key: 'enero2024', width: 50, render: (text, record) => { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                        { title: 'F', dataIndex: 'febrero2024', key: 'febrero2024', width: 50, render: (text, record) => { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                        { title: 'M', dataIndex: 'marzo2024', key: 'marzo2024', width: 50, render: (text, record) => { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                    ]
                },
                {
                    title: 'T2',
                    width: 100,
                    children: [
                        { title: 'A', dataIndex: 'abril2024', key: 'abril2024', width: 50, render: (text, record) => { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                        { title: 'M', dataIndex: 'mayo2024', key: 'mayo2024', width: 50, render: (text, record) => { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                        { title: 'J', dataIndex: 'junio2024', key: 'junio2024', width: 50, render: (text, record) => { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                    ]
                },
                {
                    title: 'T3',
                    width: 100,
                    children: [
                        { title: 'J', dataIndex: 'julio2024', key: 'julio2024', width: 50, render: (text, record) => { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                        { title: 'A', dataIndex: 'agosto2024', key: 'agosto2024', width: 50, render: (text, record) => { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                        { title: 'S', dataIndex: 'setiembre2024', key: 'setiembre2024', width: 50, render: (text, record) => { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                    ]
                },
                {
                    title: 'T4',
                    width: 100,
                    children: [
                        { title: 'O', dataIndex: 'octubre2024', key: 'octubre2024', width: 50, render: (text, record) => { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                        { title: 'N', dataIndex: 'noviembre2024', key: 'noviembre2024', width: 50, render: (text, record) => { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                        { title: 'D', dataIndex: 'diciembre2024', key: 'diciembre2024', width: 50, render: (text, record) => { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                    ]
                },
            ]
        },
        {
            title: 'Presupuesto',
            width: 100,
            children: [
                {title: '2022', dataIndex: 'ppto2022', key: 'ppto2022', width: 150, render: (text, record) => { return (<div style={{width: '150px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                {title: '2023', dataIndex: 'ppto2023', key: 'ppto2023', width: 150, render: (text, record) => { return (<div style={{width: '150px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                {title: '2024', dataIndex: 'ppto2024', key: 'ppto2024', width: 150, render: (text, record) => { return (<div style={{width: '150px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
            ]
        }
    ];

    const expandedRowRender = () => {
        return <Table />
    }


    return (

    <div className={style.component}>
        <Table
            className={style.level1}
            columns={Columns}
            dataSource={props.data}
            //scroll={{ x: 1300 }}
        />
    </div>
    )
}

export default Component
