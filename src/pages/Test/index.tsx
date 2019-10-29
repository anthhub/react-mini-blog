import React from 'react';
import logo from '../../statics/logo.svg';
import './App.css';

import { useRedux } from '@/redux/context';
import { Button } from 'antd';
import { useLocation, useParams } from 'react-router-dom';

const Test: React.FC = () => {
	const { init, dispatch, count } = useRedux();

	const parmas = useParams();
	const location = useLocation();

	console.log(
		'%c%s',
		'color: #20bd08;font-size:15px',
		'===TQY===: Test:React.FC -> parmas',
		{ parmas },
		{ location }
	);

	console.log('%c%s', 'color: #f2ceb6', init, dispatch, count);
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React {init} -- {count}
				</a>
				<Button type="danger" onClick={() => dispatch({ type: 'ADD' })}>
					+
				</Button>
				<Button type="danger" onClick={() => dispatch({ type: 'SUB' })}>
					-
				</Button>
			</header>
		</div>
	);
};

export default Test;
