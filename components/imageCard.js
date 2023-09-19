const ImageCard = ({ imageData, imageName, handleVote, winnerFlag }) => {
    return (
        <div className="bg-white rounded overflow-hidden border-black border-b-8 border-r-8 border-t-2 border-l-2 cursor-pointer">
            <div className="flex flex-col">
                <img
                    className="w-full h-72 object-cover"
                    src={`data:image/jpeg;base64,${imageData}`}
                    alt={imageName}
                    onClick={() => handleVote(winnerFlag)}
                />
                <div className="flex-1 p-6 font-bold">
                    <div className="">{imageName}</div>
                </div>
            </div>
        </div>
    )
}

export default ImageCard;