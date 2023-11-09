import React from 'react';
import Layout from '@theme/Layout';
import ReactFlow from 'reactflow';
import OverviewFlow from '../flow/my-flow';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
      <div style={{width:"1000px", height: "800px"}}>
      </div>
    </Layout>
  );
}
