import React from 'react';
import GithubRepo from './GithubRepo';

class Repos extends React.Component {

    constructor() {
        super()
        this.state = ({
          repos: '',
        })
    }

    componentDidMount() {

        let url = `https://api.github.com/users/${this.props.params.username}/repos`

        fetch(url)
        .then(response => response.json())
        .then(repos => {
                this.setState({
                    repos: repos
                });
            }
        );
    }

    render() {

        var reposArray = this.state.repos;

        if (!this.state.repos) {
            return <div>LOADING REPOS...</div>
        }
        return (
            <div>
                <h2>{this.props.params.username}'s repos</h2>
                <ul>
                    {reposArray.map(repos => {
                        return (
                            <li key={repos.id}>
                                <GithubRepo full_name={repos.full_name} html_url={repos.html_url}/>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
};

export default Repos;