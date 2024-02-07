import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import axios from "axios";
import Search from "./Search";
import SyncLoader from "react-spinners/SyncLoader";
import ScrollButton from "./scrollButton";

const NewsList = () => {
  const [articles, setArticles] = useState([]);
  const [term, setTerm] = useState("latest news");
  const [isLoading, setIsLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${term}&apiKey=82cce13b19014e1bace0e9930fee6c28`
      );

      setArticles(response.data.articles);
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 200);
    };
    getArticles();
  }, [term]);

  return (
    <>
      {isLoading ? (
        // Loader Starts HEre ...installed as a npm package
        <SyncLoader
          className="loader"
          color={"#ff234f"}
          loading={isLoading}
          // cssOverride={override}
          size={20}
        />
      ) : (
        <div className="all">
          {/* ----Header Starts Here */}
          <header className="masthead header_bg ">
            <div className="container h-100">
              <div className="row h-100 align-items-center d-flex">
                <div className="col-lg-6 col-sm-12 text-center ">
                  <h1 className="fw-bolder display-2 heading_line text-capitalize">
                    View Articles About {term}{" "}
                  </h1>
                  <p className="lead text-center w-100">
                    Search Your Favourite Articles Below !!
                  </p>
                  <Search
                    SearchText={(text) => {
                      setTerm(text);
                    }}
                  />
                </div>
                <div className="col-lg-6 col-sm-12 text-center">
                  <img
                    src="../images/headerSVG.svg"
                    className="img-fluid w-50 svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </header>
          <ScrollButton />

          <section className="container">
            <div className="row mx-auto">
              {articles.slice(0, perPage).map((e) => {
                return (
                  <div className="my-4 d-flex justify-content-center col-sm-12 col-lg-3 col-md-6">
                    <NewsItem
                      title={e.title}
                      description={e.description}
                      url={e.url}
                      urlToImage={e.urlToImage}
                      content={e.content}
                      author={e.author}
                      publishedAt={e.publishedAt}
                    />
                  </div>
                );
              })}
              <div className="d-flex justify-content-center align-items-center">
                <button
                  className="btn btn-primary my-4"
                  onClick={() => {
                    setPerPage(perPage + 10);
                  }}
                >
                  Load More
                </button>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default NewsList;
