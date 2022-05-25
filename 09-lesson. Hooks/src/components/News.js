import React, { useState, useEffect } from "react";
import axios from "axios";

export default function News() {
    const [articles, setArticles] = useState([]);
    let [error, setError] = useState(null);
    let [spinner, setSpinner] = useState(false);

    useEffect(() => {
        setSpinner(true);
        axios
            .get("https://hn.algolia.com/api/v1/search?query=react")
            .then(({ data }) => setArticles(data.hits))
            .catch((error) => {
                return setError(error);
            })
            .finally(() => setSpinner(false));

        // return ()=>{
        //     // Остановить http запрос
        //     https://axios-http.com/docs/cancellation
        // }
    }, []);

    return (
        <ul>
            {articles.map(({ objectID, title, url }) => (
                <li key={objectID}>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </li>
            ))}
        </ul>
    );
}

// import React, { Component } from "react";
// import axios from "axios";

// export default class News extends Component {
//     state = {
//         articles: [],
//     };

//     componentDidMount() {
//         axios
//             .get("https://hn.algolia.com/api/v1/search?query=react")
//             .then(({ data }) => this.setState({ articles: data.hits }))
//             .catch((error) => {
//                 console.log(error);
//             });
//     }

//     render() {
//         return (
//             <ul>
//                 {this.state.articles.map(({ objectID, title, url }) => (
//                     <li key={objectID}>
//                         <a href={url} target="_blank" rel="noopener noreferrer">
//                             {title}
//                         </a>
//                     </li>
//                 ))}
//             </ul>
//         );
//     }
// }
