import React from 'react';

class GithubRepo extends React.Component {

    render() {

        var fullname = this.props.full_name;

        return (
            <div>
                <a href={this.props.html_url}> {fullname} </a>
            </div>
        );
    }
};

export default GithubRepo;
