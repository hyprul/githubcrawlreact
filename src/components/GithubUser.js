import React from 'react';
import {Link} from 'react-router';

class GithubUser extends React.Component {

    render() {
        return (
            <div className="user-info">
                <Link to={'/user/'+this.props.user}>
                    <img className="user-info__avatar" src={this.props.avatar_url} alt={this.props.user}/>
                    <h2 className="user-info__title"> {this.props.user}</h2>
                </Link>
            </div>
        );
    }
};

export default GithubUser;