import {useEffect, useState} from 'react'
import logo from './logo.svg'
import style from './index.module.css'
import {
    CloseCircleOutlined,
    EditOutlined,
    EllipsisOutlined,
    SettingOutlined,
    SearchOutlined,
    CheckCircleOutlined, UploadOutlined, InboxOutlined, DeleteOutlined
} from '@ant-design/icons';
import {Avatar, Card, Form, Input, Row, Upload, UploadProps} from 'antd';

import Table from '../../components/tableedit'
import {Button, Drawer, Col} from 'antd';
import PouchDB from 'pouchdb';
import 'antd/dist/antd.css'

import axios from 'axios'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import {UploadFile} from "antd/es/upload/interface";


const antIcon = <LoadingOutlined style={{ fontSize: 64}} spin />;
const {Meta} = Card;

function TreeCalc(node: any) {

    if (node.children) {
        let sum = {
            "enero2022": 0,
            "febrero2022": 0,
            "marzo2022": 0,
            "abril2022": 0,
            "mayo2022": 0,
            "junio2022": 0,
            "julio2022": 0,
            "agosto2022": 0,
            "setiembre2022": 0,
            "octubre2022": 0,
            "noviembre2022": 0,
            "diciembre2022": 0,

            "enero2023": 0,
            "febrero2023": 0,
            "marzo2023": 0,
            "abril2023": 0,
            "mayo2023": 0,
            "junio2023": 0,
            "julio2023": 0,
            "agosto2023": 0,
            "setiembre2023": 0,
            "octubre2023": 0,
            "noviembre2023": 0,
            "diciembre2023": 0,

            "enero2024": 0,
            "febrero2024": 0,
            "marzo2024": 0,
            "abril2024": 0,
            "mayo2024": 0,
            "junio2024": 0,
            "julio2024": 0,
            "agosto2024": 0,
            "setiembre2024": 0,
            "octubre2024": 0,
            "noviembre2024": 0,
            "diciembre2024": 0,
        }
        for (let i = 0; i < node.children.length; i++) {
            sum.enero2022 += TreeCalc(node.children[i]).enero2022
            sum.febrero2022 += TreeCalc(node.children[i]).febrero2022
            sum.marzo2022 += TreeCalc(node.children[i]).marzo2022
            sum.abril2022 += TreeCalc(node.children[i]).abril2022
            sum.mayo2022 += TreeCalc(node.children[i]).mayo2022
            sum.junio2022 += TreeCalc(node.children[i]).junio2022
            sum.julio2022 += TreeCalc(node.children[i]).julio2022
            sum.agosto2022 += TreeCalc(node.children[i]).agosto2022
            sum.setiembre2022 += TreeCalc(node.children[i]).setiembre2022
            sum.octubre2022 += TreeCalc(node.children[i]).octubre2022
            sum.enero2022 += TreeCalc(node.children[i]).enero2022
            sum.diciembre2022 += TreeCalc(node.children[i]).diciembre2022

            sum.enero2023 += TreeCalc(node.children[i]).enero2023
            sum.febrero2023 += TreeCalc(node.children[i]).febrero2023
            sum.marzo2023 += TreeCalc(node.children[i]).marzo2023
            sum.abril2023 += TreeCalc(node.children[i]).abril2023
            sum.mayo2023 += TreeCalc(node.children[i]).mayo2023
            sum.junio2023 += TreeCalc(node.children[i]).junio2023
            sum.julio2023 += TreeCalc(node.children[i]).julio2023
            sum.agosto2023 += TreeCalc(node.children[i]).agosto2023
            sum.setiembre2023 += TreeCalc(node.children[i]).setiembre2023
            sum.octubre2023 += TreeCalc(node.children[i]).octubre2023
            sum.enero2023 += TreeCalc(node.children[i]).enero2023
            sum.diciembre2023 += TreeCalc(node.children[i]).diciembre2023

            sum.enero2024 += TreeCalc(node.children[i]).enero2024
            sum.febrero2024 += TreeCalc(node.children[i]).febrero2024
            sum.marzo2024 += TreeCalc(node.children[i]).marzo2024
            sum.abril2024 += TreeCalc(node.children[i]).abril2024
            sum.mayo2024 += TreeCalc(node.children[i]).mayo2024
            sum.junio2024 += TreeCalc(node.children[i]).junio2024
            sum.julio2024 += TreeCalc(node.children[i]).julio2024
            sum.agosto2024 += TreeCalc(node.children[i]).agosto2024
            sum.setiembre2024 += TreeCalc(node.children[i]).setiembre2024
            sum.octubre2024 += TreeCalc(node.children[i]).octubre2024
            sum.enero2024 += TreeCalc(node.children[i]).enero2024
            sum.diciembre2024 += TreeCalc(node.children[i]).diciembre2024
        }
        node.enero2022 = sum.enero2022;
        node.febrero2022 = sum.febrero2022;
        node.marzo2022 = sum.marzo2022;
        node.abril2022 = sum.abril2022;
        node.mayo2022 = sum.mayo2022;
        node.junio2022 = sum.junio2022;
        node.julio2022 = sum.julio2022;
        node.agosto2022 = sum.agosto2022;
        node.setiembre2022 = sum.setiembre2022;
        node.octubre2022 = sum.octubre2022;
        node.noviembre2022 = sum.noviembre2022;
        node.diciembre2022 = sum.diciembre2022;

        node.enero2023 = sum.enero2023;
        node.febrero2023 = sum.febrero2023;
        node.marzo2023 = sum.marzo2023;
        node.abril2023 = sum.abril2023;
        node.mayo2023 = sum.mayo2023;
        node.junio2023 = sum.junio2023;
        node.julio2023 = sum.julio2023;
        node.agosto2023 = sum.agosto2023;
        node.setiembre2023 = sum.setiembre2023;
        node.octubre2023 = sum.octubre2023;
        node.noviembre2023 = sum.noviembre2023;
        node.diciembre2023 = sum.diciembre2023;

        node.enero2024 = sum.enero2024;
        node.febrero2024 = sum.febrero2024;
        node.marzo2024 = sum.marzo2024;
        node.abril2024 = sum.abril2024;
        node.mayo2024 = sum.mayo2024;
        node.junio2024 = sum.junio2024;
        node.julio2024 = sum.julio2024;
        node.agosto2024 = sum.agosto2024;
        node.setiembre2024 = sum.setiembre2024;
        node.octubre2024 = sum.octubre2024;
        node.noviembre2024 = sum.noviembre2024;
        node.diciembre2024 = sum.diciembre2024;

        return sum;
    } else {
        return {
            "enero2022": (isNaN(node.enero2022) || node.enero2022 == "" || node.enero2022 == undefined) ? 0 : parseInt(node.enero2022),
            "febrero2022": (isNaN(node.febrero2022) || node.febrero2022 == "" || node.febrero2022 == undefined) ? 0 : parseInt(node.febrero2022),
            "marzo2022": (isNaN(node.marzo2022) || node.marzo2022 == "" || node.marzo2022 == undefined) ? 0 : parseInt(node.marzo2022),
            "abril2022": (isNaN(node.abril2022) || node.abril2022 == "" || node.abril2022 == undefined) ? 0 : parseInt(node.abril2022),
            "mayo2022": (isNaN(node.mayo2022) || node.mayo2022 == "" || node.mayo2022 == undefined) ? 0 : parseInt(node.mayo2022),
            "junio2022": (isNaN(node.junio2022) || node.junio2022 == "" || node.junio2022 == undefined) ? 0 : parseInt(node.junio2022),
            "julio2022": (isNaN(node.julio2022) || node.julio2022 == "" || node.julio2022 == undefined) ? 0 : parseInt(node.julio2022),
            "agosto2022": (isNaN(node.agosto2022) || node.agosto2022 == "" || node.agosto2022 == undefined) ? 0 : parseInt(node.agosto2022),
            "setiembre2022": (isNaN(node.setiembre2022) || node.setiembre2022 == "" || node.setiembre2022 == undefined) ? 0 : parseInt(node.setiembre2022),
            "octubre2022": (isNaN(node.octubre2022) || node.octubre2022 == "" || node.octubre2022 == undefined) ? 0 : parseInt(node.octubre2022),
            "noviembre2022": (isNaN(node.noviembre2022) || node.noviembre2022 == "" || node.noviembre2022 == undefined) ? 0 : parseInt(node.noviembre2022),
            "diciembre2022": (isNaN(node.diciembre2022) || node.diciembre2022 == "" || node.diciembre2022 == undefined) ? 0 : parseInt(node.diciembre2022),

            "enero2023": (isNaN(node.enero2023) || node.enero2023 == "" || node.enero2023 == undefined) ? 0 : parseInt(node.enero2023),
            "febrero2023": (isNaN(node.febrero2023) || node.febrero2023 == "" || node.febrero2023 == undefined) ? 0 : parseInt(node.febrero2023),
            "marzo2023": (isNaN(node.marzo2023) || node.marzo2023 == "" || node.marzo2023 == undefined) ? 0 : parseInt(node.marzo2023),
            "abril2023": (isNaN(node.abril2023) || node.abril2023 == "" || node.abril2023 == undefined) ? 0 : parseInt(node.abril2023),
            "mayo2023": (isNaN(node.mayo2023) || node.mayo2023 == "" || node.mayo2023 == undefined) ? 0 : parseInt(node.mayo2023),
            "junio2023": (isNaN(node.junio2023) || node.junio2023 == "" || node.junio2023 == undefined) ? 0 : parseInt(node.junio2023),
            "julio2023": (isNaN(node.julio2023) || node.julio2023 == "" || node.julio2023 == undefined) ? 0 : parseInt(node.julio2023),
            "agosto2023": (isNaN(node.agosto2023) || node.agosto2023 == "" || node.agosto2023 == undefined) ? 0 : parseInt(node.agosto2023),
            "setiembre2023": (isNaN(node.setiembre2023) || node.setiembre2023 == "" || node.setiembre2023 == undefined) ? 0 : parseInt(node.setiembre2023),
            "octubre2023": (isNaN(node.octubre2023) || node.octubre2023 == "" || node.octubre2023 == undefined) ? 0 : parseInt(node.octubre2023),
            "noviembre2023": (isNaN(node.noviembre2023) || node.noviembre2023 == "" || node.noviembre2023 == undefined) ? 0 : parseInt(node.noviembre2023),
            "diciembre2023": (isNaN(node.diciembre2023) || node.diciembre2023 == "" || node.diciembre2023 == undefined) ? 0 : parseInt(node.diciembre2023),

            "enero2024": (isNaN(node.enero2024) || node.enero2024 == "" || node.enero2024 == undefined) ? 0 : parseInt(node.enero2024),
            "febrero2024": (isNaN(node.febrero2024) || node.febrero2024 == "" || node.febrero2024 == undefined) ? 0 : parseInt(node.febrero2024),
            "marzo2024": (isNaN(node.marzo2024) || node.marzo2024 == "" || node.marzo2024 == undefined) ? 0 : parseInt(node.marzo2024),
            "abril2024": (isNaN(node.abril2024) || node.abril2024 == "" || node.abril2024 == undefined) ? 0 : parseInt(node.abril2024),
            "mayo2024": (isNaN(node.mayo2024) || node.mayo2024 == "" || node.mayo2024 == undefined) ? 0 : parseInt(node.mayo2024),
            "junio2024": (isNaN(node.junio2024) || node.junio2024 == "" || node.junio2024 == undefined) ? 0 : parseInt(node.junio2024),
            "julio2024": (isNaN(node.julio2024) || node.julio2024 == "" || node.julio2024 == undefined) ? 0 : parseInt(node.julio2024),
            "agosto2024": (isNaN(node.agosto2024) || node.agosto2024 == "" || node.agosto2024 == undefined) ? 0 : parseInt(node.agosto2024),
            "setiembre2024": (isNaN(node.setiembre2024) || node.setiembre2024 == "" || node.setiembre2024 == undefined) ? 0 : parseInt(node.setiembre2024),
            "octubre2024": (isNaN(node.octubre2024) || node.octubre2024 == "" || node.octubre2024 == undefined) ? 0 : parseInt(node.octubre2024),
            "noviembre2024": (isNaN(node.noviembre2024) || node.noviembre2024 == "" || node.noviembre2024 == undefined) ? 0 : parseInt(node.noviembre2024),
            "diciembre2024": (isNaN(node.diciembre2024) || node.diciembre2024 == "" || node.diciembre2024 == undefined) ? 0 : parseInt(node.diciembre2024),
        }
        //if (isNaN(node.enero2022) || node.enero2022 == "") return 0
        //return parseInt(node.enero2022)
    }
}
function UndefinedToZero (value: any) {
    return (value == undefined)?0:value;
}
function TransformJSON(node: any) {
    let results = []
    let x = 1 , y =1 , z =1, w = 1
    for (let n1 of node.listaObjetivoN1) {
        //console.log(n1.objetivo)
        let n1children = []
        for (let n2 of n1.listaObjetivoN2) {
            //console.log('   '    + n2.objetivo)
            let n2children = []
            for (let n3 of n2.listaObjetivoN3) {
                //console.log('       '    + n3.objetivo)
                let n3children = []
                for (let n4 of n3.listaActividades) {
                    //console.log('            '    + n4.nombre)
                    n3children.push({
                        key:          Math.random(),
                        id2022:       n4.listaActividadesMetas[0].idactividadperiodo,
                        id2023:       n4.listaActividadesMetas[1].idactividadperiodo,
                        id2024:       n4.listaActividadesMetas[2].idactividadperiodo,
                        indice:        x + '.' + y + '.' + z + '.' + w,
                        nombre:        n4.nombre,
                        responsable:   null,
                        um:            null,
                        meta:          UndefinedToZero(n4.listaActividadesMetas[0].totalmetafisica +
                            n4.listaActividadesMetas[1].totalmetafisica +
                            n4.listaActividadesMetas[2].totalmetafisica),

                        enero2022:     UndefinedToZero (n4.listaActividadesMetas[0].ene),
                        febrero2022:   UndefinedToZero (n4.listaActividadesMetas[0].feb),
                        marzo2022:     UndefinedToZero (n4.listaActividadesMetas[0].mar),
                        abril2022:     UndefinedToZero (n4.listaActividadesMetas[0].abr),
                        mayo2022:      UndefinedToZero (n4.listaActividadesMetas[0].may),
                        junio2022:     UndefinedToZero (n4.listaActividadesMetas[0].jun),
                        julio2022:     UndefinedToZero (n4.listaActividadesMetas[0].jul),
                        agosto2022:    UndefinedToZero (n4.listaActividadesMetas[0].ago),
                        setiembre2022: UndefinedToZero (n4.listaActividadesMetas[0].sep),
                        octubre2022:   UndefinedToZero (n4.listaActividadesMetas[0].oct),
                        noviembre2022: UndefinedToZero (n4.listaActividadesMetas[0].nov),
                        diciembre2022: UndefinedToZero (n4.listaActividadesMetas[0].dic),

                        xenero2022:     UndefinedToZero (n4.listaActividadesMetas[0].enereg),
                        xfebrero2022:   UndefinedToZero (n4.listaActividadesMetas[0].febreg),
                        xmarzo2022:     UndefinedToZero (n4.listaActividadesMetas[0].marreg),
                        xabril2022:     UndefinedToZero (n4.listaActividadesMetas[0].abrreg),
                        xmayo2022:      UndefinedToZero (n4.listaActividadesMetas[0].mayreg),
                        xjunio2022:     UndefinedToZero (n4.listaActividadesMetas[0].junreg),
                        xjulio2022:     UndefinedToZero (n4.listaActividadesMetas[0].julreg),
                        xagosto2022:    UndefinedToZero (n4.listaActividadesMetas[0].agoreg),
                        xsetiembre2022: UndefinedToZero (n4.listaActividadesMetas[0].sepreg),
                        xoctubre2022:   UndefinedToZero (n4.listaActividadesMetas[0].octreg),
                        xnoviembre2022: UndefinedToZero (n4.listaActividadesMetas[0].novreg),
                        xdiciembre2022: UndefinedToZero (n4.listaActividadesMetas[0].dicreg),

                        oenero2022:     UndefinedToZero (n4.listaActividadesMetas[0].eneobs),
                        ofebrero2022:   UndefinedToZero (n4.listaActividadesMetas[0].febobs),
                        omarzo2022:     UndefinedToZero (n4.listaActividadesMetas[0].marobs),
                        oabril2022:     UndefinedToZero (n4.listaActividadesMetas[0].abrobs),
                        omayo2022:      UndefinedToZero (n4.listaActividadesMetas[0].mayobs),
                        ojunio2022:     UndefinedToZero (n4.listaActividadesMetas[0].junobs),
                        ojulio2022:     UndefinedToZero (n4.listaActividadesMetas[0].julobs),
                        oagosto2022:    UndefinedToZero (n4.listaActividadesMetas[0].agoobs),
                        osetiembre2022: UndefinedToZero (n4.listaActividadesMetas[0].sepobs),
                        ooctubre2022:   UndefinedToZero (n4.listaActividadesMetas[0].octobs),
                        onoviembre2022: UndefinedToZero (n4.listaActividadesMetas[0].novobs),
                        odiciembre2022: UndefinedToZero (n4.listaActividadesMetas[0].dicobs),

                        enero2023:     UndefinedToZero (n4.listaActividadesMetas[1].ene),
                        febrero2023:   UndefinedToZero (n4.listaActividadesMetas[1].feb),
                        marzo2023:     UndefinedToZero (n4.listaActividadesMetas[1].mar),
                        abril2023:     UndefinedToZero (n4.listaActividadesMetas[1].abr),
                        mayo2023:      UndefinedToZero (n4.listaActividadesMetas[1].may),
                        junio2023:     UndefinedToZero (n4.listaActividadesMetas[1].jun),
                        julio2023:     UndefinedToZero (n4.listaActividadesMetas[1].jul),
                        agosto2023:    UndefinedToZero (n4.listaActividadesMetas[1].ago),
                        setiembre2023: UndefinedToZero (n4.listaActividadesMetas[1].sep),
                        octubre2023:   UndefinedToZero (n4.listaActividadesMetas[1].oct),
                        noviembre2023: UndefinedToZero (n4.listaActividadesMetas[1].nov),
                        diciembre2023: UndefinedToZero (n4.listaActividadesMetas[1].dic),

                        xenero2023:     UndefinedToZero (n4.listaActividadesMetas[1].enereg),
                        xfebrero2023:   UndefinedToZero (n4.listaActividadesMetas[1].febreg),
                        xmarzo2023:     UndefinedToZero (n4.listaActividadesMetas[1].marreg),
                        xabril2023:     UndefinedToZero (n4.listaActividadesMetas[1].abrreg),
                        xmayo2023:      UndefinedToZero (n4.listaActividadesMetas[1].mayreg),
                        xjunio2023:     UndefinedToZero (n4.listaActividadesMetas[1].junreg),
                        xjulio2023:     UndefinedToZero (n4.listaActividadesMetas[1].julreg),
                        xagosto2023:    UndefinedToZero (n4.listaActividadesMetas[1].agoreg),
                        xsetiembre2023: UndefinedToZero (n4.listaActividadesMetas[1].sepreg),
                        xoctubre2023:   UndefinedToZero (n4.listaActividadesMetas[1].octreg),
                        xnoviembre2023: UndefinedToZero (n4.listaActividadesMetas[1].novreg),
                        xdiciembre2023: UndefinedToZero (n4.listaActividadesMetas[1].dicreg),

                        oenero2023:     UndefinedToZero (n4.listaActividadesMetas[1].eneobs),
                        ofebrero2023:   UndefinedToZero (n4.listaActividadesMetas[1].febobs),
                        omarzo2023:     UndefinedToZero (n4.listaActividadesMetas[1].marobs),
                        oabril2023:     UndefinedToZero (n4.listaActividadesMetas[1].abrobs),
                        omayo2023:      UndefinedToZero (n4.listaActividadesMetas[1].mayobs),
                        ojunio2023:     UndefinedToZero (n4.listaActividadesMetas[1].junobs),
                        ojulio2023:     UndefinedToZero (n4.listaActividadesMetas[1].julobs),
                        oagosto2023:    UndefinedToZero (n4.listaActividadesMetas[1].agoobs),
                        osetiembre2023: UndefinedToZero (n4.listaActividadesMetas[1].sepobs),
                        ooctubre2023:   UndefinedToZero (n4.listaActividadesMetas[1].octobs),
                        onoviembre2023: UndefinedToZero (n4.listaActividadesMetas[1].novobs),
                        odiciembre2023: UndefinedToZero (n4.listaActividadesMetas[1].dicobs),

                        enero2024:     UndefinedToZero (n4.listaActividadesMetas[2].ene),
                        febrero2024:   UndefinedToZero (n4.listaActividadesMetas[2].feb),
                        marzo2024:     UndefinedToZero (n4.listaActividadesMetas[2].mar),
                        abril2024:     UndefinedToZero (n4.listaActividadesMetas[2].abr),
                        mayo2024:      UndefinedToZero (n4.listaActividadesMetas[2].may),
                        junio2024:     UndefinedToZero (n4.listaActividadesMetas[2].jun),
                        julio2024:     UndefinedToZero (n4.listaActividadesMetas[2].jul),
                        agosto2024:    UndefinedToZero (n4.listaActividadesMetas[2].ago),
                        setiembre2024: UndefinedToZero (n4.listaActividadesMetas[2].sep),
                        octubre2024:   UndefinedToZero (n4.listaActividadesMetas[2].oct),
                        noviembre2024: UndefinedToZero (n4.listaActividadesMetas[2].nov),
                        diciembre2024: UndefinedToZero (n4.listaActividadesMetas[2].dic),

                        xenero2024:     UndefinedToZero (n4.listaActividadesMetas[2].enereg),
                        xfebrero2024:   UndefinedToZero (n4.listaActividadesMetas[2].febreg),
                        xmarzo2024:     UndefinedToZero (n4.listaActividadesMetas[2].marreg),
                        xabril2024:     UndefinedToZero (n4.listaActividadesMetas[2].abrreg),
                        xmayo2024:      UndefinedToZero (n4.listaActividadesMetas[2].mayreg),
                        xjunio2024:     UndefinedToZero (n4.listaActividadesMetas[2].junreg),
                        xjulio2024:     UndefinedToZero (n4.listaActividadesMetas[2].julreg),
                        xagosto2024:    UndefinedToZero (n4.listaActividadesMetas[2].agoreg),
                        xsetiembre2024: UndefinedToZero (n4.listaActividadesMetas[2].sepreg),
                        xoctubre2024:   UndefinedToZero (n4.listaActividadesMetas[2].octreg),
                        xnoviembre2024: UndefinedToZero (n4.listaActividadesMetas[2].novreg),
                        xdiciembre2024: UndefinedToZero (n4.listaActividadesMetas[2].dicreg),
                        ppto2022:       UndefinedToZero (n4.listaActividadesMetas[0].monto),
                        ppto2023:       UndefinedToZero (n4.listaActividadesMetas[1].monto),
                        ppto2024:       UndefinedToZero (n4.listaActividadesMetas[2].monto),

                        oenero2024:     UndefinedToZero (n4.listaActividadesMetas[2].eneobs),
                        ofebrero2024:   UndefinedToZero (n4.listaActividadesMetas[2].febobs),
                        omarzo2024:     UndefinedToZero (n4.listaActividadesMetas[2].marobs),
                        oabril2024:     UndefinedToZero (n4.listaActividadesMetas[2].abrobs),
                        omayo2024:      UndefinedToZero (n4.listaActividadesMetas[2].mayobs),
                        ojunio2024:     UndefinedToZero (n4.listaActividadesMetas[2].junobs),
                        ojulio2024:     UndefinedToZero (n4.listaActividadesMetas[2].julobs),
                        oagosto2024:    UndefinedToZero (n4.listaActividadesMetas[2].agoobs),
                        osetiembre2024: UndefinedToZero (n4.listaActividadesMetas[2].sepobs),
                        ooctubre2024:   UndefinedToZero (n4.listaActividadesMetas[2].octobs),
                        onoviembre2024: UndefinedToZero (n4.listaActividadesMetas[2].novobs),
                        odiciembre2024: UndefinedToZero (n4.listaActividadesMetas[2].dicobs),
                    })
                    w++;
                }
                n2children.push({
                    key:          Math.random(),
                    indice:        x + '.' + y + '.' + z,
                    nombre:        n3.objetivo,
                    responsable:   null,
                    um:            null,
                    meta:          UndefinedToZero (
                        n3.listaObjetivoMetaN3[0].totalmetafisica +
                        n3.listaObjetivoMetaN3[1].totalmetafisica +
                        n3.listaObjetivoMetaN3[2].totalmetafisica),

                    enero2022:     UndefinedToZero (n3.listaObjetivoMetaN3[0].ene),
                    febrero2022:   UndefinedToZero (n3.listaObjetivoMetaN3[0].feb),
                    marzo2022:     UndefinedToZero (n3.listaObjetivoMetaN3[0].mar),
                    abril2022:     UndefinedToZero (n3.listaObjetivoMetaN3[0].abr),
                    mayo2022:      UndefinedToZero (n3.listaObjetivoMetaN3[0].may),
                    junio2022:     UndefinedToZero (n3.listaObjetivoMetaN3[0].jun),
                    julio2022:     UndefinedToZero (n3.listaObjetivoMetaN3[0].jul),
                    agosto2022:    UndefinedToZero (n3.listaObjetivoMetaN3[0].ago),
                    setiembre2022: UndefinedToZero (n3.listaObjetivoMetaN3[0].sep),
                    octubre2022:   UndefinedToZero (n3.listaObjetivoMetaN3[0].oct),
                    noviembre2022: UndefinedToZero (n3.listaObjetivoMetaN3[0].nov),
                    diciembre2022: UndefinedToZero (n3.listaObjetivoMetaN3[0].dic),

                    xenero2022:     UndefinedToZero (n3.listaObjetivoMetaN3[0].enereg),
                    xfebrero2022:   UndefinedToZero (n3.listaObjetivoMetaN3[0].febreg),
                    xmarzo2022:     UndefinedToZero (n3.listaObjetivoMetaN3[0].marreg),
                    xabril2022:     UndefinedToZero (n3.listaObjetivoMetaN3[0].abrreg),
                    xmayo2022:      UndefinedToZero (n3.listaObjetivoMetaN3[0].mayreg),
                    xjunio2022:     UndefinedToZero (n3.listaObjetivoMetaN3[0].junreg),
                    xjulio2022:     UndefinedToZero (n3.listaObjetivoMetaN3[0].julreg),
                    xagosto2022:    UndefinedToZero (n3.listaObjetivoMetaN3[0].agoreg),
                    xsetiembre2022: UndefinedToZero (n3.listaObjetivoMetaN3[0].sepreg),
                    xoctubre2022:   UndefinedToZero (n3.listaObjetivoMetaN3[0].octreg),
                    xnoviembre2022: UndefinedToZero (n3.listaObjetivoMetaN3[0].novreg),
                    xdiciembre2022: UndefinedToZero (n3.listaObjetivoMetaN3[0].dicreg),

                    enero2023:     UndefinedToZero (n3.listaObjetivoMetaN3[1].ene),
                    febrero2023:   UndefinedToZero (n3.listaObjetivoMetaN3[1].feb),
                    marzo2023:     UndefinedToZero (n3.listaObjetivoMetaN3[1].mar),
                    abril2023:     UndefinedToZero (n3.listaObjetivoMetaN3[1].abr),
                    mayo2023:      UndefinedToZero (n3.listaObjetivoMetaN3[1].may),
                    junio2023:     UndefinedToZero (n3.listaObjetivoMetaN3[1].jun),
                    julio2023:     UndefinedToZero (n3.listaObjetivoMetaN3[1].jul),
                    agosto2023:    UndefinedToZero (n3.listaObjetivoMetaN3[1].ago),
                    setiembre2023: UndefinedToZero (n3.listaObjetivoMetaN3[1].sep),
                    octubre2023:   UndefinedToZero (n3.listaObjetivoMetaN3[1].oct),
                    noviembre2023: UndefinedToZero (n3.listaObjetivoMetaN3[1].nov),
                    diciembre2023: UndefinedToZero (n3.listaObjetivoMetaN3[1].dic),

                    xenero2023:     UndefinedToZero (n3.listaObjetivoMetaN3[1].enereg),
                    xfebrero2023:   UndefinedToZero (n3.listaObjetivoMetaN3[1].febreg),
                    xmarzo2023:     UndefinedToZero (n3.listaObjetivoMetaN3[1].marreg),
                    xabril2023:     UndefinedToZero (n3.listaObjetivoMetaN3[1].abrreg),
                    xmayo2023:      UndefinedToZero (n3.listaObjetivoMetaN3[1].mayreg),
                    xjunio2023:     UndefinedToZero (n3.listaObjetivoMetaN3[1].junreg),
                    xjulio2023:     UndefinedToZero (n3.listaObjetivoMetaN3[1].julreg),
                    xagosto2023:    UndefinedToZero (n3.listaObjetivoMetaN3[1].agoreg),
                    xsetiembre2023: UndefinedToZero (n3.listaObjetivoMetaN3[1].sepreg),
                    xoctubre2023:   UndefinedToZero (n3.listaObjetivoMetaN3[1].octreg),
                    xnoviembre2023: UndefinedToZero (n3.listaObjetivoMetaN3[1].novreg),
                    xdiciembre2023: UndefinedToZero (n3.listaObjetivoMetaN3[1].dicreg),

                    enero2024:     UndefinedToZero (n3.listaObjetivoMetaN3[2].ene),
                    febrero2024:   UndefinedToZero (n3.listaObjetivoMetaN3[2].feb),
                    marzo2024:     UndefinedToZero (n3.listaObjetivoMetaN3[2].mar),
                    abril2024:     UndefinedToZero (n3.listaObjetivoMetaN3[2].abr),
                    mayo2024:      UndefinedToZero (n3.listaObjetivoMetaN3[2].may),
                    junio2024:     UndefinedToZero (n3.listaObjetivoMetaN3[2].jun),
                    julio2024:     UndefinedToZero (n3.listaObjetivoMetaN3[2].jul),
                    agosto2024:    UndefinedToZero (n3.listaObjetivoMetaN3[2].ago),
                    setiembre2024: UndefinedToZero (n3.listaObjetivoMetaN3[2].sep),
                    octubre2024:   UndefinedToZero (n3.listaObjetivoMetaN3[2].oct),
                    noviembre2024: UndefinedToZero (n3.listaObjetivoMetaN3[2].nov),
                    diciembre2024: UndefinedToZero (n3.listaObjetivoMetaN3[2].dic),

                    xenero2024:     UndefinedToZero (n3.listaObjetivoMetaN3[2].enereg),
                    xfebrero2024:   UndefinedToZero (n3.listaObjetivoMetaN3[2].febreg),
                    xmarzo2024:     UndefinedToZero (n3.listaObjetivoMetaN3[2].marreg),
                    xabril2024:     UndefinedToZero (n3.listaObjetivoMetaN3[2].abrreg),
                    xmayo2024:      UndefinedToZero (n3.listaObjetivoMetaN3[2].mayreg),
                    xjunio2024:     UndefinedToZero (n3.listaObjetivoMetaN3[2].junreg),
                    xjulio2024:     UndefinedToZero (n3.listaObjetivoMetaN3[2].julreg),
                    xagosto2024:    UndefinedToZero (n3.listaObjetivoMetaN3[2].agoreg),
                    xsetiembre2024: UndefinedToZero (n3.listaObjetivoMetaN3[2].sepreg),
                    xoctubre2024:   UndefinedToZero (n3.listaObjetivoMetaN3[2].octreg),
                    xnoviembre2024: UndefinedToZero (n3.listaObjetivoMetaN3[2].novreg),
                    xdiciembre2024: UndefinedToZero (n3.listaObjetivoMetaN3[2].dicreg),
                    ppto2022:       UndefinedToZero (n3.listaObjetivoMetaN3[0].monto),
                    ppto2023:       UndefinedToZero (n3.listaObjetivoMetaN3[1].monto),
                    ppto2024:       UndefinedToZero (n3.listaObjetivoMetaN3[2].monto),
                    children: n3children
                })
                w=1;
                z++;
            }
            n1children.push({
                key:          Math.random(),
                indice:        x + '.' + y,
                nombre:        n2.objetivo,
                responsable:   null,
                um:            null,
                meta:          UndefinedToZero (
                    n2.listaObjetivoMetaN2[0].totalmetafisica +
                    n2.listaObjetivoMetaN2[1].totalmetafisica +
                    n2.listaObjetivoMetaN2[2].totalmetafisica),

                enero2022:     UndefinedToZero (n2.listaObjetivoMetaN2[0].ene),
                febrero2022:   UndefinedToZero (n2.listaObjetivoMetaN2[0].feb),
                marzo2022:     UndefinedToZero (n2.listaObjetivoMetaN2[0].mar),
                abril2022:     UndefinedToZero (n2.listaObjetivoMetaN2[0].abr),
                mayo2022:      UndefinedToZero (n2.listaObjetivoMetaN2[0].may),
                junio2022:     UndefinedToZero (n2.listaObjetivoMetaN2[0].jun),
                julio2022:     UndefinedToZero (n2.listaObjetivoMetaN2[0].jul),
                agosto2022:    UndefinedToZero (n2.listaObjetivoMetaN2[0].ago),
                setiembre2022: UndefinedToZero (n2.listaObjetivoMetaN2[0].sep),
                octubre2022:   UndefinedToZero (n2.listaObjetivoMetaN2[0].oct),
                noviembre2022: UndefinedToZero (n2.listaObjetivoMetaN2[0].nov),
                diciembre2022: UndefinedToZero (n2.listaObjetivoMetaN2[0].dic),

                xenero2022:     UndefinedToZero (n2.listaObjetivoMetaN2[0].enereg),
                xfebrero2022:   UndefinedToZero (n2.listaObjetivoMetaN2[0].febreg),
                xmarzo2022:     UndefinedToZero (n2.listaObjetivoMetaN2[0].marreg),
                xabril2022:     UndefinedToZero (n2.listaObjetivoMetaN2[0].abrreg),
                xmayo2022:      UndefinedToZero (n2.listaObjetivoMetaN2[0].mayreg),
                xjunio2022:     UndefinedToZero (n2.listaObjetivoMetaN2[0].junreg),
                xjulio2022:     UndefinedToZero (n2.listaObjetivoMetaN2[0].julreg),
                xagosto2022:    UndefinedToZero (n2.listaObjetivoMetaN2[0].agoreg),
                xsetiembre2022: UndefinedToZero (n2.listaObjetivoMetaN2[0].sepreg),
                xoctubre2022:   UndefinedToZero (n2.listaObjetivoMetaN2[0].octreg),
                xnoviembre2022: UndefinedToZero (n2.listaObjetivoMetaN2[0].novreg),
                xdiciembre2022: UndefinedToZero (n2.listaObjetivoMetaN2[0].dicreg),

                enero2023:     UndefinedToZero (n2.listaObjetivoMetaN2[1].ene),
                febrero2023:   UndefinedToZero (n2.listaObjetivoMetaN2[1].feb),
                marzo2023:     UndefinedToZero (n2.listaObjetivoMetaN2[1].mar),
                abril2023:     UndefinedToZero (n2.listaObjetivoMetaN2[1].abr),
                mayo2023:      UndefinedToZero (n2.listaObjetivoMetaN2[1].may),
                junio2023:     UndefinedToZero (n2.listaObjetivoMetaN2[1].jun),
                julio2023:     UndefinedToZero (n2.listaObjetivoMetaN2[1].jul),
                agosto2023:    UndefinedToZero (n2.listaObjetivoMetaN2[1].ago),
                setiembre2023: UndefinedToZero (n2.listaObjetivoMetaN2[1].sep),
                octubre2023:   UndefinedToZero (n2.listaObjetivoMetaN2[1].oct),
                noviembre2023: UndefinedToZero (n2.listaObjetivoMetaN2[1].nov),
                diciembre2023: UndefinedToZero (n2.listaObjetivoMetaN2[1].dic),

                xenero2023:     UndefinedToZero (n2.listaObjetivoMetaN2[1].enereg),
                xfebrero2023:   UndefinedToZero (n2.listaObjetivoMetaN2[1].febreg),
                xmarzo2023:     UndefinedToZero (n2.listaObjetivoMetaN2[1].marreg),
                xabril2023:     UndefinedToZero (n2.listaObjetivoMetaN2[1].abrreg),
                xmayo2023:      UndefinedToZero (n2.listaObjetivoMetaN2[1].mayreg),
                xjunio2023:     UndefinedToZero (n2.listaObjetivoMetaN2[1].junreg),
                xjulio2023:     UndefinedToZero (n2.listaObjetivoMetaN2[1].julreg),
                xagosto2023:    UndefinedToZero (n2.listaObjetivoMetaN2[1].agoreg),
                xsetiembre2023: UndefinedToZero (n2.listaObjetivoMetaN2[1].sepreg),
                xoctubre2023:   UndefinedToZero (n2.listaObjetivoMetaN2[1].octreg),
                xnoviembre2023: UndefinedToZero (n2.listaObjetivoMetaN2[1].novreg),
                xdiciembre2023: UndefinedToZero (n2.listaObjetivoMetaN2[1].dicreg),

                enero2024:     UndefinedToZero (n2.listaObjetivoMetaN2[2].ene),
                febrero2024:   UndefinedToZero (n2.listaObjetivoMetaN2[2].feb),
                marzo2024:     UndefinedToZero (n2.listaObjetivoMetaN2[2].mar),
                abril2024:     UndefinedToZero (n2.listaObjetivoMetaN2[2].abr),
                mayo2024:      UndefinedToZero (n2.listaObjetivoMetaN2[2].may),
                junio2024:     UndefinedToZero (n2.listaObjetivoMetaN2[2].jun),
                julio2024:     UndefinedToZero (n2.listaObjetivoMetaN2[2].jul),
                agosto2024:    UndefinedToZero (n2.listaObjetivoMetaN2[2].ago),
                setiembre2024: UndefinedToZero (n2.listaObjetivoMetaN2[2].sep),
                octubre2024:   UndefinedToZero (n2.listaObjetivoMetaN2[2].oct),
                noviembre2024: UndefinedToZero (n2.listaObjetivoMetaN2[2].nov),
                diciembre2024: UndefinedToZero (n2.listaObjetivoMetaN2[2].dic),

                xenero2024:     UndefinedToZero (n2.listaObjetivoMetaN2[2].enereg),
                xfebrero2024:   UndefinedToZero (n2.listaObjetivoMetaN2[2].febreg),
                xmarzo2024:     UndefinedToZero (n2.listaObjetivoMetaN2[2].marreg),
                xabril2024:     UndefinedToZero (n2.listaObjetivoMetaN2[2].abrreg),
                xmayo2024:      UndefinedToZero (n2.listaObjetivoMetaN2[2].mayreg),
                xjunio2024:     UndefinedToZero (n2.listaObjetivoMetaN2[2].junreg),
                xjulio2024:     UndefinedToZero (n2.listaObjetivoMetaN2[2].julreg),
                xagosto2024:    UndefinedToZero (n2.listaObjetivoMetaN2[2].agoreg),
                xsetiembre2024: UndefinedToZero (n2.listaObjetivoMetaN2[2].sepreg),
                xoctubre2024:   UndefinedToZero (n2.listaObjetivoMetaN2[2].octreg),
                xnoviembre2024: UndefinedToZero (n2.listaObjetivoMetaN2[2].novreg),
                xdiciembre2024: UndefinedToZero (n2.listaObjetivoMetaN2[2].dicreg),
                ppto2022:       UndefinedToZero (n2.listaObjetivoMetaN2[0].monto),
                ppto2023:       UndefinedToZero (n2.listaObjetivoMetaN2[1].monto),
                ppto2024:       UndefinedToZero (n2.listaObjetivoMetaN2[2].monto),
                children:       n2children
            })
            z=1;
            w=1;
            y++;
        }
        results.push({
            key:          Math.random(),
            indice:        x,
            nombre:        n1.objetivo,
            responsable:   null,
            um:            null,
            meta:          UndefinedToZero (
                n1.listaObjetivoMetaN1[0].totalmetafisica +
                n1.listaObjetivoMetaN1[1].totalmetafisica +
                n1.listaObjetivoMetaN1[2].totalmetafisica),

            enero2022:     UndefinedToZero (n1.listaObjetivoMetaN1[0].ene),
            febrero2022:   UndefinedToZero (n1.listaObjetivoMetaN1[0].feb),
            marzo2022:     UndefinedToZero (n1.listaObjetivoMetaN1[0].mar),
            abril2022:     UndefinedToZero (n1.listaObjetivoMetaN1[0].abr),
            mayo2022:      UndefinedToZero (n1.listaObjetivoMetaN1[0].may),
            junio2022:     UndefinedToZero (n1.listaObjetivoMetaN1[0].jun),
            julio2022:     UndefinedToZero (n1.listaObjetivoMetaN1[0].jul),
            agosto2022:    UndefinedToZero (n1.listaObjetivoMetaN1[0].ago),
            setiembre2022: UndefinedToZero (n1.listaObjetivoMetaN1[0].sep),
            octubre2022:   UndefinedToZero (n1.listaObjetivoMetaN1[0].oct),
            noviembre2022: UndefinedToZero (n1.listaObjetivoMetaN1[0].nov),
            diciembre2022: UndefinedToZero (n1.listaObjetivoMetaN1[0].dic),

            xenero2022:     UndefinedToZero (n1.listaObjetivoMetaN1[0].enereg),
            xfebrero2022:   UndefinedToZero (n1.listaObjetivoMetaN1[0].febreg),
            xmarzo2022:     UndefinedToZero (n1.listaObjetivoMetaN1[0].marreg),
            xabril2022:     UndefinedToZero (n1.listaObjetivoMetaN1[0].abrreg),
            xmayo2022:      UndefinedToZero (n1.listaObjetivoMetaN1[0].mayreg),
            xjunio2022:     UndefinedToZero (n1.listaObjetivoMetaN1[0].junreg),
            xjulio2022:     UndefinedToZero (n1.listaObjetivoMetaN1[0].julreg),
            xagosto2022:    UndefinedToZero (n1.listaObjetivoMetaN1[0].agoreg),
            xsetiembre2022: UndefinedToZero (n1.listaObjetivoMetaN1[0].sepreg),
            xoctubre2022:   UndefinedToZero (n1.listaObjetivoMetaN1[0].octreg),
            xnoviembre2022: UndefinedToZero (n1.listaObjetivoMetaN1[0].novreg),
            xdiciembre2022: UndefinedToZero (n1.listaObjetivoMetaN1[0].dicreg),

            enero2023:     UndefinedToZero (n1.listaObjetivoMetaN1[1].ene),
            febrero2023:   UndefinedToZero (n1.listaObjetivoMetaN1[1].feb),
            marzo2023:     UndefinedToZero (n1.listaObjetivoMetaN1[1].mar),
            abril2023:     UndefinedToZero (n1.listaObjetivoMetaN1[1].abr),
            mayo2023:      UndefinedToZero (n1.listaObjetivoMetaN1[1].may),
            junio2023:     UndefinedToZero (n1.listaObjetivoMetaN1[1].jun),
            julio2023:     UndefinedToZero (n1.listaObjetivoMetaN1[1].jul),
            agosto2023:    UndefinedToZero (n1.listaObjetivoMetaN1[1].ago),
            setiembre2023: UndefinedToZero (n1.listaObjetivoMetaN1[1].sep),
            octubre2023:   UndefinedToZero (n1.listaObjetivoMetaN1[1].oct),
            noviembre2023: UndefinedToZero (n1.listaObjetivoMetaN1[1].nov),
            diciembre2023: UndefinedToZero (n1.listaObjetivoMetaN1[1].dic),

            xenero2023:     UndefinedToZero (n1.listaObjetivoMetaN1[1].enereg),
            xfebrero2023:   UndefinedToZero (n1.listaObjetivoMetaN1[1].febreg),
            xmarzo2023:     UndefinedToZero (n1.listaObjetivoMetaN1[1].marreg),
            xabril2023:     UndefinedToZero (n1.listaObjetivoMetaN1[1].abrreg),
            xmayo2023:      UndefinedToZero (n1.listaObjetivoMetaN1[1].mayreg),
            xjunio2023:     UndefinedToZero (n1.listaObjetivoMetaN1[1].junreg),
            xjulio2023:     UndefinedToZero (n1.listaObjetivoMetaN1[1].julreg),
            xagosto2023:    UndefinedToZero (n1.listaObjetivoMetaN1[1].agoreg),
            xsetiembre2023: UndefinedToZero (n1.listaObjetivoMetaN1[1].sepreg),
            xoctubre2023:   UndefinedToZero (n1.listaObjetivoMetaN1[1].octreg),
            xnoviembre2023: UndefinedToZero (n1.listaObjetivoMetaN1[1].novreg),
            xdiciembre2023: UndefinedToZero (n1.listaObjetivoMetaN1[1].dicreg),

            enero2024:     UndefinedToZero (n1.listaObjetivoMetaN1[2].ene),
            febrero2024:   UndefinedToZero (n1.listaObjetivoMetaN1[2].feb),
            marzo2024:     UndefinedToZero (n1.listaObjetivoMetaN1[2].mar),
            abril2024:     UndefinedToZero (n1.listaObjetivoMetaN1[2].abr),
            mayo2024:      UndefinedToZero (n1.listaObjetivoMetaN1[2].may),
            junio2024:     UndefinedToZero (n1.listaObjetivoMetaN1[2].jun),
            julio2024:     UndefinedToZero (n1.listaObjetivoMetaN1[2].jul),
            agosto2024:    UndefinedToZero (n1.listaObjetivoMetaN1[2].ago),
            setiembre2024: UndefinedToZero (n1.listaObjetivoMetaN1[2].sep),
            octubre2024:   UndefinedToZero (n1.listaObjetivoMetaN1[2].oct),
            noviembre2024: UndefinedToZero (n1.listaObjetivoMetaN1[2].nov),
            diciembre2024: UndefinedToZero (n1.listaObjetivoMetaN1[2].dic),

            xenero2024:     UndefinedToZero (n1.listaObjetivoMetaN1[2].enereg),
            xfebrero2024:   UndefinedToZero (n1.listaObjetivoMetaN1[2].febreg),
            xmarzo2024:     UndefinedToZero (n1.listaObjetivoMetaN1[2].marreg),
            xabril2024:     UndefinedToZero (n1.listaObjetivoMetaN1[2].abrreg),
            xmayo2024:      UndefinedToZero (n1.listaObjetivoMetaN1[2].mayreg),
            xjunio2024:     UndefinedToZero (n1.listaObjetivoMetaN1[2].junreg),
            xjulio2024:     UndefinedToZero (n1.listaObjetivoMetaN1[2].julreg),
            xagosto2024:    UndefinedToZero (n1.listaObjetivoMetaN1[2].agoreg),
            xsetiembre2024: UndefinedToZero (n1.listaObjetivoMetaN1[2].sepreg),
            xoctubre2024:   UndefinedToZero (n1.listaObjetivoMetaN1[2].octreg),
            xnoviembre2024: UndefinedToZero (n1.listaObjetivoMetaN1[2].novreg),
            xdiciembre2024: UndefinedToZero (n1.listaObjetivoMetaN1[2].dicreg),
            ppto2022:       UndefinedToZero (n1.listaObjetivoMetaN1[0].monto),
            ppto2023:       UndefinedToZero (n1.listaObjetivoMetaN1[1].monto),
            ppto2024:       UndefinedToZero (n1.listaObjetivoMetaN1[2].monto),
            children:       n1children
        })
        y=1;
        z=1;
        y=1;
        x++
    }
    return results
}

function Component() {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null)
    const [cellData, setCellData] = useState<any>(null)
    const [files, setFiles] = useState<any>([]);

    //let db = new PouchDB('poi_database');
    const meses: { [key: string]: any } = {
        'enero': 1,
        'febrero': 2,
        'marzo': 3,
        'abril': 4,
        'mayo': 5,
        'junio': 6,
        'julio': 7,
        'agosto': 8,
        'setiembre': 9,
        'octubre': 10,
        'noviembre': 11,
        'diciembre': 12
    }

    console.log('celldata')
    console.log(cellData)

    const readData = async () => {
        console.log('READDATA')
        let response = await axios.post(import.meta.env.VITE_BASE_ENDPOINT_URL  + 'listar-actividades', {
            "dato":{
                "idusuarioResponsable":1
            }
        })
        console.log('RESPONSE READDATA');
        //console.log(TransformJSON(response.data.dato[0]))
        // @ts-ignore
        setData(TransformJSON(response?.data?.dato[0]))

    }

    useEffect(() => {
        readData()
    }, [])

    useEffect(() => {
        if (data) setLoading(false)
    }, [data])

    useEffect(() => {
        setFiles([])
    }, [visible])

    const showDrawer = async (e: any, i: any, text: any) => {
        if (i.indice.split('.').length == 4) {
            console.log(e)
            const year = e.substring(e.length - 4, e.length)
            const month = e.substring(0, e.length - 4)
            console.log(i['id' + year])
            // @ts-ignore
            console.log(meses[month])
            try {

                const response = await axios.post(import.meta.env.VITE_BASE_ENDPOINT_URL + 'listar-acciones', {
                    dato: {
                        idactividadperiodo: i['id' + year],
                        // @ts-ignore
                        mes: meses[month],
                    }
                })
                console.log(i)
                setCellData({
                    title: e,
                    data: i,
                    text: text,
                    cards: response.data.dato
                })


                console.log('File Total: ' + response.data.dato.length)
                console.log('Text: ' + text)

                // for await (let num of response.data.dato) {
                //     console.log('xxx')
                //     console.log(num)
                //     if (num.estado == 'Pendiente de Validación') {
                //         console.log("R3")
                //         let response3 = await axios.post(import.meta.env.VITE_BASE_ENDPOINT_URL  + 'evaluar-accion', {
                //             "dato":{
                //                 "idactividadmetaaccion": num.idactividadmetaaccion,
                //                 "observacion": "",
                //                 "validado": 0,
                //                 "idusuarioreg": 1
                //             }
                //         })
                //         console.log(response3)
                //     }
                // }


                setVisible(true);

            } catch
                (e) {
                console.log(e)
            }
        }
    }

    const onClose = () => {
        setVisible(false);
    }

    const handleApprove = async (card: any) => {
        console.log('approve')
        let response3 = await axios.post(import.meta.env.VITE_BASE_ENDPOINT_URL  + 'evaluar-accion', {
            "dato":{
                "idactividadmetaaccion": card.idactividadmetaaccion,
                "observacion": "",
                "validado": 1,
                "idusuarioreg": 1
            }
        })
        await readData()
    }

    const handleDenied = async (card: any) => {
        console.log('approve')
        let response3 = await axios.post(import.meta.env.VITE_BASE_ENDPOINT_URL  + 'evaluar-accion', {
            "dato":{
                "idactividadmetaaccion": card.idactividadmetaaccion,
                "observacion": "Observado",
                "validado": 0,
                "idusuarioreg": 1
            }
        })
        await readData()
    }

    const handleDeleted = async (card: any) => {
        console.log('delete')
        let response3 = await axios.post(import.meta.env.VITE_BASE_ENDPOINT_URL  + 'evaluar-accion', {
            "dato":{
                "idactividadmetaaccion": card.idactividadmetaaccion,
                "observacion": "Eliminado",
                "validado": 0,
                "idusuarioreg": 1
            }
        })
        await readData()
    }

    let cards = null
    if (cellData?.cards) {
        cards = cellData.cards.map((card: any) => {
            return (
                <Card
                    style={{width: 330, marginBottom: '20px', textAlign: 'center', borderRadius: '8px'}}
                    cover={
                    <a href={card.archivopresentado} target="_blank">
                        <img
                            alt="example"
                            src="assets/pdf.jpg"
                            style={{width: '40%', margin: '0 auto', transform: 'rotate(6deg)', paddingTop: '30px'}}
                        />
                    </a>
                    }
                >
                    {/*<div className={style.cardTitle}>{JSON.stringify(card)}</div>*/}
                    <div className={style.cardTitle}>{card.accion}</div>
                    <div className={style.cardSubTitle} style={{color: "red"}}>{card.observacion}</div>
                    {(card.estado == 'Observado') &&
                    <Row gutter={16} align="middle" justify="center" style={{marginTop: '30px'}}>
                            <Button icon={<DeleteOutlined />} size="large" style={{backgroundColor: '#044f9a', color: 'white', margin: '10px'}} onClick={() => { handleDeleted(card)  }}></Button>
                        {/*<Col className="gutter-row" span={8}>*/}
                            <Button icon={<CloseCircleOutlined />} size="large" style={{backgroundColor: '#d50000', color: 'white', margin: '10px'}} onClick={() => { handleDenied(card)  }}></Button>
                        {/*</Col>*/}
                        {/*<Col className="gutter-row" span={8}>*/}
                            <Button icon={<CheckCircleOutlined />}  size="large" style={{backgroundColor: '#005b10', color: 'white', margin: '10px'}} onClick={() => { handleApprove(card)  }}></Button>
                        {/*</Col>*/}
                    </Row>}
                </Card>)
        })
    }
    // @ts-ignore
    //const dummyRequest = ({ file, onSuccess }) =>
    const dummyRequest = options => {
        const { onSuccess, onError, file, onProgress } = options;
        console.log('dummyRequest')
        const reader = new FileReader()
        reader.onloadend = () => {
            setFiles(
                [
                    ...files,
                    {
                        uid: (new Date()).getMilliseconds(),
                        name: file.name,
                        status: 'done',
                        url: reader.result,
                        file: file,
                    }
                ]
            )
        }
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async () => {
        try {
            console.log('handleSubmit')
            console.log(files[0])
            console.log('celldata')
            console.log(cellData)

            let form = new FormData()
            form.append('codigoapp', '40')
            form.append('tag', '2')
            form.append('archivos', files[0].file)
            const response = await axios.post(import.meta.env.VITE_UPLOAD_URL, form, {
                headers: {'Content-Type': 'multipart/form-data'}
            })
            console.log(response)

            const year   = cellData.title.substring(cellData.title.length - 4,  cellData.title.length)
            // @ts-ignore
            const month  = cellData.title.substring(0, cellData.title.length - 4)
            if (response.status == 200) {
                // @ts-ignore
                const response2 = await axios.post(import.meta.env.VITE_BASE_ENDPOINT_URL + 'procesar-accion', {
                    dato: {
                        idactividadperiodo: cellData.data['id' + year],
                        mes: meses[month],
                        archivo: response.data[0].url,
                        accion: files[0].name,
                        idusuarioreg: "1"
                    }
                })
                console.log("RESPONSE2")
                console.log(response2)
                // @ts-ignore
                const response3 = await axios.post(import.meta.env.VITE_BASE_ENDPOINT_URL + 'listar-acciones', {
                    dato: {
                        idactividadperiodo: cellData.data['id' + year],
                        mes: meses[month],
                    }
                })
                for await (let num of response3.data.dato) {
                    if (num.estado == 'Pendiente de Validación') {
                        console.log('yyy')
                        let response3 = await axios.post(import.meta.env.VITE_BASE_ENDPOINT_URL  + 'evaluar-accion', {
                            "dato":{
                                "idactividadmetaaccion": num.idactividadmetaaccion,
                                "observacion": "",
                                "validado": 0,
                                "idusuarioreg": 1
                            }
                        })
                        console.log(response3)
                    }
                }
            }
            setLoading(true)
            await readData()
        }
        catch (e) {

        }
    }

    console.log('DATA')
    console.log(data)
    let emptyItems = []

    const onSuccess = () => {
        console.log('xyz')
    }


    for (let i=0; i<1; i++) {
        // @ts-ignore
        emptyItems.push(
            <Card
                className={style.ecocard}
                style={{width: 330, marginBottom: '20px', paddingBottom: '0'}}
            >
                <Form
                    layout='vertical'
                >
                    <Form.Item>
                        <Form.Item name="dragger" valuePropName="file"  noStyle>
                            <Upload
                                //accept={accept}
                                customRequest={dummyRequest}
                                fileList={[]}
                            >
                                <Button block={true} icon={<UploadOutlined />}>{files.length?files[0].name:'Subir archivo...'}</Button>
                            </Upload>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary" htmlType="submit" block onClick={handleSubmit}>ENVIAR</Button>
                    </Form.Item>
                </Form>
            </Card>
        )
    }


    return (
        <div className={style.component}>
            <div className={style.title}>
                Plan Operativo Institucional
            </div>
            <div className={style.logo}>
                <img src="assets/logo.png" style={{height: '100%'}}/>
            </div>
            <div className={style.container}>
                <Table handleCellClick={showDrawer} data={data}/>
                <Drawer placement="right" onClose={onClose} visible={visible} closeIcon={null}>
                    <div className={style.drawerTitle}>{cellData?.data?.nombre}</div>
                    <div className={style.drawerSubTitle}>{cellData?.title}</div>

                    {cards}
                    {emptyItems}
                </Drawer>
            </div>
            {loading && <div className={style.loader}>
                <Spin indicator={antIcon} />;
            </div>}
        </div>
    )
}

export default Component
