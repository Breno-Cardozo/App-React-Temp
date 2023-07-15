import React from "react";
import propTypes from "prop-types";

function Card({ data }) {
    const { location, current } = data;

    return (
        <div className="bg-white p-5 mt-10 rounded-lg shadow-2xl min-w-[220px]">
            <div className="text-center">
                <span className="block text-xl font-bold text-blue-900">
                    {location.name}
                </span>
                <span className="text-sm font-medium">{`${location.region}, ${location.country}`}</span>
            </div>

            <div className="flex mt-2 mb-2 justify-center">
                <span className="text-7xl font-bold text-blue-950 flex ">
                    {current.temp_c}
                </span>
                <span className="text-2xl font-bold text-blue-950 mt-2">
                    ºC
                </span>
            </div>

            <div className="flex justify-center flex-col item-center justify-item-center">
                <img src={current.condition.icon} />
                <span className="text-blue-950 font-bold justify-center flex">
                    {current.condition.text}
                </span>
            </div>
        </div>
    );
}

export default Card;

Card.propTypes = {
    data: propTypes.object,
}.isRequired;
