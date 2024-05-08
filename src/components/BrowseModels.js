import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import ModelService from "../services/ModelService";

function BrowseModels() {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ModelService.getModels()
      .then((data) => {
        setModels(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="app">
      <h1>Browse Models</h1>
      <div className="model-list">
        {loading ? (
          // Display skeleton loading effect when data is being fetched
          <div className="skeleton-wrapper">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="model-card">
                <Skeleton variant="text" />
                <Skeleton variant="rectangular" width={1400} height={110} />
              </div>
            ))}
          </div>
        ) : (
          // Display models when data is fetched
          models.map((model) => (
            <div key={model.id} className="model-card">
              <h3>{model.title}</h3>
              <p>{model.body}</p>
              <Link to={`/models/${model.id}`} className="all-button">
                Explore...
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default BrowseModels;
