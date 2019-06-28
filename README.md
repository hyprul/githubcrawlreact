# GitHub Crawler
This is a GitHub Crawler that allows the end user to search for any public user on GitHub. The results will list the user's public repositories, followers, and the people following. Additionally, for followers and following, the app includes infinite scrolling, eliminating pagination. This app uses GitHub's pubic API V3, with a rate limit of 60 requests per hour for public users. 


## GitHub API Documentation
https://developer.github.com/v3/

For getting followers/following:
https://developer.github.com/v3/users/followers/

#Component Structure
Index - Setup Routes with App at top, nested routes with Search as default
App - Basic Header and Children Components
Search - Search Bar Component with Input and Submit
User - Current User with Profile, Name, and Description
Followers - List of Followers
Following - List of Following
Repos - List of Repos
GithubUser - Basic Component of a Github Follower/Following User with name and profile picture
GithubRepo - Basic Component of a Github Repo with name and link

## Built With
React, CSS

## Authors

* Sean Huang - https://github.com/hyprul

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
# githubcrawlreact
# githubcrawlreact
