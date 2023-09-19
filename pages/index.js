import { useState, useEffect } from "react";

const Home = () => {
  const [imageData, setImageData] = useState([]);

  const fetchImages = async () => {
    const backendURL = "http://localhost:8000/api"
    const response = await fetch(`${backendURL}/images`);
    const imagesData = await response.json();
    return imagesData;
  }

  useEffect(() => {
    fetchImages().then((imagesData) => setImageData(imagesData));
  }, [])

  if (imageData.length == 0) {
    return <></>
  }

  const handleVote = (imageNumber) => {
    const winnerFlag = imageNumber == 1 ? 1 : 0;
    fetch("http://localhost:8000/api/update_scores", {
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
    fetchImages().then((imagesData) => setImageData(imagesData));
  }

  return (
    <div className="text-center">
      <h1 className="text-4xl mb-10">Hot or Not</h1>
      <div className="w-full p-10 m-auto">
        <div className="flex justify-around">
          <div className="w-40% h-80 max-h-80 p-2 bg-purple-200 cursor-pointer">
            <img src={`data:image/jpeg;base64,${imageData.image_1.image_data}`}
              alt="Image 1"
              className="w-full h-full object-cover mb-4"
              onClick={() => handleVote(1)}
            />
            <p>{imageData.image_1.name}</p>
          </div>
          <div className="w-40% h-80 max-h-80 p-2 bg-orange-200 cursor-pointer">
            <img src={`data:image/jpeg;base64,${imageData.image_2.image_data}`}
              alt="Image 2"
              className="w-full h-full object-cover mb-4"
              onClick={() => handleVote(2)}
            />
            <p>{imageData.image_2.name}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;