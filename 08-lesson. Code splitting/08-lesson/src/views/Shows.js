import React, { Component } from "react";
import { Link } from "react-router-dom";

import tvApi from "../services/tv-api";
import getParams from "../utils/getParams";

import Search from "../components/Search";

export default class Shows extends Component {
    state = {
        shows: [],
        loader: false,
        err: null,
    };

    componentDidMount() {
        // console.log("Shows CDM");

        const { query } = getParams(this.props.location.search);

        if (!this.props.location.state) {
            if (query) {
                this.fetchData(query);
                return;
            }
        }

        this.fetchData("car");
    }

    componentDidUpdate(prevProps, prevState) {
        const { query: currentQuery } = getParams(this.props.location.search);
        const { query: prevQuery } = getParams(prevProps.location.search);
        if (prevQuery !== currentQuery) {
            this.fetchData(currentQuery);
        }
    }

    fetchData = (query) => {
        tvApi
            .fetchShowWithQuery(query)
            .then((shows) => {
                // console.log(shows);
                this.setState({ shows });
            })
            .catch((err) => console.log(err));
    };

    handleQuery = (searchQuery) => {
        // console.log(this.props.history.push("/"));

        // this.props.history.push({
        //     pathname: this.props.location.pathname,
        //     search: `query=${searchQuery}`,
        // });

        this.props.history.push({
            ...this.props.location,
            search: `query=${searchQuery}`,
        });
    };

    render() {
        let { shows } = this.state;
        return (
            <div>
                <h1>Shows list</h1>
                <Search onSubmit={this.handleQuery} />
                {shows.length > 0 &&
                    shows.map(({ id, image, name }) => (
                        <li key={id}>
                            {/* <Link to={`${this.props.match.url}/${id}`}>
                                <h3>{name}</h3>
                                <img src={image.medium} alt={name} />
                            </Link> */}

                            <Link
                                to={{
                                    pathname: `${this.props.match.url}/${id}`,
                                    state: { cameFrom: this.props.location },
                                }}
                            >
                                <h3>{name}</h3>
                                <img src={image.medium} alt={name} />
                            </Link>
                        </li>
                    ))}
            </div>
        );
    }
}
