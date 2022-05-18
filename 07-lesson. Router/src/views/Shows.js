import React, { Component } from "react";
import { Link } from "react-router-dom";

import tvApi from "../services/tv-api";

export default class Shows extends Component {
    state = {
        shows: [],
    };

    componentDidMount() {
        tvApi.fetchShowWithQuery("dog").then((shows) => {
            console.log(shows);
            this.setState({ shows });
        });
    }

    render() {
        let { shows } = this.state;
        return (
            <div>
                <h1>Shows list</h1>
                {shows.length > 0 &&
                    shows.map(({ id, image, name }) => (
                        <li key={id}>
                            <Link to={`${this.props.match.url}/${id}`}>
                                <h3>{name}</h3>
                                <img src={image.medium} alt={name} />
                            </Link>
                        </li>
                    ))}
            </div>
        );
    }
}

// import { Link } from "react-router-dom";
// export default function Shows(props) {
//     // console.log(props);

//     const shows = [
//         { id: "id-1", name: "Shows name 1" },
//         { id: "id-2", name: "Shows name 2" },
//         { id: "id-3", name: "Shows name 3" },
//         { id: "id-4", name: "Shows name 4" },
//     ];

//     return (
//         <div>
//             <h1>Shows list</h1>
//             <ul>
//                 {shows.map(({ id, name }) => (
//                     <li key={id}>
//                         <Link to={`${props.match.url}/${id}`}>{name}</Link>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
