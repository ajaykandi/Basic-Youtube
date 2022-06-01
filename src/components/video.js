import React from "react";

function Vedio({ Video }) {
  const { title, description } = Video;
  const { url } = Video.thumbnails.high;
  return (
    <div className="card">
      <img src={url} alt="" />
      <div className="info_container">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Vedio;
