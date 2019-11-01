import React from 'react';
// import { connect } from 'react-redux';
import { Wrapper } from './style';
import useFlag from '@/hooks/useFlag';

const Navigation: React.FC = (props) => {
	// 被选中的导航栏标签（由父组件传入）第一项默认 false 第二项为 true
	const { flag, setFalse, setTrue } = useFlag(false);

	// console.log({ flag });

	return (
		<Wrapper>
			<ul className="nav-list">
				<li className={`nav-item profile ${!flag ? 'active' : ''} `} onClick={setFalse}>
					个人资料
				</li>
				<li className={`nav-item password ${flag ? 'active' : ''} `} onClick={setTrue}>
					修改密码
				</li>
			</ul>
		</Wrapper>
	);
};

export default Navigation;
