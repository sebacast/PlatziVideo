import { useState, useEffect } from 'react';

const useInitialState = (api) => {
  const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });
  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);
  return videos;
};
export default useInitialState;
