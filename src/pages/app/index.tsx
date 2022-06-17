import {useState} from 'react'
import logo from './logo.svg'
import style from './index.module.css'

import Table from '../../components/table'
import {Button, Drawer} from 'antd';
import PouchDB from 'pouchdb';
import 'antd/dist/antd.css'


function Component() {
    const [visible, setVisible] = useState(false);

    let db = new PouchDB('poi_database');
    const Data = [
        {
            "key": "1",
            "indice": "1",
            "nombre": "OBJETIVO INSTITUCIONAL PERMANENTE 1 (OBIP 1): ASEGURAR UNA FORMACIÓN ACADÉMICA DE CALIDAD",
            "ppto2022": 463591,
            "ppto2023": 925325,
            "ppto2024": 1339513,
            "children": [{
                "key": "1.1",
                "indice": "1.1",
                "nombre": "Objetivo General de Mediano Plazo 1.1: Garantizar una formación académica de calidad en la Facultad de Ingeniería y Arquitectura",
                "ppto2022": 463591,
                "ppto2023": 925325,
                "ppto2024": 1339513,
                "children": [{
                    "key": "1.1.1",
                    "indice": "1.1.1",
                    "nombre": "Objetivo Específico de Mediano Plazo 1.1.1: Garantizar la capacidad de gestión de la Facultad de Ingeniería y Arquitectura",
                    "ppto2022": 19831,
                    "ppto2023": 40018,
                    "ppto2024": 58552,
                    "children": [{
                        "key": "1.1.1.1",
                        "indice": "1.1.1.1",
                        "nombre": "Actividad 1.1.1.1: Actividades de Gestión Decanal",
                        "responsable": "DECANO FACULTAD DE INGENIERÍA Y ARQUITECTURA",
                        "um": "Acción Gestión Decanal",
                        "meta": 36,
                        "enero2022": 1,
                        "febrero2022": 1,
                        "marzo2022": 1,
                        "abril2022": 1,
                        "mayo2022": 1,
                        "junio2022": 1,
                        "julio2022": 1,
                        "agosto2022": 1,
                        "setiembre2022": 1,
                        "octubre2022": 1,
                        "noviembre2022": 1,
                        "diciembre2022": 1,

                        "enero2023": 1,
                        "febrero2023": 1,
                        "marzo2023": 1,
                        "abril2023": 1,
                        "mayo2023": 1,
                        "junio2023": 1,
                        "julio2023": 1,
                        "agosto2023": 1,
                        "setiembre2023": 1,
                        "octubre2023": 1,
                        "noviembre2023": 1,
                        "diciembre2023": 1,

                        "enero2024": 1,
                        "febrero2024": 1,
                        "marzo2024": 1,
                        "abril2024": 1,
                        "mayo2024": 1,
                        "junio2024": 1,
                        "julio2024": 1,
                        "agosto2024": 1,
                        "setiembre2024": 1,
                        "octubre2024": 1,
                        "noviembre2024": 1,
                        "diciembre2024": 1,

                        "ppto2022": 16253,
                        "ppto2023": 32760,
                        "ppto2024": 47877
                    },
                        {
                            "key": "1.1.1.2",
                            "indice": "1.1.1.2",
                            "nombre": "Actividad 1.1.1.2: Actividades de planeamiento",
                            "responsable": "DECANO FACULTAD DE INGENIERÍA Y ARQUITECTURA",
                            "um": "Acción de Planeamiento",
                            "meta": 36,
                            "enero2022": 1,
                            "febrero2022": 1,
                            "marzo2022": 1,
                            "abril2022": 1,
                            "mayo2022": 1,
                            "junio2022": 1,
                            "julio2022": 1,
                            "agosto2022": 1,
                            "setiembre2022": 1,
                            "octubre2022": 1,
                            "noviembre2022": 1,
                            "diciembre2022": 1,

                            "enero2023": 1,
                            "febrero2023": 1,
                            "marzo2023": 1,
                            "abril2023": 1,
                            "mayo2023": 1,
                            "junio2023": 1,
                            "julio2023": 1,
                            "agosto2023": 1,
                            "setiembre2023": 1,
                            "octubre2023": 1,
                            "noviembre2023": 1,
                            "diciembre2023": 1,

                            "enero2024": 1,
                            "febrero2024": 1,
                            "marzo2024": 1,
                            "abril2024": 1,
                            "mayo2024": 1,
                            "junio2024": 1,
                            "julio2024": 1,
                            "agosto2024": 1,
                            "setiembre2024": 1,
                            "octubre2024": 1,
                            "noviembre2024": 1,
                            "diciembre2024": 1,
                            "ppto2022": 767,
                            "ppto2023": 1555,
                            "ppto2024": 2287
                        }
                    ]
                },
                    {
                        "key": "1.1.2",
                        "indice": "1.1.2",
                        "nombre": "Objetivo Específico de Mediano Plazo 1.1.2: Garantizar la capacidad académica de la Escuela de Ingeniería Civil",
                        "ppto2022": 36654,
                        "ppto2023": 73022,
                        "ppto2024": 105511
                    }
                ]
            },
                {
                    "key": "1.2",
                    "indice": "1.2",
                    "nombre": "Objetivo General de Mediano Plazo 1.2: Garantizar una formación académica de calidad en la Facultad de Ciencias Empresariales y Educación",
                    "ppto2022": 122185,
                    "ppto2023": 243881,
                    "ppto2024": 353046
                }
            ]
        },
            {
                "key": "2",
                "indice": "2",
                "nombre": "OBJETIVO INSTITUCIONAL PERMANENTE 2 (OBIP 2): PROMOVER LA INVESTIGACIÓN ACADÉMICA Y CIENTÍFICA, GENERANDO IMPACTO A NIVEL DE LA COMUNIDAD",
                "ppto2022": 1610537,
                "ppto2023": 1837180,
                "ppto2024": 2087416
            }
        ]

    Data.map((item, index) => {
        console.log(item)
        console.log(index)

        item._id = index;
        db.put(item)
    })



    const showDrawer = () => {
        setVisible(true);
    }

    const onClose = () => {
        setVisible(false);
    }


    return (
        <div className={style.component}>
            <div className={style.container}>
                <Table handleCellClick={showDrawer}/>
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
