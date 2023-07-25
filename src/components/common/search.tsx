// core
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// misc
import { IAppSharedProps } from '@interfaces/reduxModel';
import LightBox from './lightbox';

interface ISearchProps extends IAppSharedProps {}

interface ISearchState {
	searchKey: string;
	toggleFocus: boolean;
}

class Search extends React.Component<ISearchProps, ISearchState> {
	expansionSummary: React.RefObject<any>;
	constructor(props: ISearchProps) {
		super(props);

		this.state = {
			searchKey: '',
			toggleFocus: false,
		};
	}

	componentDidMount() {
		if (this.props.location.pathname.includes('/home/search/')) {
			const searchKey = this.props.location.pathname.replace(
				'/home/search/',
				''
			);
			this.setState({ searchKey });
		}
	}

	componentDidUpdate(prevProps: any) {
		if (
			prevProps.location.pathname.includes('/home/search/') &&
			!this.props.location.pathname.includes('/home/search/')
		) {
			this.setState({ searchKey: '' });
		}
	}

	handleChange = (e: any) => {
		const searchKey = e.target.value.trim();
		this.setState({ searchKey });
	};

	handleClear = (e: any) => {
		this.setState({ searchKey: '' });
	};

	handleSearch = (e: any) => {
		const searchObject = { searchKey: this.state.searchKey };
		const queryString = Object.keys(searchObject)
			.map((key: any) => key + '=' + searchObject[key])
			.join('&');
		this.props.history.push('/home/search/' + queryString);
		this.setState({ toggleFocus: false });
	};

	handleOnFocus = (e: any) => {
		this.setState({ toggleFocus: true });
	};

	handleOnBlur = (e: any) => {
		this.setState({ toggleFocus: false });
	};

	render() {
		return (
			<>
				<LightBox overlay={this.state.toggleFocus} />
				<div className='search-container'>
					<div className='search-wrapper'>
						<input
							className='search-input'
							name='textbox'
							placeholder='Search'
							value={this.state.searchKey}
							onChange={this.handleChange}
							onFocus={this.handleOnFocus}
							onBlur={this.handleOnBlur}
							onKeyUp={(e) => {
								if (e.keyCode === 13) {
									this.handleSearch(e);
								}
							}}
						/>

						<button
							className='btn btn-search'
							onClick={(e) => this.handleSearch(e)}
						>
							<i className='fa fa-search' />
						</button>
					</div>
				</div>
			</>
		);
	}
}

export default withRouter(connect(null, null)<any>(Search));
