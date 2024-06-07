import { BsFillBagFill } from "react-icons/bs";

const Card = ({ img, title, star, reviews, prevPrice, newPrice, product, cart, setCart,key }) => {
  const addCart = () => {
    // Add product to cart
    setCart([...cart, product]);
  };

  const removeCart = () => {
    // Remove product from cart
    const updatedCart = cart.filter((item) => item!== product);
    setCart(updatedCart);
  };

  return (
    <>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag">
              {cart.includes(product) ? (
                <button onClick={removeCart} className="btn_remove">Remove</button>
              ) : (
                <BsFillBagFill className="bag-icon" onClick={addCart} />
              )}
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
