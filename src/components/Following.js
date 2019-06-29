import React from 'react';
import GithubUser from './GithubUser';
import Infinite from 'react-infinite';

class Following extends React.Component {

	constructor() {
        super()
        this.state = ({
          following: [],
          page: 1,
          loading: false
        })
    }

    fetchData(){
        this.setState({
            loading: true
        })

    	let url = `https://api.github.com/users/${this.props.params.username}/following?&page=1&per_page=50`

        fetch(url)
        .then(response => response.json())
        .then(following => {
                this.setState({
                    following: this.state.following.concat(following),
                    loading: false,
                    page: this.state.page + 1
                });
            }
        );
    }

    render() {

        return (
            <div className="following-page">
    			<h2>Followings of {this.props.params.username}</h2>
                <Infinite className="following-page"
                      isInfiniteLoading={this.state.loading}
                      onInfiniteLoad={this.fetchData.bind(this)}
                      useWindowAsScrollContainer
                      elementHeight={50}
                      infiniteLoadBeginEdgeOffset={100} >
                      {this.state.following.map(following => {
                          return <GithubUser user={following.login} key={following.id} avatar_url={following.avatar_url} />    
                      })} 
                </Infinite>
            </div>
        );
    }
};

export default Following;

