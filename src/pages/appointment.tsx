
import React from 'react'
import Appointment from '../components/Appointment';
import GenericPage from './generic-page';

export default function AppointmentRoot(props) {    
    return (<GenericPage children={<Appointment/>}></GenericPage>)
}
