import Head from "next/head";
import HeaderComponent from "./HeaderComponent";
import { Layout } from 'antd'
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getCookie } from 'cookies-next';


const { Content, Footer } = Layout;


export default function Main({ children }) {
    const [isAuthorize,setIsAuthorize] = useState(false)

    let router = useRouter()
    
    useEffect(() => {
        let user = getCookie('user')
        
        if(user) setIsAuthorize(true)
        else setIsAuthorize(false)

    }, [router])
    
    return (
        <>
            {isAuthorize ? <Layout style={{ minHeight: '100vh' }}>
                <Head>
                    <title>Contact+ V2</title>
                </Head>
                <HeaderComponent />
                <Content
                    style={{
                        padding: '0 50px',
                        margin: '16px 0',
                    }}
                >
                    <Layout
                        className={router.pathname !== '/login' && "site-layout-background"}
                        style={{
                            padding: '24px 0',
                            minHeight: 280
                        }}
                    >
                        <Content>
                            {children}
                        </Content>
                    </Layout>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Powered by Telecard Limited.
                </Footer>
            </Layout> : <div>
                <Head>
                    <title>Contact+ V2</title>
                </Head>
                {children}
            </div>}
        </>
    )
}
