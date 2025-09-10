import { useParams } from "react-router-dom";

const Product = () => {
  const params = useParams();
  console.log(params);

  return <div className="pt-26">Product {params.id}</div>;
};

export default Product;
