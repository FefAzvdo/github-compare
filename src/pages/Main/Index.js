import React, { Component } from "react";

import logo from "../../assets/logo.png";

import { Container, Form } from "./Styles";

import CompareList from "../../components/CompareList/Index";

export default class Main extends React.Component {
    state = {
        repositories: [
            {
                id: 10270250,
                node_id: "MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==",
                name: "react",
                full_name: "facebook/react",
                private: false,
                owner: {
                    login: "facebook",
                    id: 69631,
                    node_id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
                    avatar_url: "https://avatars3.githubusercontent.com/u/69631?v=4",
                    gravatar_id: "",
                    url: "https://api.github.com/users/facebook",
                    html_url: "https://github.com/facebook",
                    followers_url: "https://api.github.com/users/facebook/followers",
                    following_url: "https://api.github.com/users/facebook/following{/other_user}",
                    gists_url: "https://api.github.com/users/facebook/gists{/gist_id}",
                    starred_url: "https://api.github.com/users/facebook/starred{/owner}{/repo}",
                    subscriptions_url: "https://api.github.com/users/facebook/subscriptions",
                    organizations_url: "https://api.github.com/users/facebook/orgs",
                    repos_url: "https://api.github.com/users/facebook/repos",
                    events_url: "https://api.github.com/users/facebook/events{/privacy}",
                    received_events_url: "https://api.github.com/users/facebook/received_events",
                    type: "Organization",
                    site_admin: false
                },
                html_url: "https://github.com/facebook/react",
                description: "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
                fork: false,
                url: "https://api.github.com/repos/facebook/react",
                forks_url: "https://api.github.com/repos/facebook/react/forks",
                keys_url: "https://api.github.com/repos/facebook/react/keys{/key_id}",
                collaborators_url: "https://api.github.com/repos/facebook/react/collaborators{/collaborator}",
                teams_url: "https://api.github.com/repos/facebook/react/teams",
                hooks_url: "https://api.github.com/repos/facebook/react/hooks",
                issue_events_url: "https://api.github.com/repos/facebook/react/issues/events{/number}",
                events_url: "https://api.github.com/repos/facebook/react/events",
                assignees_url: "https://api.github.com/repos/facebook/react/assignees{/user}",
                branches_url: "https://api.github.com/repos/facebook/react/branches{/branch}",
                tags_url: "https://api.github.com/repos/facebook/react/tags",
                blobs_url: "https://api.github.com/repos/facebook/react/git/blobs{/sha}",
                git_tags_url: "https://api.github.com/repos/facebook/react/git/tags{/sha}",
                git_refs_url: "https://api.github.com/repos/facebook/react/git/refs{/sha}",
                trees_url: "https://api.github.com/repos/facebook/react/git/trees{/sha}",
                statuses_url: "https://api.github.com/repos/facebook/react/statuses/{sha}",
                languages_url: "https://api.github.com/repos/facebook/react/languages",
                stargazers_url: "https://api.github.com/repos/facebook/react/stargazers",
                contributors_url: "https://api.github.com/repos/facebook/react/contributors",
                subscribers_url: "https://api.github.com/repos/facebook/react/subscribers",
                subscription_url: "https://api.github.com/repos/facebook/react/subscription",
                commits_url: "https://api.github.com/repos/facebook/react/commits{/sha}",
                git_commits_url: "https://api.github.com/repos/facebook/react/git/commits{/sha}",
                comments_url: "https://api.github.com/repos/facebook/react/comments{/number}",
                issue_comment_url: "https://api.github.com/repos/facebook/react/issues/comments{/number}",
                contents_url: "https://api.github.com/repos/facebook/react/contents/{+path}",
                compare_url: "https://api.github.com/repos/facebook/react/compare/{base}...{head}",
                merges_url: "https://api.github.com/repos/facebook/react/merges",
                archive_url: "https://api.github.com/repos/facebook/react/{archive_format}{/ref}",
                downloads_url: "https://api.github.com/repos/facebook/react/downloads",
                issues_url: "https://api.github.com/repos/facebook/react/issues{/number}",
                pulls_url: "https://api.github.com/repos/facebook/react/pulls{/number}",
                milestones_url: "https://api.github.com/repos/facebook/react/milestones{/number}",
                notifications_url:
                    "https://api.github.com/repos/facebook/react/notifications{?since,all,participating}",
                labels_url: "https://api.github.com/repos/facebook/react/labels{/name}",
                releases_url: "https://api.github.com/repos/facebook/react/releases{/id}",
                deployments_url: "https://api.github.com/repos/facebook/react/deployments",
                created_at: "2013-05-24T16:15:54Z",
                updated_at: "2019-11-14T17:46:12Z",
                pushed_at: "2019-11-14T15:07:45Z",
                git_url: "git://github.com/facebook/react.git",
                ssh_url: "git@github.com:facebook/react.git",
                clone_url: "https://github.com/facebook/react.git",
                svn_url: "https://github.com/facebook/react",
                homepage: "https://reactjs.org",
                size: 148672,
                stargazers_count: 139404,
                watchers_count: 139404,
                language: "JavaScript",
                has_issues: true,
                has_projects: true,
                has_downloads: true,
                has_wiki: true,
                has_pages: true,
                forks_count: 26491,
                mirror_url: null,
                archived: false,
                disabled: false,
                open_issues_count: 932,
                license: {
                    key: "mit",
                    name: "MIT License",
                    spdx_id: "MIT",
                    url: "https://api.github.com/licenses/mit",
                    node_id: "MDc6TGljZW5zZTEz"
                },
                forks: 26491,
                open_issues: 932,
                watchers: 139404,
                default_branch: "master",
                organization: {
                    login: "facebook",
                    id: 69631,
                    node_id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
                    avatar_url: "https://avatars3.githubusercontent.com/u/69631?v=4",
                    gravatar_id: "",
                    url: "https://api.github.com/users/facebook",
                    html_url: "https://github.com/facebook",
                    followers_url: "https://api.github.com/users/facebook/followers",
                    following_url: "https://api.github.com/users/facebook/following{/other_user}",
                    gists_url: "https://api.github.com/users/facebook/gists{/gist_id}",
                    starred_url: "https://api.github.com/users/facebook/starred{/owner}{/repo}",
                    subscriptions_url: "https://api.github.com/users/facebook/subscriptions",
                    organizations_url: "https://api.github.com/users/facebook/orgs",
                    repos_url: "https://api.github.com/users/facebook/repos",
                    events_url: "https://api.github.com/users/facebook/events{/privacy}",
                    received_events_url: "https://api.github.com/users/facebook/received_events",
                    type: "Organization",
                    site_admin: false
                },
                network_count: 26491,
                subscribers_count: 6626
            },
            {
                id: 11730342,
                node_id: "MDEwOlJlcG9zaXRvcnkxMTczMDM0Mg==",
                name: "vue",
                full_name: "vuejs/vue",
                private: false,
                owner: {
                    login: "vuejs",
                    id: 6128107,
                    node_id: "MDEyOk9yZ2FuaXphdGlvbjYxMjgxMDc=",
                    avatar_url: "https://avatars1.githubusercontent.com/u/6128107?v=4",
                    gravatar_id: "",
                    url: "https://api.github.com/users/vuejs",
                    html_url: "https://github.com/vuejs",
                    followers_url: "https://api.github.com/users/vuejs/followers",
                    following_url: "https://api.github.com/users/vuejs/following{/other_user}",
                    gists_url: "https://api.github.com/users/vuejs/gists{/gist_id}",
                    starred_url: "https://api.github.com/users/vuejs/starred{/owner}{/repo}",
                    subscriptions_url: "https://api.github.com/users/vuejs/subscriptions",
                    organizations_url: "https://api.github.com/users/vuejs/orgs",
                    repos_url: "https://api.github.com/users/vuejs/repos",
                    events_url: "https://api.github.com/users/vuejs/events{/privacy}",
                    received_events_url: "https://api.github.com/users/vuejs/received_events",
                    type: "Organization",
                    site_admin: false
                },
                html_url: "https://github.com/vuejs/vue",
                description:
                    "🖖 Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web.",
                fork: false,
                url: "https://api.github.com/repos/vuejs/vue",
                forks_url: "https://api.github.com/repos/vuejs/vue/forks",
                keys_url: "https://api.github.com/repos/vuejs/vue/keys{/key_id}",
                collaborators_url: "https://api.github.com/repos/vuejs/vue/collaborators{/collaborator}",
                teams_url: "https://api.github.com/repos/vuejs/vue/teams",
                hooks_url: "https://api.github.com/repos/vuejs/vue/hooks",
                issue_events_url: "https://api.github.com/repos/vuejs/vue/issues/events{/number}",
                events_url: "https://api.github.com/repos/vuejs/vue/events",
                assignees_url: "https://api.github.com/repos/vuejs/vue/assignees{/user}",
                branches_url: "https://api.github.com/repos/vuejs/vue/branches{/branch}",
                tags_url: "https://api.github.com/repos/vuejs/vue/tags",
                blobs_url: "https://api.github.com/repos/vuejs/vue/git/blobs{/sha}",
                git_tags_url: "https://api.github.com/repos/vuejs/vue/git/tags{/sha}",
                git_refs_url: "https://api.github.com/repos/vuejs/vue/git/refs{/sha}",
                trees_url: "https://api.github.com/repos/vuejs/vue/git/trees{/sha}",
                statuses_url: "https://api.github.com/repos/vuejs/vue/statuses/{sha}",
                languages_url: "https://api.github.com/repos/vuejs/vue/languages",
                stargazers_url: "https://api.github.com/repos/vuejs/vue/stargazers",
                contributors_url: "https://api.github.com/repos/vuejs/vue/contributors",
                subscribers_url: "https://api.github.com/repos/vuejs/vue/subscribers",
                subscription_url: "https://api.github.com/repos/vuejs/vue/subscription",
                commits_url: "https://api.github.com/repos/vuejs/vue/commits{/sha}",
                git_commits_url: "https://api.github.com/repos/vuejs/vue/git/commits{/sha}",
                comments_url: "https://api.github.com/repos/vuejs/vue/comments{/number}",
                issue_comment_url: "https://api.github.com/repos/vuejs/vue/issues/comments{/number}",
                contents_url: "https://api.github.com/repos/vuejs/vue/contents/{+path}",
                compare_url: "https://api.github.com/repos/vuejs/vue/compare/{base}...{head}",
                merges_url: "https://api.github.com/repos/vuejs/vue/merges",
                archive_url: "https://api.github.com/repos/vuejs/vue/{archive_format}{/ref}",
                downloads_url: "https://api.github.com/repos/vuejs/vue/downloads",
                issues_url: "https://api.github.com/repos/vuejs/vue/issues{/number}",
                pulls_url: "https://api.github.com/repos/vuejs/vue/pulls{/number}",
                milestones_url: "https://api.github.com/repos/vuejs/vue/milestones{/number}",
                notifications_url: "https://api.github.com/repos/vuejs/vue/notifications{?since,all,participating}",
                labels_url: "https://api.github.com/repos/vuejs/vue/labels{/name}",
                releases_url: "https://api.github.com/repos/vuejs/vue/releases{/id}",
                deployments_url: "https://api.github.com/repos/vuejs/vue/deployments",
                created_at: "2013-07-29T03:24:51Z",
                updated_at: "2019-11-14T17:18:39Z",
                pushed_at: "2019-11-12T17:01:40Z",
                git_url: "git://github.com/vuejs/vue.git",
                ssh_url: "git@github.com:vuejs/vue.git",
                clone_url: "https://github.com/vuejs/vue.git",
                svn_url: "https://github.com/vuejs/vue",
                homepage: "http://vuejs.org",
                size: 27803,
                stargazers_count: 152146,
                watchers_count: 152146,
                language: "JavaScript",
                has_issues: true,
                has_projects: true,
                has_downloads: true,
                has_wiki: true,
                has_pages: false,
                forks_count: 22664,
                mirror_url: null,
                archived: false,
                disabled: false,
                open_issues_count: 397,
                license: {
                    key: "mit",
                    name: "MIT License",
                    spdx_id: "MIT",
                    url: "https://api.github.com/licenses/mit",
                    node_id: "MDc6TGljZW5zZTEz"
                },
                forks: 22664,
                open_issues: 397,
                watchers: 152146,
                default_branch: "dev",
                organization: {
                    login: "vuejs",
                    id: 6128107,
                    node_id: "MDEyOk9yZ2FuaXphdGlvbjYxMjgxMDc=",
                    avatar_url: "https://avatars1.githubusercontent.com/u/6128107?v=4",
                    gravatar_id: "",
                    url: "https://api.github.com/users/vuejs",
                    html_url: "https://github.com/vuejs",
                    followers_url: "https://api.github.com/users/vuejs/followers",
                    following_url: "https://api.github.com/users/vuejs/following{/other_user}",
                    gists_url: "https://api.github.com/users/vuejs/gists{/gist_id}",
                    starred_url: "https://api.github.com/users/vuejs/starred{/owner}{/repo}",
                    subscriptions_url: "https://api.github.com/users/vuejs/subscriptions",
                    organizations_url: "https://api.github.com/users/vuejs/orgs",
                    repos_url: "https://api.github.com/users/vuejs/repos",
                    events_url: "https://api.github.com/users/vuejs/events{/privacy}",
                    received_events_url: "https://api.github.com/users/vuejs/received_events",
                    type: "Organization",
                    site_admin: false
                },
                network_count: 22664,
                subscribers_count: 5996
            },
            {
                id: 24195339,
                node_id: "MDEwOlJlcG9zaXRvcnkyNDE5NTMzOQ==",
                name: "angular",
                full_name: "angular/angular",
                private: false,
                owner: {
                    login: "angular",
                    id: 139426,
                    node_id: "MDEyOk9yZ2FuaXphdGlvbjEzOTQyNg==",
                    avatar_url: "https://avatars3.githubusercontent.com/u/139426?v=4",
                    gravatar_id: "",
                    url: "https://api.github.com/users/angular",
                    html_url: "https://github.com/angular",
                    followers_url: "https://api.github.com/users/angular/followers",
                    following_url: "https://api.github.com/users/angular/following{/other_user}",
                    gists_url: "https://api.github.com/users/angular/gists{/gist_id}",
                    starred_url: "https://api.github.com/users/angular/starred{/owner}{/repo}",
                    subscriptions_url: "https://api.github.com/users/angular/subscriptions",
                    organizations_url: "https://api.github.com/users/angular/orgs",
                    repos_url: "https://api.github.com/users/angular/repos",
                    events_url: "https://api.github.com/users/angular/events{/privacy}",
                    received_events_url: "https://api.github.com/users/angular/received_events",
                    type: "Organization",
                    site_admin: false
                },
                html_url: "https://github.com/angular/angular",
                description: "One framework. Mobile & desktop.",
                fork: false,
                url: "https://api.github.com/repos/angular/angular",
                forks_url: "https://api.github.com/repos/angular/angular/forks",
                keys_url: "https://api.github.com/repos/angular/angular/keys{/key_id}",
                collaborators_url: "https://api.github.com/repos/angular/angular/collaborators{/collaborator}",
                teams_url: "https://api.github.com/repos/angular/angular/teams",
                hooks_url: "https://api.github.com/repos/angular/angular/hooks",
                issue_events_url: "https://api.github.com/repos/angular/angular/issues/events{/number}",
                events_url: "https://api.github.com/repos/angular/angular/events",
                assignees_url: "https://api.github.com/repos/angular/angular/assignees{/user}",
                branches_url: "https://api.github.com/repos/angular/angular/branches{/branch}",
                tags_url: "https://api.github.com/repos/angular/angular/tags",
                blobs_url: "https://api.github.com/repos/angular/angular/git/blobs{/sha}",
                git_tags_url: "https://api.github.com/repos/angular/angular/git/tags{/sha}",
                git_refs_url: "https://api.github.com/repos/angular/angular/git/refs{/sha}",
                trees_url: "https://api.github.com/repos/angular/angular/git/trees{/sha}",
                statuses_url: "https://api.github.com/repos/angular/angular/statuses/{sha}",
                languages_url: "https://api.github.com/repos/angular/angular/languages",
                stargazers_url: "https://api.github.com/repos/angular/angular/stargazers",
                contributors_url: "https://api.github.com/repos/angular/angular/contributors",
                subscribers_url: "https://api.github.com/repos/angular/angular/subscribers",
                subscription_url: "https://api.github.com/repos/angular/angular/subscription",
                commits_url: "https://api.github.com/repos/angular/angular/commits{/sha}",
                git_commits_url: "https://api.github.com/repos/angular/angular/git/commits{/sha}",
                comments_url: "https://api.github.com/repos/angular/angular/comments{/number}",
                issue_comment_url: "https://api.github.com/repos/angular/angular/issues/comments{/number}",
                contents_url: "https://api.github.com/repos/angular/angular/contents/{+path}",
                compare_url: "https://api.github.com/repos/angular/angular/compare/{base}...{head}",
                merges_url: "https://api.github.com/repos/angular/angular/merges",
                archive_url: "https://api.github.com/repos/angular/angular/{archive_format}{/ref}",
                downloads_url: "https://api.github.com/repos/angular/angular/downloads",
                issues_url: "https://api.github.com/repos/angular/angular/issues{/number}",
                pulls_url: "https://api.github.com/repos/angular/angular/pulls{/number}",
                milestones_url: "https://api.github.com/repos/angular/angular/milestones{/number}",
                notifications_url:
                    "https://api.github.com/repos/angular/angular/notifications{?since,all,participating}",
                labels_url: "https://api.github.com/repos/angular/angular/labels{/name}",
                releases_url: "https://api.github.com/repos/angular/angular/releases{/id}",
                deployments_url: "https://api.github.com/repos/angular/angular/deployments",
                created_at: "2014-09-18T16:12:01Z",
                updated_at: "2019-11-14T18:05:25Z",
                pushed_at: "2019-11-14T18:21:17Z",
                git_url: "git://github.com/angular/angular.git",
                ssh_url: "git@github.com:angular/angular.git",
                clone_url: "https://github.com/angular/angular.git",
                svn_url: "https://github.com/angular/angular",
                homepage: "https://angular.io",
                size: 127731,
                stargazers_count: 54089,
                watchers_count: 54089,
                language: "TypeScript",
                has_issues: true,
                has_projects: true,
                has_downloads: true,
                has_wiki: false,
                has_pages: false,
                forks_count: 14964,
                mirror_url: null,
                archived: false,
                disabled: false,
                open_issues_count: 3296,
                license: {
                    key: "mit",
                    name: "MIT License",
                    spdx_id: "MIT",
                    url: "https://api.github.com/licenses/mit",
                    node_id: "MDc6TGljZW5zZTEz"
                },
                forks: 14964,
                open_issues: 3296,
                watchers: 54089,
                default_branch: "master",
                organization: {
                    login: "angular",
                    id: 139426,
                    node_id: "MDEyOk9yZ2FuaXphdGlvbjEzOTQyNg==",
                    avatar_url: "https://avatars3.githubusercontent.com/u/139426?v=4",
                    gravatar_id: "",
                    url: "https://api.github.com/users/angular",
                    html_url: "https://github.com/angular",
                    followers_url: "https://api.github.com/users/angular/followers",
                    following_url: "https://api.github.com/users/angular/following{/other_user}",
                    gists_url: "https://api.github.com/users/angular/gists{/gist_id}",
                    starred_url: "https://api.github.com/users/angular/starred{/owner}{/repo}",
                    subscriptions_url: "https://api.github.com/users/angular/subscriptions",
                    organizations_url: "https://api.github.com/users/angular/orgs",
                    repos_url: "https://api.github.com/users/angular/repos",
                    events_url: "https://api.github.com/users/angular/events{/privacy}",
                    received_events_url: "https://api.github.com/users/angular/received_events",
                    type: "Organization",
                    site_admin: false
                },
                network_count: 14964,
                subscribers_count: 3218
            }
        ]
    };

    render() {
        return (
            <Container>
                <img src={logo} alt="Github Compare logo" />

                <Form>
                    <input type="text" placeholder="usuário/repositório" />
                    <button type="submit">OK</button>
                </Form>

                <CompareList repositories={this.state.repositories} />
            </Container>
        );
    }
}
