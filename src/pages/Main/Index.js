import React from "react";

import moment from "moment";

import logo from "../../assets/logo.png";

import { Container, Form } from "./Styles";

import CompareList from "../../components/CompareList/Index";

import api from "../../services/api";

export default class Main extends React.Component {
    state = {
        repositoryError: false,
        repositoryInput: "",
        repositories: [],
        loading: false
    };

    saveToStorage = () => {
        localStorage.setItem("repositories", JSON.stringify(this.state.repositories))
    }

    handleAddRepository = async (e) => {
        e.preventDefault();

        this.setState({
            loading: true
        });

        try {
            const { data: repository } = await api.get(`/repos/${this.state.repositoryInput}`);

            repository.lastCommit = moment(repository.pushed_at).fromNow();

            this.setState({
                repositoryInput: "",
                repositories: [...this.state.repositories, repository],
                repositoryError: false
            });

            this.saveToStorage()


        } catch (err) {
            this.setState({
                repositoryError: true
            });
        } finally {
            this.setState({
                loading: false
            });
        }
    };

    handleDeleteRepository = (index) => {
        this.setState({
            repositories: this.state.repositories.filter((el) => el.id !== index)
        }, () => this.saveToStorage())
    }

    handleUpdateRepository = async (full_name, index) => {
        const { data: repository } = await api.get(`/repos/${full_name}`);

        repository.lastCommit = moment(repository.pushed_at).fromNow();

        var arr = this.state.repositories;

        arr[index] = repository

        this.setState({
            repositoryInput: "",
            repositories: arr,
            repositoryError: false
        });

    }

    componentDidMount() {
        this.setState({
            repositories: JSON.parse(localStorage.getItem("repositories")) || []
        })
    }

    render() {
        return (
            <Container>
                <img src={logo} alt="Github Compare logo" />

                <Form onSubmit={this.handleAddRepository} withError={this.state.repositoryError}>
                    <input
                        type="text"
                        placeholder="usuário/repositório"
                        value={this.state.repositoryInput}
                        onChange={(e) => this.setState({ repositoryInput: e.target.value })}

                    />
                    <button type="submit">
                        {this.state.loading ? <i className="fa fa-spinner fa-pulse" /> : "OK"}
                    </button>
                </Form>

                <CompareList
                    repositories={this.state.repositories}
                    deleteFunc={(id) => () => this.handleDeleteRepository(id)}
                    updateFunc={(full_name, id) => () => this.handleUpdateRepository(full_name, id)}
                />
            </Container>
        );
    }
}
