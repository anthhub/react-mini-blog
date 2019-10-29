import React from 'react';

import Main from './Main';

import Header from './Header';

const Frame: React.FC = ({ children }) => {
	return (
		<div className="App">
			<Header />
			<Main> {children} </Main>
		</div>
	);
};

export default Frame;
