import React from 'react';
import Navigation from './Navigation';
import Profile from './Profile';
import { Wrapper } from './style';

// 被选中的导航栏标签序号（从 0 开始）
const activeTag: number = 0;

const getView = (tag: number) => {
	switch (tag) {
		case 0:
			return <Profile />;
		case 1:
			return <Profile />;
	}
};

const Settings: React.FC = (props) => {
	return (
		<Wrapper>
			<Navigation />
			{getView(activeTag)}
		</Wrapper>
	);
};

export default Settings;
