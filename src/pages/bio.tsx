
import React from 'react'
import Biotherapies from '../components/Biotherapies';
import GenericPage from './generic-page';

export default function AppointmentRoot(props) {
    
    return (<GenericPage children={<Biotherapies/>}></GenericPage>)
}
