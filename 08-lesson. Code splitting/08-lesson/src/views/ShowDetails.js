import React, { Component } from "react";
import { Link } from "react-router-dom";

import tvApi from "../services/tv-api";

export default class ShowDetails extends Component {
    state = {
        show: null,
    };

    componentDidMount() {
        const { showID } = this.props.match.params;

        tvApi.fetchShowDetails(showID).then((show) => {
            this.setState({ show });
        });
    }

    onGoBack = () => {
        // console.log(" Вернуться к списку шоу");

        // console.log(this.props.location.state.cameFrom);
        if (this.props.location.state && this.props.location.state.cameFrom) {
            this.props.history.push(this.props.location.state.cameFrom);
        }
    };

    render() {
        const { show } = this.state;
        return (
            <div>
                <br></br>
                <button type="button" onClick={this.onGoBack}>
                    Вернуться к списку шоу
                </button>
                <br></br>
                {show && (
                    <>
                        <a href={show.url} target="_blank">
                            <h1>{show.name}</h1>
                            <img src={show.image.medium} alt={show.name} />
                            <p>Статус {show.status}</p>
                            Перейти на страницу шоу
                        </a>
                    </>
                )}
            </div>
        );
    }
}

// import React from "react";

// export default function ShowDetails(props) {
//     // console.log(props);

//     return (
//         <div>
//             <p>ShowDetails {props.match.params.showID}</p>
//         </div>
//     );
// }
