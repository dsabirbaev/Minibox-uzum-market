import { useEffect } from "react";
import Intro from "../../components/Intro/Intro";
import CardWrapper from "../../components/Layout/CardWrapper";

import useProductApi from "../../service/product/useProductApi";
import useProductStore from "../../store/useProductStore";

import arrow from "../../assets/icons/arrow-up.svg";
const Home = () => {

    const { isLoad, setLoader, setProduct, product } = useProductStore();

    useEffect(() => {
        useProductApi.getAll().then((res) => {
            setProduct(res.data);
            setLoader();
        });
    }, []);

    if (!isLoad) {
        return <h1>LOADING . . .</h1>;
    }
    return (
        <div>

            <main id="main" className="relative">
                <Intro />
                <CardWrapper data={product} title="Barcha mahsulotlar"></CardWrapper>
                
                <a href="#header" className="fixed right-0 top-[90%]"><img src={arrow} alt="#" /></a>
            </main>

        </div>
    );
};

export default Home;