// 加载 ing

import React from 'react';
import { Wrapper } from './style';
import { Spin } from 'antd';

const SpinCenter: React.FC = (props) => {
	return (
		<Wrapper>
			<Spin className="loading" />
		</Wrapper>
	);
};

export default SpinCenter;
