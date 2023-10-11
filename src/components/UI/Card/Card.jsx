
import {Link} from "react-router-dom";
import { Bag, Star} from "../../CardIcons";

import useProductApi from "../../../service/product/useProductApi";
import { ToastContainer, toast } from 'react-toastify';

const Card = ({state: {name, price, slugify, images, count, colors, units, createdAt, status}}) => {
    const addToCart =  () => {
        useProductApi.addToCartFunc({
          name,
          price,
          slugify,
          images,
          count,
          colors,
          units,
          createdAt,
          status,
        }).then((res) => {
            toast.success("Added to cart!", { autoClose: 1000 });
        });
     
    };
    return (
        <div className="card max-w-[232px] h-[456px] font-[Inter] mx-auto  hover:shadow-md duration-500 border">
             <ToastContainer />
            <Link to={`/product/${slugify}`}>
                <div className="relative bg-[#efefef]">
                    <img src={`https://image.minibox.uz${images[0]}`} alt="" className="min-h-[310px] object-contain" />
                </div>
            </Link>
            <div className="content pt-[11px] pl-2 pr-2">
                <Link to={`/product/${slugify}`}>
                    <h3 className="text-[15px] mt-[11px]">
                        {name.length > 25 ? name.substring(0, 25) + "..." : name}
                    </h3>
                </Link>
                <div className="flex gap-x-1 mt-[6px] mb-1">
                    
                    <Star/>
                    <p className="text-[#8A8D93] text-[11.2px]">5.0</p>
                    <p className="text-[#8A8D93] text-[11.2px]">({count} ta sotuvda bor)</p>
                </div>
                <a
                    className="text-[16px] font-['InterMedium']  text-[#000] px-[8px] py-[5px] bg-[#6cffbda0] rounded-[20px] mb-1"
                    href="#"
                >
                    {String(Math.floor(price / 3)).replace(/\B(?=(\d{3})+(?!\d))/g, ".")} so'm x 3 oy
                </a>
                <div className="flex items-center justify-between h-[34px]">
                    <div>
                        <sub className="text-[12px] text-[#a3a3a3]">
                            <del>
                                {String(Math.floor(price + price * 0.12)).replace(/\B(?=(\d{3})+(?!\d))/g, ".")} so'm
                            </del>
                        </sub>

                        <p className="leading-[16.8px] font-['InterMedium'] text-[15px] ">
                            {String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ".")} so'm
                        </p>
                    </div>
                    <button onClick={() => addToCart()} className="p-1 rounded-full border-2 border-[#D0D2D9] flex items-center justify-center">
                        <Bag/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;