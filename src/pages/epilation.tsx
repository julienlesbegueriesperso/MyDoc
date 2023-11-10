
import React from 'react'
import Epilation from '../components/Epilation';
import GenericPage from './generic-page';

export default function AppointmentRoot(props) {
    
    return (<GenericPage children={<Epilation/>}></GenericPage>)
}
