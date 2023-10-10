import { useState, useEffect } from "react";
import Breadcrumb from "../../components/UI/Breadcrumbs/Breadcrumb";
import { useParams } from "react-router-dom";
import useProductApi from "../../service/product/useProductApi";
import ProductCarousel from "../../components/UI/Carousel/ProductCarousel";
import useLikeStore from "../../store/useLikeStore";
import { Star, Plus, Minus } from "../../components/CardIcons";
import { Tooltip, Typography } from "@material-tailwind/react";


const ProductItem = () => {
  let [product, setProduct] = useState([]);
  let [countProduct, setCountProduct] = useState(0);
  let { slug } = useParams();
  const { likeProdFunc } = useLikeStore();

  const [isLike, setIsLike] = useState(false);

  const state = () => {
    useProductApi.getOneItem(slug).then((res) => {
      setProduct(res.data[0]);
    });
  };

  const setLikeFun = () => {
    setIsLike(!isLike);
    likeProdFunc(product, isLike, setIsLike);
  };

  const increase  = () => {
    setCountProduct(countProduct + 1);
  }
  const decrease  = () => {
    if(countProduct > 0){
      setCountProduct(countProduct - 1);
    }
  }

  useEffect(() => {
    state();
    // console.log(JSON.parse(localStorage.getItem("LIKE_COLLECTION")));
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


          <div className="grow p-4">
            <div className="flex justify-between font-['RobotoRegular'] mb-[12px]">
              <div className="flex items-center gap-x-[16px] text-[#62656A] text-[13px]">
                <span className="flex items-center gap-x-1"><Star /> 5(202 baho)</span>
                <p>Koʻproq 9000 buyurtma</p>
              </div>
              <button
                onClick={() => setLikeFun()}
                className="flex items-center h-[24px] gap-[10px] text-[#141415]"
              >
                <span>

                  {!JSON.parse(localStorage.getItem("LIKE_COLLECTION"))?.find(
                    (pr) => pr._id === product._id
                  ) ? (
                    <i className="pi pi-heart text-md mt-1"></i>
                  ) : (
                    <i className="pi pi-heart-fill text-md mt-1"></i>
                  )}

                </span>
                <div>

                  {!JSON.parse(localStorage.getItem("LIKE_COLLECTION"))?.find(
                    (pr) => pr._id === product._id
                  ) ? (
                    <p className="text-md">Tanlash</p>
                  ) : (
                    <p>Tanlangan</p>
                  )}

                </div>
              </button>
            </div>

            <h2 className="text-[#212121] text-[22px] font-['RobotoRegular'] mb-[8px]">{product?.name}</h2>

            <div className="relative pb-[25px] mb-[25px] flex  gap-x-[35px] text-[#141415] font-['RobotoRegular']">
              <div className="flex flex-col gap-y-[8px]">

                <span>Sotuvchi:</span>
                <div className="flex items-center gap-x-1">
                  <span>Yetkazib berish:</span>
                  <span><Tooltip
                    placement="bottom"
                    className="border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10"
                    content={
                      <div className="w-40">
                        <Typography color="blue-gray" className="font-medium">
                          10 kun, 20 kun, 1 oy
                        </Typography>

                      </div>
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="h-[14px] w-[14px] cursor-pointer text-blue-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                      />
                    </svg>
                  </Tooltip></span>
                </div>

              </div>
              <div className="flex flex-col gap-y-[8px]">
                <span>Online Market</span>
                <span>1 kun, bepul</span>
              </div>

              <span className="bg-gray-200 h-[2px] w-[100%] absolute top-[100%] "></span>
            </div>

            <div className="mb-[24px]">
              <span className="text-[#212121] font-['RobotoRegular'] mb-[16px] block">Rang:</span>
              <ul className="flex items-center gap-x-[10px]">
                {
                  product.length ? product?.map((item) => (
                    <li className="w-[45px] h-[45px] rounded-full">{item}</li>
                  )) : <p className="font-['RobotoMedium'] text-lg">Tovar rangi yo'q!</p>
                }
              </ul>
            </div>

            <div className="font-['RobotoRegular'] mb-[24px]">
              <span className="text-[#212121] mb-[9px] block">Miqdor:</span>

              <div className="flex items-center gap-x-[18px]">
                <div className="flex items-center gap-x-1">
                  <button onClick={() => decrease()}><Minus /></button>
                  <span>{countProduct}</span>
                  <button onClick={() => increase()}><Plus /></button>
                </div>
                <p className="text-[#00C853]">
                  Sotuvda {product.count} dona bor
                </p>
              </div>
            </div>
            
            <div className="font-['RobotoRegular'] mb-[24px]">
              <span className="text-[#212121] mb-[9px] block">Narx:</span>

              <div className="flex items-center gap-x-[20px] font-['RobotoRegular']">
                <span className="text-[20px] font-['RobotoMedium'] text-[#212121]">{product?.price}</span> <span className="line-through text-[#8A8D93]">{String(Math.floor(product?.price + product?.price * 0.12)).replace(/\B(?=(\d{3})+(?!\d))/g, ".")} so'm</span>
                <span className="text-[13px] font-['RobotoMedium'] bg-[#AF7] rounded-[4px] px-[6px] py-[3px]">Katta sotuvlar</span>
              </div>
            </div>

            <div className="mb-[24px]">
                <div className="flex items-center justify-between">
                    <div className="flex">
                      <span>Oyiga 3  so'mdan </span>
                      <span>muddatli to'lov</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductItem;
