import React from 'react';
// import { connect } from 'react-redux';
import { Wrapper } from './style';
import { BackTop } from 'antd';
import AppDownload from '../../components/AppDownload';
import Article from './Article';
// import Recommended from './Recommended';
import Author from './Author';
import Catalog from './Catalog';

const Post: React.FC = (props) => {
	return (
		<Wrapper>
			<div className="left">
				<Article />
				{/* <Recommended /> */}
			</div>
			<div className="right">
				<Author />
				<AppDownload />
				<Catalog />
			</div>
			<BackTop />
		</Wrapper>
	);
};

export default Post;
