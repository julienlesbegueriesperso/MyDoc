
import React from 'react'
import Information from '../components/Information';
import GenericPage from './generic-page';

export default function InfoRoot(props) {    
    return (<GenericPage children={<Information/>}></GenericPage>)
}
