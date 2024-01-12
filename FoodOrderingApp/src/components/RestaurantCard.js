import FOOD_URL from "../utils/constants";

const RestrauntCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    resData?.info;

  return (
    <div className="res-card">
      <img
        className="img-logo"
        alt="food-image"
        src={FOOD_URL + cloudinaryImageId}
      />
      <h4>{name}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{avgRating}</h5>
      <h5>{costForTwo}</h5>
      <h5>{resData.info.sla.deliveryTime}</h5>
    </div>
  );
};

export default RestrauntCard;
