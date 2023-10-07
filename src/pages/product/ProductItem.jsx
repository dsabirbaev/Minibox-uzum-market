import { useState, useEffect } from "react";
import Breadcrumb from "../../components/UI/Breadcrumbs/Breadcrumb";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import useProductApi from "../../service/product/useProductApi";
import "./style.scss";
import { Bag, Box, Truck } from "../../components/CardIcons";
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
            // console.log(res.data[0]);
        });
    };

    useEffect(() => {
        createBreadcrumb(location.pathname);
        state();
    }, [slug]);

    console.log(product)
    return (
        <section id="item" className="py-8">
            <div className="container">
                <Breadcrumb data={data} />
            </div>

            <div className="container">
                <div className="flex pt-6">
                    {/* {
                        product?.images?.map((item) => {
                            return  <img src={`https://image.minibox.uz${item}`} alt="img" className="w-[250px]" />
                        })
                    } */}

                    <div>
                        <h1 className="text-xl font-['InterSemibold'] mb-2">{product?.name}</h1>
                        <div className="bg-yellow-200 p-1 inline-block rounded-[36px] px-2 mb-2">
                            <h2 className="font-['InterSemibold'] text-[20px]">{String(Math.floor(product?.price / 3)).replace(/\B(?=(\d{3})+(?!\d))/g, ".")} so'm x 3 oy</h2>
                        </div>
                        <p>Narxi:</p>
                        <div className="flex gap-x-4 items-center mb-4">
                            <span className="text-md font-['InterSemibold'] text-[15px]">{String(product?.price).replace(/\B(?=(\d{3})+(?!\d))/g, ".")} so'm</span>
                            <span className="line-through text-gray-300">{String(Math.floor(product?.price + product?.price * 0.12)).replace(/\B(?=(\d{3})+(?!\d))/g, ".")} so'm</span>
                        </div>
                        <div className="p-3 bg-gray-100 rounded-lg min-w-[320px] max-w-[100%] mx-auto mb-4">
                            <small className="mb-2 block">Yetkazib berish:</small>
                            <div className="mb-2 flex gap-x-2">
                                <Box />  
                                <span>7-Oktabrdan</span>
                                <span className="text-green-500">Bepul</span>
                            </div>
                            <div className="flex gap-x-2">
                                <Truck/>
                                <span>10-Oktabrgacha</span>
                                <span className="text-green-500">Bepul</span>
                            </div>
                        </div>
                        <button className="product-btn bg-[#0c7a43] hover:bg-[#f0f0ed] rounded-full p-[16px] duration-200 mb-4">
                            <span className="font-['InterSemibold'] text-black rounded-2xl text-[22px] sm:text-base bg-[#f0f0ed] py-1 px-2 mr-2">{String(Math.floor(product?.price / 3)).replace(/\B(?=(\d{3})+(?!\d))/g, ".")} so'mdan</span>
                            <span className="text-xs sm:text-base text-white">3 oyga muddatli to'lov</span>
                        </button>
                        <div className="flex items-center gap-x-2">
                            <button className="flex items-center gap-x-1 duration-200 hover:opacity-[0.8] bg-[#0c7a43] p-[16px] rounded-full text-white font-['InterSemibold'] text-[16px]">
                                <Bag color="#fff"/> <span>Savatga qo'shish</span>
                            </button>
                            <button className="flex items-center gap-x-1 border border-[#0c7a43] p-[16px] rounded-full text-[#0c7a43] font-['InterSemibold'] text-[16px]">
                                <Bag/> <span>Savatga o'tish</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductItem;