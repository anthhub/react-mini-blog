import React from 'react';
// import Navigation from './Navigation';
import Profile from './Profile';
import Password from './Password';
import { Wrapper } from './style';

// 被选中的导航栏标签序号（从 0 开始）默认为 0
const activeTag: number = 0;

const getView = (tag: number) => {
	switch (tag) {
		case 0:
			return <Profile />;
		case 1:
			return <Password />;
	}
};

const Settings: React.FC = (props) => {
	return (
		<Wrapper>
			{/* 第一版只做个人资料页面 不显示导航栏 若要加导航栏 记得改 Profile 组件的 margin-top */}
			{/* <Navigation /> */}
			{getView(activeTag)}
		</Wrapper>
	);
};

export default Settings;
