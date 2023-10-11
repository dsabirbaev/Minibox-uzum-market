import React from 'react'
import { Link } from 'react-router-dom';


const index = ({ data }) => {
    return (
        <div className="card w-[232px] font-[Inter] mx-auto  hover:shadow-md duration-500 border">
            <div className="relative h-[310px]">
                <Link to={`/product/${data.slugify}`}>
                    <img
                        src={`https://image.minibox.uz${data.images[0]}`}
                        alt=""
                        className="h-[310px] object-contain"
                    />
                </Link>
                <div className='absolute top-[13px] right-[11px] cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                        <path d="M5.95 2.94043C8.51792 2.94043 10 5.09277 10 5.09277C10 5.09277 11.485 2.94043 14.05 2.94043C16.705 2.94043 19 5.01043 19 7.89043C19 12.1209 12.5604 16.5601 10.3651 18.5007C10.1582 18.6836 9.84179 18.6836 9.63488 18.5007C7.44056 16.5613 1 12.1207 1 7.89043C1 5.01043 3.295 2.94043 5.95 2.94043Z" fill="#15151A" fillOpacity="0.8" />
                        <path d="M1 7.80529C1 5.1434 3.15017 2.94043 5.86486 2.94043C7.98685 2.94043 9.35921 4.29919 10 5.12716C10.6408 4.29919 12.0132 2.94043 14.1351 2.94043C16.8506 2.94043 19 5.14345 19 7.80529C19 8.9703 18.5328 10.1266 17.8534 11.2054C17.1716 12.288 16.252 13.3307 15.29 14.2781C13.9567 15.5912 12.4757 16.7791 11.4134 17.6311C10.9618 17.9933 10.5859 18.2948 10.3293 18.5194C10.1407 18.6843 9.85926 18.6843 9.67075 18.5194C9.41405 18.2948 9.03815 17.9933 8.58659 17.6311C7.52431 16.7791 6.04326 15.5912 4.70997 14.2781C3.74802 13.3307 2.82836 12.288 2.14659 11.2054C1.46724 10.1266 1 8.9703 1 7.80529ZM5.86486 3.94043C3.70929 3.94043 2 5.68881 2 7.80529C2 8.70786 2.36553 9.6765 2.99277 10.6725C3.61759 11.6646 4.47833 12.6464 5.41165 13.5656C6.71033 14.8446 8.08423 15.9454 9.13396 16.7865C9.45728 17.0456 9.74985 17.28 10 17.4874C10.2501 17.28 10.5427 17.0456 10.866 16.7865C11.9158 15.9454 13.2897 14.8446 14.5883 13.5656C15.5217 12.6464 16.3824 11.6646 17.0072 10.6725C17.6345 9.6765 18 8.70786 18 7.80529C18 5.68876 16.2914 3.94043 14.1351 3.94043C12.0406 3.94043 10.8181 5.64254 10.5033 6.15071C10.2727 6.52293 9.72727 6.52292 9.4967 6.1507C9.1819 5.64253 7.95944 3.94043 5.86486 3.94043Z" fill="#15151A" />
                    </svg>
                </div>
            </div>
            <div className="content pt-[11px] pl-2 pr-2 pb-3">
                <Link to={`/product/${data.slugify}`}>
                    <h3 className="text-[13px] leading-[15.36px] mt-[11px]" title={data.name}>
                        {data.name.length > 30 ? data.name.substring(0, 30) + "..." : data.name}
                    </h3>
                </Link>
                <div className="flex gap-x-1 mt-[6px]">
                    <a href="#">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="15"
                            viewBox="0 0 14 15"
                            fill="none"
                        >
                            <path
                                d="M7.00002 10.1342L10.605 12.31L9.64835 8.20918L12.8334 5.45002L8.63919 5.09418L7.00002 1.22668L5.36085 5.09418L1.16669 5.45002L4.35169 8.20918L3.39502 12.31L7.00002 10.1342Z"
                                fill="#F5A623"
                            />
                        </svg>
                    </a>
                    <p className="text-[#8A8D93] text-[11.2px]">5.0</p>
                    <p className="text-[#8A8D93] text-[11.2px]">
                        ({data.count} ta sotuvda bor)
                    </p>
                </div>
                <a
                    className="text-[11px] leading-[17px] text-[#1F1F26] py-1 px-[5px] bg-[#FF0] rounded h-[17px] mt-[11px] "
                    href="#"
                >
                    {String(Math.floor(data.price / 3)).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                    so'm/oyiga
                </a>
                <div className="flex items-center justify-between h-[34px]">
                    <div>
                        <sub className="text-[11.2px] text-[#757575]">
                            <del>
                                {String(Math.floor(data.price + data.price * 0.12)).replace(
                                    /\B(?=(\d{3})+(?!\d))/g,
                                    "."
                                )}
                                so'm
                            </del>
                        </sub>

                        <p className="leading-[16.8px] font-medium text-[14px] ">
                            {String(data.price).replace(/\B(?=(\d{3})+(?!\d))/g, ".")} so'm
                        </p>
                    </div>
                    <div
                        className="p-1 rounded-full border-2 border-[#D0D2D9] flex items-center justify-center cursor-pointer"
                        onClick={() => addToCart()}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                        >
                            <path
                                d="M8 10.3401V8.34009H6V12.8401C6 13.1162 5.77614 13.3401 5.5 13.3401C5.22386 13.3401 5 13.1162 5 12.8401V7.34009H8C8 4.93637 9.95227 3.34009 12 3.34009C14.0575 3.34009 16 5.04565 16 7.34009H19V19.8401C19 20.6685 18.3284 21.3401 17.5 21.3401H12.5C12.2239 21.3401 12 21.1162 12 20.8401C12 20.564 12.2239 20.3401 12.5 20.3401H17.5C17.7761 20.3401 18 20.1162 18 19.8401V8.34009H16V10.3401H15V8.34009H9V10.3401H8ZM12 4.34009C10.4477 4.34009 9 5.54381 9 7.34009H15C15 5.63453 13.5425 4.34009 12 4.34009Z"
                                fill="#15151A"
                            />
                            <path
                                d="M7.5 14.3401C7.77614 14.3401 8 14.564 8 14.8401V17.3401H10.5C10.7761 17.3401 11 17.564 11 17.8401C11 18.1162 10.7761 18.3401 10.5 18.3401H8V20.8401C8 21.1162 7.77614 21.3401 7.5 21.3401C7.22386 21.3401 7 21.1162 7 20.8401V18.3401H4.5C4.22386 18.3401 4 18.1162 4 17.8401C4 17.564 4.22386 17.3401 4.5 17.3401H7V14.8401C7 14.564 7.22386 14.3401 7.5 14.3401Z"
                                fill="#15151A"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index