
import React from 'react'
import Team from '../components/Team';
import GenericPage from './generic-page';

export default function HomeRoot(props) {
    
    return (<GenericPage children={<Team/>}></GenericPage>)
}
