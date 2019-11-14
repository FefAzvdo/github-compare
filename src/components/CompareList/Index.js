import React from "react";

import { Container, Repository } from "./Styles";

const CompareList = ({ repositories }) => {
    return (
        <Container>
            {repositories.map((repositorie) => {
                return (
                    <Repository>
                        <header>
                            <img src={repositorie.owner.avatar_url} alt={repositorie.owner.login} />
                            <strong>{repositorie.owner.login}</strong>
                            <small>{repositorie.name}</small>
                        </header>

                        <ul>
                            <li>
                                {repositorie.stargazers_count} <small>stars</small>
                            </li>
                            <li>
                                {repositorie.forks_count} <small>forks</small>
                            </li>
                            <li>
                                {repositorie.open_issues_count} <small>issues</small>
                            </li>
                            <li>
                                {repositorie.pushed_at} <small>last commit</small>
                            </li>
                        </ul>
                    </Repository>
                );
            })}
        </Container>
    );
};

export default CompareList;
