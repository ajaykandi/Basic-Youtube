import React, { useEffect } from "react";
import Video from "./video";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../features/videoSlice";

function Main() {
  const dispatch = useDispatch();

  const search = useSelector((state) => state.search);
  const data = useSelector((state) => state.data.items);

  const FetchApi = async () => {
    try {
      await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&key=AIzaSyB3hBVMkeTLYdMDEkmptmJ6aHY51k94epM`
      )
        .then((response) => response.json())
        .then((data) => dispatch(getData(data)));
    } catch (error) {
      console.log({ msg: error.message });
    }
  };

  useEffect(() => {
    FetchApi();
  }, [search]);

  return (
    <div className="main">
      {data?.map((video) => {
        return <Video key={video.id.videoId} Video={video.snippet} />;
      })}
    </div>
  );
}

export default Main;
