
import {lazy, Suspense} from 'react'
import Layout from '@theme/Layout';
import { Typography } from '@mui/material';
import BrowserOnly from '@docusaurus/BrowserOnly';
// import { Home } from '../components/Home';
const HomeComponent = lazy(() => import("../components/Home"));

export default function HomeRoot(props) {
    
    return (<Layout>
        <Suspense fallback={<Typography>Loading ....</Typography>}>
         <BrowserOnly>{() => {
             return <HomeComponent></HomeComponent>;
         }}</BrowserOnly>
      </Suspense>
       
        </Layout>)
}