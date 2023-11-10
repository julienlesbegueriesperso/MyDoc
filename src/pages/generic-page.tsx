
import React from 'react'
import Layout from '@theme/Layout';
import { Typography } from '@mui/material';

export default function GenericPage(props) {
    
    return (<Layout>
        {props.children}
        </Layout>)
}
