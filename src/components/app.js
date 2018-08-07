import React from 'react';
import Header from './header';
import ContestPreview from './contestpreview';

class App extends React.Component {
	state = { 
	  pageHeader: 'Naming Contests',
	  contests:  this.props.initialContests
	};

	componentDidMount() {

	}

	componentWillUnmount() {
		// cleaners
	}

	render() {
	  return (
		  <div className="App">
		  	<Header message={this.state.pageHeader} />
			<div>
			  {this.state.contests.map(contest =>
			  <ContestPreview key={contest.id} {...contest} />
			  )}
			</div>
		  </div>
		);
	}
}

export default App;