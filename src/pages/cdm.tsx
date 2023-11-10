
import React from 'react'
import CDM from '../components/CDM';
import GenericPage from './generic-page';

export default function AppointmentRoot(props) {
    
    return (<GenericPage children={<CDM/>}></GenericPage>)
}
