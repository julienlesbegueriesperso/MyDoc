
import React from 'react'
import Layout from '@theme/Layout';
import { Typography } from '@mui/material';
import Team from '../components/Team';
import Appointment from '../components/Appointment';

export default function AppointmentRoot(props) {
    
    return (<Layout>
        <Appointment></Appointment>
        </Layout>)
}
