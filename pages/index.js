import { Button, Layout, Typography } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {getCookie} from 'cookies-next'
import { useEffect } from 'react';

const {Title,Text} = Typography;

const Home = () => {
    let user = getCookie('user')
    let router = useRouter()

    useEffect(()=>{
        if(user){
            router.back()
        }
    },[router])
    
    return (
        <>
            <div>
                <div className='landing-header'>
                    <Layout.Header className='wrapper' style={{background:'none',color:'#fff',padding:0,display:'flex',justifyContent:'space-between'}}>
                        <div style={{fontSize:'1.5rem'}}>
                            <Link href="/dashboard">
                                <strong style={{ fontWeight: 'bold' }}>Contact+ V2</strong>
                            </Link>
                        </div>
                        <div style={{width:'50%',display:'flex',alignItems:'center',justifyContent:'flex-end'}}>
                            <Button onClick={()=>router.push('/login')}>Login</Button>
                        </div>
                    </Layout.Header>
                </div>
                
            </div>
        </>

    )
}
export default Home;