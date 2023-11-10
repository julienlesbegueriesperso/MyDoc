
import React from 'react'
import Photo from '../components/Phototherapy';
import GenericPage from './generic-page';

export default function HomeRoot(props) {
    
    return (<GenericPage children={<Photo/>}></GenericPage>)
}
