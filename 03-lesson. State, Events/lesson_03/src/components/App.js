import React from 'react';
import Layout from './Layout';
import Counter from './Counter';
import Tasks from './Tasks';

export default function App() {
    return (
        <Layout>
            {/* <Counter step={10} initialValue={5} /> */}
            <Tasks />
        </Layout>
    );
}

{
    /* <Counter />
new Counter() */
}
