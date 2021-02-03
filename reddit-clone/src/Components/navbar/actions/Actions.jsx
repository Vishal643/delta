import React from 'react';

import './Actions.css';
// import Button from "../../button/Button";

import PersonIcon from '@material-ui/icons/Person';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Button } from '@material-ui/core';

export default function Actions() {
	return (
		<div className='actions'>
			<Button variant='outlined' color='primary'>
				Login
			</Button>
			<Button variant='contained' color='primary'>
				SIGN UP
			</Button>

			<div className='profile'>
				<PersonIcon className='hoverable' />
				<ArrowDropDownIcon className='hoverable' />
			</div>
		</div>
	);
}
