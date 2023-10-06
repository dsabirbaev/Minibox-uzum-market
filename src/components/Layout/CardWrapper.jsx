import React from "react";
import Card from "../UI/Card/Card";

const CardWrapper = ({title, data}) => {
    
    return (
        <div className="container">
            <div className="flex items-center ">
                <h2 className="text-left font-semibold text-[28px]">{title}</h2>
                <span className="px-[4px] py-2 ms-3 hover:bg-blue-gray-50 grid place-content-center">
                  
                </span>
            </div>

            <div className="grid  my-6 grid-cols-5 gap-x-8 gap-y-4 ">
                {data?.map((item, index) => {
                    return <Card key={index} state={item} />;
                })}
            </div>
        </div>
    );
};

export default CardWrapper;
