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
            <h1 className="text-4xl">Leaderboard</h1>
            <div className="flex my-10 justify-around text-center">
                <p className="font-bold text-2xl">Ranking</p>
                <p className="font-bold text-2xl">Name</p>
                <p className="font-bold text-2xl">Image</p>
                <p className="font-bold text-2xl">Score</p>
            </div>
            {
                topScorerData.map((elem, index) => {
                    return (
                        <div className="flex my-10 justify-around text-center">
                            <p>{index + 1}</p>
                            <p>{elem[0]}</p>
                            <img src={`data:image/jpeg;base64,${elem[1]}`}
                                alt={elem[0]}
                                className="h-40 max-h-40"
                            />
                            <p>{elem[2]}</p>
                        </div>
                    );
                }
                )
            }
        </div>
    )
}

export default Leaderboard;