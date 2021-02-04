import React from 'react';
import ReactDOM from 'react-dom';
// import styles from './Sider.module.css'
import 'antd/dist/antd.css';
import styless from './Sider.module.css'
import RightCard from './RightCards';
import {getAllCommunities} from './utils'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Navbar from '../navbar/Navbar';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export const Sidebar = () => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [showResults, setShowResults] = React.useState(true)
    
    const [data, setData] = React.useState([])
    const hide = () => {
        setShowResults(!showResults)
        
    }
    const getData =() => {
        getAllCommunities()
        .then((res) => {
            setData(res.data[0].AllCommunities)
            console.log(res.data[0].AllCommunities)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    // React.useEffect(() => {
    //     console.log(showResults)
    
    //   },[showResults]);
    return(
        <>
            <Layout >
                <Navbar/>
            <Header style={{backgroundColor:"white",height:"100px"}}>
                <h3 style={{marginLeft:"150px"}}>Today's Top Growing Communities</h3>
            </Header>
  <Content style={{ padding: '0 50px' ,marginLeft:"150px"}}>
 
    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
      <Sider className="site-layout-background" width={200}>
        <Menu
           
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%',color:'black' }}
        >
          {/* <SubMenu key="sub1"  title=""> */}
          
            <Menu.Item className={styless.heading} key="sub1">Catogery</Menu.Item>
            <Menu.Item key="2" onClick={getData}>All Communities</Menu.Item>
            <Menu.Item key="3">Near You</Menu.Item>
            <Menu.Item key="4">Sports</Menu.Item>
            <Menu.Item key="5">Gaming</Menu.Item>
            <Menu.Item key="6">Aww</Menu.Item>
            <Menu.Item key="7">Memes</Menu.Item>
          {/* </SubMenu> */}
          <SubMenu className={showResults ? styless.btn : styless.btn} onTitleClick={hide} id='show' key="sub2"  title= {showResults? "Showmore": 'Showless'}> 
         
               <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
      
          
              
            </SubMenu>
        
      
        </Menu>
      </Sider>
      <Content style={{ padding: '0 24px', minHeight: 280 }}>
      <div className={styless.cards}>
               {
                   data?.map((item , i) => (
                      
                    <div>{item.id}

                    <i className="fa fa-caret-up" style={{fontsize: "48px" ,color: "green"}}></i>
                    
                    <img src={item.img} alt="photos"/>

                    {item.title} </div>  
                   ))
               }
                
            </div>
         
      </Content>

      <RightCard/>

    </Layout>
    
  </Content>
  <Footer style={{ textAlign: 'center' }}></Footer>
</Layout>,
        </>
    )
}
  

