import { useState, useEffect } from "react";
import Breadcrumb from "../../components/UI/Breadcrumbs/Breadcrumb";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import useProductApi from "../../service/product/useProductApi";
import "./style.scss";
import ProductCarousel from "../../components/UI/Carousel/ProductCarousel";



const ProductItem = () => {
    let [data, setData] = useState([]);
    let [product, setProduct] = useState([]);

    let location = useLocation();
    let { slug } = useParams();

    function createBreadcrumb(state) {
        let res = state.split("/").splice(1);
        setData(res);
    }

    const state = () => {
        useProductApi.getOneItem(slug).then((res) => {
            setProduct(res.data[0]);
          
        });
    };
   
    useEffect(() => {
        createBreadcrumb(location.pathname);
        state();
    }, [slug]);


   
    return (
        <section id="item" className="py-8">
            <div className="container">
                <Breadcrumb product={product} />
            </div>

            <div className="container">
                <div className="flex  gap-x-20 pt-6">

                    <div className="w-[508px] h-[554px]">
                        <ProductCarousel image={product.images} />
                    </div>
                   <div>right</div>

                    
                </div>
            </div>
        </section>
    );
};

export default ProductItem;