import { Menu } from 'antd';
import React from 'react';
import style from './Sider.module.css';
const { Item } = Menu;

//item2 will be rendered with the class 'ant-menu-item-selected'
export const MyComp = () => (
	<Menu theme='dark' defaultSelectedKeys={['item2']} mode='horizontal'>
		<Item style={{}} className='customclass' key='item1'>
			Item 1
		</Item>
		<Item key='item2'>Item 2</Item>
	</Menu>
);
