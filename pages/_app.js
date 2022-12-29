import { useEffect, useState } from 'react';
import { Router } from 'next/router';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import Main from '../components/Main'
import '../styles/App.less'
import '../styles/globals.css'
import '../styles/landing.css'

function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        Router.events.on('routeChangeStart', () => setLoading(true));
        Router.events.on('routeChangeComplete', () => setLoading(false));
        Router.events.on('routeChangeError', () => setLoading(false));
        return () => {
            Router.events.off('routeChangeStart', () => setLoading(true));
            Router.events.off('routeChangeComplete', () => setLoading(false));
            Router.events.off('routeChangeError', () => setLoading(false));
        };
    }, [Router.events]);

    return (
        <Main>
            {loading ? <LoaderComponent/> : <Component {...pageProps} />}
        </Main>
    )
}

const LoaderComponent = () =>{
    return (
        <div style={{height:'50vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Spin size='large' indicator={<LoadingOutlined/>}/>
        </div>
    )
}

export default MyApp
