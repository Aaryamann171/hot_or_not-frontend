import { useState, useEffect } from "react";

const Leaderboard = () => {
    const [topScorerData, setTopScorerData] = useState([]);

    const fetchTopScorers = async () => {
        const backendURL = "http://localhost:8000/api"
        const response = await fetch(`${backendURL}/top_scorers`);
        const topScorerData = await response.json();
        return topScorerData.res;
    }

    useEffect(() => {
        fetchTopScorers().then((topScorerData) => setTopScorerData(topScorerData));
    }, [])

    if (topScorerData.length == 0) {
        return <></>
    }

    return (
        <div className="text-center">
            <h1 className="text-4xl mt-10 font-bold">Leaderboard</h1>
            <div className="flex my-10 justify-around text-center font-semibold text-2xl">
                <p>Ranking</p>
                <p>Name</p>
                <p>Image</p>
                <p>Score</p>
            </div>
            {
                topScorerData.map((topScorer, index) => {
                    const imageData = topScorer[1];
                    const imageName = topScorer[0];
                    const score = topScorer[2];
                    return (
                        <div className="flex my-10 justify-around text-center" key={index}>
                            <p>{ index + 1 }</p>
                            <p>{ imageName }</p>
                            <img src={`data:image/jpeg;base64,${imageData}`}
                                alt={ imageName }
                                className="h-40 max-h-40"
                            />
                            <p>{ score }</p>
                        </div>
                    );
                }
                )
            }
        </div>
    )
}

export default Leaderboard;