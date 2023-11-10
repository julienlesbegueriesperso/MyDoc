
import React from 'react'
import Nails from '../components/Nails';
import GenericPage from './generic-page';

export default function AppointmentRoot(props) {
    
    return (<GenericPage children={<Nails/>}></GenericPage>)
}
