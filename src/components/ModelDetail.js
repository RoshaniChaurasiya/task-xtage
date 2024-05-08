import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import ModelService from "../services/ModelService";

function ModelDetail() {
  const { id } = useParams();
  const [model, setModel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ModelService.getModelById(id)
      .then((data) => {
        setModel(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  if (loading || !model) {
    // Show loading skeleton while data is being fetched
    return (
      <div className="center model-details">
        <div className="model-card">
          <Skeleton variant="text" />
          <Skeleton variant="rectangular" width={1000} height={110} />
        </div>
      </div>
    );
  }

  return (
    <div className="center model-details">
      <div className="model-card">
        <h3>{model.title}</h3>
        <p>{model.body}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to={`/try/${id}`} className="all-button">
            Try this model
          </Link>
          <Link to="/" className="all-button">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ModelDetail;
