
import {lazy, Suspense} from 'react'
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
// import { Home } from '../components/Home';
const DynamicComponent = lazy(() => import("../components/Home"));

export default function HomeRoot(props) {
    
    return (<Layout>
        <Suspense fallback={() => <Text>Loading ....</Text>}>
        {/* <DynamicComponent /> */}
         <BrowserOnly>{() => {
             return <DynamicComponent></DynamicComponent>;
         }}</BrowserOnly>
      </Suspense>
       
        </Layout>)
}