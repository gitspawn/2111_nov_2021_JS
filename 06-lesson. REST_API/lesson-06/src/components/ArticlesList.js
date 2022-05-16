import React from "react";

export default function ArticlesList({ articles }) {
    return articles.map(({ objectID, url, title }) => (
        <li key={objectID}>
            <a href={url} target="_blank" rel="noreferrer noopener">
                {title}
            </a>
        </li>
    ));
}
