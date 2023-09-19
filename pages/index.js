import { useState, useEffect } from "react";
import ImageCard from "@/components/imageCard";

const BACKEND_URL = "http://localhost:8000/api";

const Home = () => {
  const [imageData, setImageData] = useState({});

  // grabs images from the backend along with other meta data
  const fetchImages = async () => {
    const response = await fetch(`${BACKEND_URL}/images`);
    const imagesData = await response.json();
    return imagesData;
  }

  // fetch images on initial render
  useEffect(() => {
    fetchImages().then((imagesData) => setImageData(imagesData));
  }, [])

  if (Object.keys(imageData).length == 0) {
    return <></>
  }

  const handleVote = (imageNumber) => {
    const winnerFlag = imageNumber == 1 ? 1 : 0;
    
    // updating scores
    fetch(`${BACKEND_URL}/update_scores`, {
      method: "POST",
      body: JSON.stringify({
        "image_id_1": imageData.image_1.id,
        "image_id_2": imageData.image_2.id,
        "image_score_1": imageData.image_1.score,
        "image_score_2": imageData.image_2.score,
        "winner_flag": winnerFlag
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });

    // updating image data state
    fetchImages().then((imagesData) => setImageData(imagesData));
  }

  return (
    <div className="text-center h-screen bg-slate-100">
      <h1 className="text-4xl mb-20 pt-10"><strong>Hot</strong> or <strong>Not</strong></h1>
      <div className="w-full p-10 flex justify-center gap-24">
        <ImageCard 
          imageData={imageData.image_1.image_data} 
          imageName={imageData.image_1.name} 
          handleVote={handleVote} 
          winnerFlag={1} 
        />
        <ImageCard 
          imageData={imageData.image_2.image_data} 
          imageName={imageData.image_2.name} 
          handleVote={handleVote} 
          winnerFlag={0} 
        />
      </div>
    </div>
  )
}

export default Home;