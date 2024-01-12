import resList from "../utils/mockData";
import RestrauntCard from "./RestaurantCard";

const Body = () => (
  <div className="body">
    <div className="search">Search</div>
    <div className="res-container">
      {resList.map((restaurant) => (
        <RestrauntCard key={restaurant.info.id} resData={restaurant} />
      ))}
    </div>
  </div>
);

export default Body;
