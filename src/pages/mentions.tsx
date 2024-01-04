import GenericPage from "./generic-page";
import Mentions  from '../components/Mentions';

export default function M(props) {
    return (<GenericPage children={
    <Mentions/>    
    }></GenericPage>)
}