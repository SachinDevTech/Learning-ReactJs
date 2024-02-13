import PropTypes from 'prop-types';
import "./GadgetCard.css";

function Gadgetcard({ title, price }) {
  return (
    <div className="card-container">
      <h1 className="gadgetName">{title} - {price}</h1>
      <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam,
        corrupti? The Price of {title} is {price}.
      </p>
      <button>Click Me!</button>
    </div>
  );
}

Gadgetcard.propTypes = {
  title: PropTypes.string.isRequired, // This specifies that title is a required string prop
  price: PropTypes.string.isRequired // This specifies that price is a required string prop
};

export default Gadgetcard;
