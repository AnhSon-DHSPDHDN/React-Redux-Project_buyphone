import React, { Suspense } from 'react';

const Header = React.lazy(() => import('./components/Header'))
const ProductsContainer = React.lazy(() => import('./containers/ProductsContainer'));
const Footer = React.lazy(() => import('./components/Footer'))
const MessageContainer = React.lazy(() => import('./containers/MessageContainer'))
const CartContainer = React.lazy(() => import('./containers/CartContainer'))
function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading ...</div>}>
        <Header />
        <main id="mainContainer">
          <div className="container">
            <ProductsContainer />
            <MessageContainer />
            <CartContainer />
          </div>
        </main>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
