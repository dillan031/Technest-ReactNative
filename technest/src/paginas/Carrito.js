import React from "react";
import { Helmet } from "react-helmet";
import styles from './Cart.css';
class Carrito extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      totalPrice: 0,
    };
  }

  componentDidMount() {
    this.loadCart();
  }

  loadCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    this.setState({ cart, totalPrice });
  };

  updateQuantity = (productName, change) => {
    const updatedCart = this.state.cart
      .map((item) => {
        if (item.name === productName) {
          const newQty = item.quantity + change;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      })
      .filter(Boolean);

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    this.setState(
      { cart: updatedCart },
      this.updateTotal
    );
  };

  removeProduct = (productName) => {
    const updatedCart = this.state.cart.filter((item) => item.name !== productName);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    this.setState(
      { cart: updatedCart },
      this.updateTotal
    );
  };

  updateTotal = () => {
    const totalPrice = this.state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    this.setState({ totalPrice });
  };

  handleCheckout = () => {
    if (this.state.cart.length === 0) {
      alert('El carrito está vacío.');
      return;
    }

    alert('¡Compra realizada con éxito!');
    localStorage.removeItem('cart');
    this.setState({ cart: [], totalPrice: 0 });
  };

  render() {
    const { cart, totalPrice } = this.state;

    return (
      <>
        <Helmet>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Carrito de Compras - TECHNEST</title>
          <link rel="icon" href="/logo.ico" />
        </Helmet>

        <div className="cart-page">
          <div className="cart-container">
            <h2>Carrito de Compras</h2>
            <table>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Total</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                {cart.length === 0 ? (
                  <tr>
                    <td colSpan="5">Tu carrito está vacío.</td>
                  </tr>
                ) : (
                  cart.map((product) => (
                    <tr key={product.name}>
                      <td>
                        <img src={product.image} alt={product.name} style={{ width: '50px' }} />{' '}
                        {product.name}
                      </td>
                      <td>${product.price.toFixed(2)}</td>
                      <td>
                        <button onClick={() => this.updateQuantity(product.name, -1)}>-</button>{' '}
                        {product.quantity}{' '}
                        <button onClick={() => this.updateQuantity(product.name, 1)}>+</button>
                      </td>
                      <td>${(product.price * product.quantity).toFixed(2)}</td>
                      <td>
                        <button className="remove-btn" onClick={() => this.removeProduct(product.name)}>
                          ❌
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            <div className="cart-summary">
              <p>
                Total a pagar: <span id="total-price">${totalPrice.toFixed(2)}</span>
              </p>
              <button id="checkout-btn" onClick={this.handleCheckout}>
                Finalizar Compra
              </button>
            </div>
            <p>
              <a href="/" className="continue-shopping">
                Seguir Comprando
              </a>
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Carrito;