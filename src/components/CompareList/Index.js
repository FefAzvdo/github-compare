import React from "react";
import PropTypes from "prop-types";

import { Container, Repository } from "./Styles";

import star_logo from "../../assets/star.png";
import fork_logo from "../../assets/fork.png";
import issue_logo from "../../assets/issue.png";
import clock_logo from "../../assets/clock.png";

const CompareList = ({ repositories, deleteFunc, updateFunc }) => {
    return (
        <Container>
            {repositories.map((repository, index) => {
                return (
                    <Repository key={repository.id} index={index}>
                        <header>
                            <img src={repository.owner.avatar_url} alt={repository.owner.login} />
                            <strong>{repository.owner.login}</strong>
                            <small>{repository.name}</small>
                        </header>

                        <ul>
                            <li>
                                <div>
                                    {repository.stargazers_count} <small>stars</small>
                                </div>
                                <div>
                                    <img src={star_logo} alt="star_logo" />
                                </div>
                            </li>
                            <li>
                                <div>
                                    {repository.forks_count} <small>forks</small>
                                </div>
                                <div>
                                    <img src={fork_logo} alt="fork_logo" />
                                </div>
                            </li>
                            <li>
                                <div>
                                    {repository.open_issues_count} <small>issues</small>
                                </div>
                                <div>
                                    <img src={issue_logo} alt="issue_logo" />
                                </div>
                            </li>
                            <li>
                                <div>
                                    {repository.lastCommit}
                                    <br />
                                    <small>last commit</small>
                                </div>
                                <div>
                                    <img src={clock_logo} alt="clock_logo" />
                                </div>
                            </li>
                        </ul>

                        <button onClick={deleteFunc(repository.id)} id="delete">DELETE REPOSITORY</button>

                        <button onClick={updateFunc(repository.full_name, index)} id="update">UPDATE DATA</button>
                    </Repository>
                );
            })}
        </Container>
    );
};

CompareList.propTypes = {
    repositories: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            owner: PropTypes.shape({
                login: PropTypes.string,
                avatar_url: PropTypes.string
            }),
            stargazers_count: PropTypes.number,
            forks_count: PropTypes.number,
            open_issues_count: PropTypes.number,
            pushed_at: PropTypes.string
        })
    ).isRequired
};

export default CompareList;
