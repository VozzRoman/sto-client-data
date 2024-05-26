import { FC, useEffect, useState } from 'react';
interface StartRatingProp {
	item: number
}


const StarRating: FC<StartRatingProp> = ({item}) => {
	
  const [currentRating, setCurrentRating] = useState<number>(item);


  const handleClick = (index: number) => {
    setCurrentRating(index);
    console.log("Selected rating:", index);
  };

  useEffect(() => {
setCurrentRating(item);
  }, [item])

  return (
    <div>
      {[1, 2, 3, 4, 5].map((index) => (
        <span
          key={index}
          className={`cursor-pointer text-[17px] max-sm:text-[13px] ${
            index <= currentRating ? 'text-yellow-500' : 'text-gray-300'
          }`}
          onClick={() => handleClick(index)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;