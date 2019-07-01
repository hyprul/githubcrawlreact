import React from 'react';
import GithubUser from './GithubUser';
import Infinite from 'react-infinite';

class Followers extends React.Component {

	constructor() {
        super()
        this.state = ({
          followers: [],
          page: 1,
          loading: false
        })
    }

	fetchData() {

        this.setState({
            loading: true
        })
        
    	let url = `https://api.github.com/users/${this.props.params.username}/followers?&page=${this.state.page}&per_page=50`

        fetch(url)
        .then(response => response.json())
        .then(followers => {
                this.setState({
                    followers: this.state.followers.concat(followers),
                    loading: false,
                    page: this.state.page + 1
                });
            }
        );
    }

    render() {

        return (
            <div className="followers-page">
    			<h2>Followers of {this.props.params.username}</h2>
                <Infinite className="followers-page"
                      isInfiniteLoading={this.state.loading}
                      onInfiniteLoad={this.fetchData.bind(this)}
                      useWindowAsScrollContainer
                      elementHeight={50}
                      infiniteLoadBeginEdgeOffset={100} >
                      {this.state.followers.map(follower => {
                          return <GithubUser user={follower.login} key={follower.id} avatar_url={follower.avatar_url} />    
                      })} 
                </Infinite>
            </div>
        );
    }
};

export default Followers;

