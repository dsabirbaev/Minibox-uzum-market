import { useState, useEffect } from "react";
import Breadcrumb from "../../components/UI/Breadcrumbs/Breadcrumb";
import { useParams } from "react-router-dom";
import useProductApi from "../../service/product/useProductApi";
import ProductCarousel from "../../components/UI/Carousel/ProductCarousel";
import useLikeStore from "../../store/useLikeStore";

const ProductItem = () => {
  let [product, setProduct] = useState([]);
  let { slug } = useParams();
  const { likeProdFunc } = useLikeStore();

  const [isLike, setIsLike] = useState(false);

  const state = () => {
    useProductApi.getOneItem(slug).then((res) => {
      setProduct(res.data[0]);
      console.log(res.data[0]);
    });
  };

  const setLikeFun = () => {
    setIsLike(!isLike);
    likeProdFunc(product, isLike, setIsLike);
  };

  useEffect(() => {
    state();
    console.log(JSON.parse(localStorage.getItem("LIKE_COLLECTION")));
  }, [slug]);

  return (
    <section className="my-8">
      <div className="container">
        <Breadcrumb product={product} />
      </div>

      <div className="container">

        <div className="flex  gap-x-20 pt-6">

          <div className="w-[508px] h-[554px]">
            <ProductCarousel image={product.images} />
          </div>


          <div className="info  grow p-4">
            <div className="flex justify-between">
              <span>123 sotuvda bor</span>
              <button
                onClick={() => setLikeFun()}
                className="flex items-center h-[24px] gap-[10px]"
              >
                <span>
                  {!JSON.parse(localStorage.getItem("LIKE_COLLECTION"))?.find(
                    (pr) => pr._id === product._id
                  ) ? (
                    <i className="pi pi-heart text-md mt-1"></i>
                  ) : (
                    <i className="pi pi-heart-fill text-xl mt-1"></i>
                  )}
                </span>
                <div>
                  {" "}
                  {!JSON.parse(localStorage.getItem("LIKE_COLLECTION"))?.find(
                    (pr) => pr._id === product._id
                  ) ? (
                    <p className="text-md">Tanlash</p>
                  ) : (
                    <p>Tanlangan</p>
                  )}{" "}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductItem;
