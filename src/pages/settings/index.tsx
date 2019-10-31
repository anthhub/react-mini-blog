import React from 'react';
import Navigation from './Navigation';
import Main from './Main';
import { Wrapper } from './style';

const Settings: React.FC = (props) => {
	return (
		<Wrapper>
			<Navigation />
			<Main />
		</Wrapper>
	);
};

export default Settings;
