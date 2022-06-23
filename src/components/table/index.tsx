import {useEffect, useState} from 'react'
import logo from './logo.svg'
import style from './index.module.css'
import { Table } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import React from 'react';
import { Select, Tag } from 'antd';
import type { CustomTagProps } from 'rc-select/lib/BaseSelect';

import 'antd/dist/antd.css'

function Component(props: any) {

    const cellClick = (i: any, e: any) => {
        console.log(e);
        props.handleCellClick(i, e)
    }
    const [columns, setColumns] = useState([])
    const [selected, setSelected] = useState(['ID', 'Nombre', '2022'])

    const Columns = {
        ID: {
            id: 'ID', dataIndex: 'id', key: 'id', width: 100, render: (text: any, record: any) => {
                return (<div style={{width: '40px'}}>{text}</div>)
            }
        },
        'Índice': { title: 'Índice', dataIndex: 'indice', key: 'indice', width: 100 },
        Nombre: {
            title: 'Nombre', dataIndex: 'nombre', key: 'nombre', width: 500, render: (text: any, record: any) => {
                return (
                    <div style={{width: '650px'}}>
                        <div>{text.split(':')[0]}</div>
                        <div>{text.split(':')[1]}</div>
                    </div>)
            }
        },
        Responsable: {
            title: 'Responsable',
            dataIndex: 'responsable',
            key: 'responsable',
            width: 500,
            render: (text: any, record: any) => {
                return (<div style={{width: '500px'}}>{text}</div>)
            }
        },
        'Unidad de Medida': { title: 'Unidad de Medida', dataIndex: 'um', key: 'um', width: 100, render: (text: any, record: any)=> { return (<div style={{width: '400px'}}>{text}</div>) }},

        'Meta Física': { title: 'Meta Física', dataIndex: 'meta', key: 'meta', width: 100, render: (text: any, record: any)=> { return (<div style={{width: '50px', textAlign: 'center'}}>{text}</div>) }},
        '2022' : {
            title: '2022',
            width: 100,
            children: [
                {
                    title: 'T1',
                    width: 100,
                    children: [
                        { title: 'Enero', dataIndex: 'enero2022', key: 'enero2022', width: 50, render: (text: any, record: any)=> {
                            let x = (record.xenero2022 == "")?"0":record.xenero2022
                            let color = 'blue'
                            if (x < record.enero2022) color = 'red'
                                return (<div style={{width: '80px', textAlign: 'center', color: 'white'}} onClick={() => { cellClick('enero2022', record)}}>
                                    <div style={{backgroundColor: color, color: 'white', padding: '5px', width: '80px', borderRadius: '4px'}}>{x}/{text}</div>
                                </div>)
                        }},
                        { title: 'Febrero', dataIndex: 'febrero2022', key: 'febrero2022', width: 50, render: (text: any, record: any)=> {
                                let x = (record.xfebrero2022 == "")?"0":record.xfebrero2022
                                let color = 'blue'
                                if (x < record.febrero2022) color = 'red'
                                return (<div style={{width: '80px', textAlign: 'center', color: 'white'}} onClick={() => { cellClick('febrero2022', record)}}>
                                    <div style={{backgroundColor: color, color: 'white', padding: '5px', width: '80px', borderRadius: '4px'}}>{x}/{text}</div>
                                </div>)
                            }},
                        { title: 'Marzo', dataIndex: 'marzo2022', key: 'marzo2022', width: 50, render: (text: any, record: any)=> {
                                let x = (record.xmarzo2022 == "") ? "0" : record.xmarzo2022
                                let color = 'blue'
                                if (x < record.marzo2022) color = 'red'
                                return (
                                    <div style={{width: '80px', textAlign: 'center', color: 'white'}} onClick={() => {
                                        cellClick('marzo2022', record)
                                    }}>
                                        <div style={{
                                            backgroundColor: color,
                                            color: 'white',
                                            padding: '5px',
                                            width: '80px',
                                            borderRadius: '4px'
                                        }}>{x}/{text}</div>
                                    </div>)
                            }}
                    ]
                },
                {
                    title: 'T2',
                    width: 100,
                    children: [
                        { title: 'Abril', dataIndex: 'abril2022', key: 'abril2022', width: 50, render: (text: any, record: any)=> {
                                let x = (record.xabril2022 == "")?"0":record.xabril2022
                                let color = 'blue'
                                if (x < record.abril2022) color = 'red'
                                return (<div style={{width: '80px', textAlign: 'center', color: 'white'}} onClick={() => { cellClick('abril2022', record)}}>
                                    <div style={{backgroundColor: color, color: 'white', padding: '5px', width: '80px', borderRadius: '4px'}}>{x}/{text}</div>
                                </div>)
                            }},
                        { title: 'Mayo', dataIndex: 'mayo2022', key: 'mayo2022', width: 50, render: (text: any, record: any)=> {
                                let x = (record.xmayo2022 == "")?"0":record.xmayo2022
                                let color = 'blue'
                                if (x < record.mayo2022) color = 'red'
                                return (<div style={{width: '80px', textAlign: 'center', color: 'white'}} onClick={() => { cellClick('mayo2022', record)}}>
                                    <div style={{backgroundColor: color, color: 'white', padding: '5px', width: '80px', borderRadius: '4px'}}>{x}/{text}</div>
                                </div>)
                            }},
                        { title: 'Junio', dataIndex: 'junio2022', key: 'junio2022', width: 50, render: (text: any, record: any)=> {
                                let x = (record.xjunio2022 == "")?"0":record.xjunio2022
                                let color = 'blue'
                                if (x < record.junio2022) color = 'orange'
                                return (<div style={{width: '80px', textAlign: 'center', color: 'white'}} onClick={() => { cellClick('junio2022', record)}}>
                                    <div style={{backgroundColor: color, color: 'white', padding: '5px', width: '80px', borderRadius: '4px'}}>{x}/{text}</div>
                                </div>)
                            }},
                    ]
                },
                {
                    title: 'T3',
                    width: 100,
                    children: [
                        { title: 'Julio', dataIndex: 'julio2022', key: 'julio2022', width: 50, render: (text: any, record: any)=> { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick('julio2022', record)}}>{text}</div>) }},
                        { title: 'Agosto', dataIndex: 'agosto2022', key: 'agosto2022', width: 50, render: (text: any, record: any)=> { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick('agosto2022', record)}}>{text}</div>) }},
                        { title: 'Setiembre', dataIndex: 'setiembre2022', key: 'setiembre2022', width: 50, render: (text: any, record: any)=> { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick('setiembre2022', record)}}>{text}</div>) }},
                    ]
                },
                {
                    title: 'T4',
                    width: 100,
                    children: [
                        { title: 'Octubre', dataIndex: 'octubre2022', key: 'octubre2022', width: 50, render: (text: any, record: any)=> { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick('octubre2022', record)}}>{text}</div>) }},
                        { title: 'Noviembre', dataIndex: 'noviembre2022', key: 'noviembre2022', width: 50, render: (text: any, record: any)=> { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick('noviembre2022', record)}}>{text}</div>) }},
                        { title: 'Diciembre', dataIndex: 'diciembre2022', key: 'diciembre2022', width: 50, render: (text: any, record: any)=> { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick('diciembre2022', record)}}>{text}</div>) }},
                    ]
                },
            ]
        },
        '2023' : {
            title: '2023',
            width: 100,
            children: [
                {
                    title: 'T1',
                    width: 100,
                    children: [
                        { title: 'E', dataIndex: 'enero2023', key: 'enero2023', width: 50, render: (text: any, record: any)=> { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick('enero2023', record)}}>{text}</div>) }},
                        { title: 'F', dataIndex: 'febrero2023', key: 'febrero2023', width: 50, render: (text: any, record: any)=> { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick('febrero2023', record)}}>{text}</div>) }},
                        { title: 'M', dataIndex: 'marzo2023', key: 'marzo2023', width: 50, render: (text: any, record: any)=> { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick('marzo2023', record)}}>{text}</div>) }},
                    ]
                },
                {
                    title: 'T2',
                    width: 100,
                    children: [
                        { title: 'A', dataIndex: 'abril2023', key: 'abril2023', width: 50, render: (text: any, record: any)=> { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick('abril2023', record)}}>{text}</div>) }},
                        { title: 'M', dataIndex: 'mayo2023', key: 'mayo2023', width: 50, render: (text: any, record: any)=> { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => {  cellClick('mayo2023',record)}}>{text}</div>) }},
                        { title: 'J', dataIndex: 'junio2023', key: 'junio2023', width: 50, render: (text: any, record: any)=> { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick('junio2023',record)}}>{text}</div>) }},
                    ]
                },
                {
                    title: 'T3',
                    width: 100,
                    children: [
                        { title: 'J', dataIndex: 'julio2023', key: 'julio2023', width: 50, render: (text: any, record: any)=> { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick('julio2023', record)}}>{text}</div>) }},
                        { title: 'A', dataIndex: 'agosto2023', key: 'agosto2023', width: 50, render: (text: any, record: any)=> { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick('agosto2023',record)}}>{text}</div>) }},
                        { title: 'S', dataIndex: 'setiembre2023', key: 'setiembre2023', width: 50, render: (text: any, record: any)=> { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick('setiembre2023', record)}}>{text}</div>) }},
                    ]
                },
                {
                    title: 'T4',
                    width: 100,
                    children: [
                        { title: 'O', dataIndex: 'octubre2023', key: 'octubre2023', width: 50, render: (text: any, record: any)=> { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => {  cellClick('octubre2023',record)}}>{text}</div>) }},
                        { title: 'N', dataIndex: 'noviembre2023', key: 'noviembre2023', width: 50, render: (text: any, record: any)=> { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick('noviembre2023', record)}}>{text}</div>) }},
                        { title: 'D', dataIndex: 'diciembre2023', key: 'diciembre2023', width: 50, render: (text: any, record: any)=> { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => {  cellClick('diciembre2023',record)}}>{text}</div>) }},
                    ]
                },
            ]
        },
        '2024' : {
            title: '2024',
            width: 100,
            children: [
                {
                    title: 'T1',
                    width: 100,
                    children: [
                        { title: 'E', dataIndex: 'enero2024', key: 'enero2024', width: 50, render: (text: any, record: any)=> { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                        { title: 'F', dataIndex: 'febrero2024', key: 'febrero2024', width: 50, render: (text: any, record: any)=> { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                        { title: 'M', dataIndex: 'marzo2024', key: 'marzo2024', width: 50, render: (text: any, record: any)=> { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                    ]
                },
                {
                    title: 'T2',
                    width: 100,
                    children: [
                        { title: 'A', dataIndex: 'abril2024', key: 'abril2024', width: 50, render: (text: any, record: any)=> { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                        { title: 'M', dataIndex: 'mayo2024', key: 'mayo2024', width: 50, render: (text: any, record: any)=> { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                        { title: 'J', dataIndex: 'junio2024', key: 'junio2024', width: 50, render: (text: any, record: any)=> { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                    ]
                },
                {
                    title: 'T3',
                    width: 100,
                    children: [
                        { title: 'J', dataIndex: 'julio2024', key: 'julio2024', width: 50, render: (text: any, record: any)=> { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                        { title: 'A', dataIndex: 'agosto2024', key: 'agosto2024', width: 50, render: (text: any, record: any)=> { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                        { title: 'S', dataIndex: 'setiembre2024', key: 'setiembre2024', width: 50, render: (text: any, record: any)=> { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                    ]
                },
                {
                    title: 'T4',
                    width: 100,
                    children: [
                        { title: 'O', dataIndex: 'octubre2024', key: 'octubre2024', width: 50, render: (text: any, record: any)=> { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                        { title: 'N', dataIndex: 'noviembre2024', key: 'noviembre2024', width: 50, render: (text: any, record: any)=> { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                        { title: 'D', dataIndex: 'diciembre2024', key: 'diciembre2024', width: 50, render: (text: any, record: any)=> { return (<div style={{width: '50px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                    ]
                },
            ]
        },
        'Presupuesto' : {
            title: 'Presupuesto',
            width: 100,
            children: [
                {title: '2022', dataIndex: 'ppto2022', key: 'ppto2022', width: 150, render: (text: any, record: any)=> { return (<div style={{width: '150px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                {title: '2023', dataIndex: 'ppto2023', key: 'ppto2023', width: 150, render: (text: any, record: any)=> { return (<div style={{width: '150px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
                {title: '2024', dataIndex: 'ppto2024', key: 'ppto2024', width: 150, render: (text: any, record: any)=> { return (<div style={{width: '150px', textAlign: 'center'}} onClick={() => { cellClick(record)}}>{text}</div>) }},
            ]
        }

        //];
    }

    const expandedRowRender = () => {
        return <Table />
    }
    const options=[
        {"value":'ID'},
        {"value": 'Índice'},
        {"value":'Nombre'},
        {"value":'Responsable'},
        {"value":'Unidad de Medida'},
        {"value":'Meta Física'},
        {"value":'2022'},
        {"value":'2023'},
        {"value":'2024'},
        {"value":'Presupuesto'},
    ]



    const handleChange = (e: any) => {
        console.log(e);
        setSelected(e)
       // let _columns = ['ID'];

        //setColumns(_columns);

    }

    useEffect(()=> {
        //handleChange(selected)
        let _columns = []
        //selected.unshift('ID', 'Nombre')
        for (const column of selected) {
            console.log('column: ' + column)
            // @ts-ignore
            _columns.push(Columns[column])
        }
        // @ts-ignore
        setColumns(_columns)
    }, [selected])


    console.log('columns')
    console.log(columns)

    return (

    <div className={style.component}>

        <Select
            mode="multiple"
            onChange={handleChange}
            showArrow
            // tagRender={tagRender}
            defaultValue={selected}
            style={{ width: '100%', maxWidth: '400px' }}
            options={options}
        />



        <Table
            className={style.level1}
            columns={columns}
            dataSource={props.data}
            pagination={false}
            expandable={{
                indentSize: 5,
                columnWidth: '30px',
                onExpand: (expanded, record) =>
                    console.log("onExpand: ", record, expanded),
            }}
            //scroll={{ x: 1300 }}
        />
    </div>
    )
}

export default Component
