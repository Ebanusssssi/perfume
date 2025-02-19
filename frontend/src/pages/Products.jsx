import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "../components/ProductItem";

const Products = () => {
    const { PRODUCTS } = useContext(ShopContext);
  
  return (
    <div className="w-full h-fit px-[4.7vw] py-[4.5vw] lg:py-[3vw]">
      <h2 className="w-full text-center text-[7.5vw] font-medium mb-[3vw]">All products</h2>
      <div className="grid w-full h-fit grid-cols-2 lg:grid-cols-5 gap-[4.5vw] lg:gap-[2.2vw] py-[4.5vw] lg:py-[3vw] border-t border-t-slate-200">
        {
          PRODUCTS.map((product, index) => (
            <ProductItem key={index} id={product._id} image={product.image} title={product.title} brand={product.brand} />
          ))
        }
      </div>
    </div>
  )
}

export default Products