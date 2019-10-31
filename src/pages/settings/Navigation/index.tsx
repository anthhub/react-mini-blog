import React from 'react';
// import { connect } from 'react-redux';
import { Wrapper } from './style';

// const data = {};

const Navigation: React.FC = (props) => {
	return (
		<Wrapper>
			<ul className="nav-list">
				<a>
					<li className="nav-item profile active">个人资料</li>
				</a>
				<a>
					<li className="nav-item password">修改密码</li>
				</a>
			</ul>
		</Wrapper>
	);
};

export default Navigation;
