import React from "react";

const NewsItem = ({
  title,
  description,
  url,
  urlToImage,
  content,
  author,
  publishedAt,
}) => {
  return (
    <div data-aos="zoom-in-up" className="card shadow p-3 mb-5 bg-white rounded border border-0 ">
      <img
        src={urlToImage}
        className="my-2 img-fluid rounded"
        alt={urlToImage}
      />
      <div className="card-body">
        <strong className="card-title">{title}</strong>
        <p className="card-text text-justify">
          {/* {description} */}
          {content}
        </p>
      </div>
      <div className="card-body">
        <a href={url} className="card-link link-info">
          Read More
        </a>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <figcaption className="blockquote-footer mt-1">
            <cite title="Source Title">{author}</cite>
          </figcaption>
        </li>
        <li className="list-group-item">{publishedAt}</li>
      </ul>
    </div>
  );
};

export default NewsItem;
