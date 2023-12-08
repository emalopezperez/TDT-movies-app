import { StarIcon } from "@heroicons/react/20/solid";

interface Starts {
  totalStars: number;
}

const Stars: React.FC<Starts> = ({ totalStars }) => {
  return (
    <div className="flex">
      {[0, 1, 2, 3, 4, 5].map((rating) => (
        <StarIcon
          key={rating}
          className={`h-5 w-5 flex-shrink-0 ${
            rating < totalStars ? "text-yellow-400" : "text-gray-200"
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
};

export default Stars;
