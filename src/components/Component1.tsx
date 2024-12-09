import React, { useState } from 'react';

const LikeDislike: React.FC = () => {
  const [likes, setLikes] = useState<number>(0);
  const [dislikes, setDislikes] = useState<number>(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div>
      <h3>Like / Dislike Component</h3>
      <button onClick={handleLike}>Like ({likes})</button>
      <button onClick={handleDislike}>Dislike ({dislikes})</button>
    </div>
  );
};

export default LikeDislike;
