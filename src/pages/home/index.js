import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { getHome } from '@/Api/getHomeData';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			top: 60,
			tags: [],
			goodAuthor: [],
			recommendBooks: [],
			linkList: []
		};
	}

	componentDidMount() {
		getHome()
			.then((res) => {
				this.setState({
					tags: res.tags,
					goodAuthor: res.goodAuthor,
					recommendBooks: res.recommendBooks,
					linkList: res.linkList
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		return <div />;
	}
}

export default Home;
