import React from 'react';

import 'antd/dist/antd.css';
import styless from './Sider.module.css';
import { getAllCommunities, getNearYou } from './utils';
import { Layout, Menu } from 'antd';

import RightCards from './RightCards';
import Navbar from './navbar/Navbar';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export const Sidebar = () => {
	const [isLoading, setIsLoading] = React.useState(false);
	const [showResults, setShowResults] = React.useState(true);
	const [data, setData] = React.useState([]);
	const hide = () => {
		setShowResults(!showResults);
	};
	const getData = () => {
		getAllCommunities()
			.then((res) => {
				setData(res.data[0].AllCommunities);
				console.log(res.data[0].AllCommunities);
			})
			.catch((err) => {
				console.log(err);
			});
    };
    const getNearYou = () => {
		getAllCommunities()
			.then((res) => {
                console.log(res)
                setData([])
				setData(res.data[0].Near_You);
				
			})
			.catch((err) => {
				console.log(err);
			});
    };
    const getSportsData = () => {
		getAllCommunities()
			.then((res) => {
                console.log(res.data)
                setData([])
                setData(res.data[0].Sports);
                
				
			})
			.catch((err) => {
				console.log(err);
			});
    };
    const getGamingData = () => {
		getAllCommunities()
			.then((res) => {
                console.log(res.data)
                setData([])
                setData(res.data[0].Gaming);
                
				
			})
			.catch((err) => {
				console.log(err);
			});
    };
    const getNewsData = () => {
		getAllCommunities()
			.then((res) => {
                console.log(res.data)
                setData([])
                setData(res.data[0].News);
                
				
			})
			.catch((err) => {
				console.log(err);
			});
    };
    const getMemesData = () => {
		getAllCommunities()
			.then((res) => {
                console.log(res.data)
                setData([])
                setData(res.data[0].Meme);
                
				
			})
			.catch((err) => {
				console.log(err);
			});
    };
	
	return (
		<>
			<Layout>
				<Navbar />
				<Header style={{ backgroundColor: 'white', height: '100px' }}>
					<h3 style={{ marginLeft: '150px',marginBottom: 0 }}>
						Today's Top Growing Communities
					</h3>
                    <p style={{ marginLeft: '150px' }}>Browse Reddit's top growing communities. Find the top communities in your favorite category.</p>
				</Header>
				<Content style={{ padding: '0 50px', marginLeft: '150px' }}>
					<Layout
						className='site-layout-background'
						style={{ padding: '24px 0' }}
					>
						<Sider className='site-layout-background' width={200}>
							<Menu
								mode='inline'
								defaultSelectedKeys={['1']}
								defaultOpenKeys={['sub1']}
								style={{ height: '100%', color: 'black' }}
							>
								{/* <SubMenu key="sub1"  title=""> */}

								<Menu.Item className={styless.heading} key='sub1'>
									Catogery
								</Menu.Item>
								<Menu.Item key='2' onClick={getData}>
									All Communities
								</Menu.Item>
								<Menu.Item key='3' onClick={getNearYou}>
                                    Near You</Menu.Item>
								<Menu.Item key='4' onClick={getSportsData}>
                                    Sports</Menu.Item>
								<Menu.Item key='5' onClick={getGamingData}>
                                    Gaming</Menu.Item>
								<Menu.Item key='6' onClick={getNewsData}>
                                    News</Menu.Item>
								<Menu.Item key='7' onClick={getMemesData}>
                                    Memes</Menu.Item>
								{/* </SubMenu> */}
								<SubMenu
									className={showResults ? styless.btn : styless.btn}
									onTitleClick={hide}
									id='show'
									key='sub2'
									title={showResults ? 'Showmore' : 'Showless'}
								>
									<Menu.Item key='5'>Music</Menu.Item>
									<Menu.Item key='6'>Travel</Menu.Item>
									<Menu.Item key='7'>Tech</Menu.Item>
									<Menu.Item key='8'>Memes</Menu.Item>
								</SubMenu>
							</Menu>
						</Sider>
						<Content style={{ padding: '0 24px', minHeight: 280 }}>
							<div className={styless.cards}>
                               {data.length !== 0? <div style={{height: "35px",paddingTop: 0,backgroundColor: "rgb(231, 231, 231)"}}>Today's Top Growing Communities</div>: null}
								{data?.map((item, i) => (
                                  <>
									<div>
                                         
										{item.id}
										<i
											className='fa fa-caret-up'
											style={{ fontsize: '48px', color: 'green' }}
										></i>

                                         <div className={styless.details}>
                                            <img className={styless.icons} src={item.img} alt='photos' /> 
                                            <span>{item.title}</span>
                                            <div style={{display:"flex"}}>
                                                <div className={styless.members}>
                                                    <p>{item.members}</p><br/>
                                                    Members
                                                    </div>

                                                <div className={styless.online}>
                                                    <p>{item.online}</p><br/>
                                                    Online
                                                </div>
                                            
                                            </div>
                                            <br/>
                                                 <div className={styless.tagline}>
                                                    <p>{item.tagline}</p>
                                                </div>
                                            <button
                                                // onClick={() => }
                                                className={styless.see_all_btn}
                                            >
                                                View Community
                                                </button>   
                                         </div>

										<img className={styless.icons} src={item.img} alt='photos' />

										<span>{item.title}</span>{' '}
									</div>
                                    
                                    </>
								))}
							</div>
						</Content>

						<RightCards />
					</Layout>
				</Content>
			</Layout>
		</>
	);
};
