import React from 'react';
import Layout from './Layout';
import Tasks from './Tasks';
import Form from './Form';

export default function App() {
    return (
        <Layout>
            <Tasks />
            {/* <Form /> */}
        </Layout>
    );
}
