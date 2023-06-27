import { useContext } from "react";
import { Cart } from "./context/Context";
import SingleProduct from "./SingleProduct";
import Filters from "./Filter";

const Home = () => {
  const {
    state: { products },
    filterState: { byStock, byFastDelivery, byRating, searchQuery, sort },
  } = useContext(Cart);

  const transformedProducts = () => {
    let sortedProducts = products;
    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };

  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {transformedProducts().map((product, index) => {
          return <SingleProduct product={product} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Home;
