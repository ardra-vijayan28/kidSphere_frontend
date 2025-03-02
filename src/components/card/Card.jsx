/* eslint-disable react/prop-types */
// import React from "react";
// import {
//     Card,
//     CardHeader,
//     CardBody,
//     CardFooter,
//     Typography,
//     Button,
//   } from "@material-tailwind/react";

function Cards() {
    return (
        <div className="bg-white font-sans p-10">
            <div className="max-w-5xl max-lg:max-w-3xl max-md:max-w-sm mx-auto">
                <div>
                    <h2 className="text-3xl font-extrabold text-gray-800 inline-block">Play Areas</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                    <div className="flex max-lg:flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-[1.03] transition-all duration-300">
                        <div className="h-64 lg:w-full">
                            <img src="https://i.pinimg.com/736x/3c/4a/3a/3c4a3a00a743a54467753c036d5bb78e.jpg" alt="Blog Post 1" className="w-full h-full object-cover" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800">Indoor Play Areas</h3>
                            {/* <span className="text-sm block text-gray-400 mt-2">10 FEB 2023 | BY JOHN DOE</span> */}
                            <p className="text-sm text-gray-500 mt-4">An action-packed play paradise where kids can climb, slide, jump, and explore—endless fun, boundless adventure, and unforgettable memories await!</p>
                            <a href="/indoor" className="mt-4 inline-block text-blue-600 font-semibold text-sm hover:underline">See Details</a>
                        </div>
                    </div>
                    <div className="flex max-lg:flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-[1.03] transition-all duration-300">
                        <div className="h-64 lg:w-full">
                            <img src="https://img.freepik.com/premium-photo/colorful-playground-equipment-with-children-playing_952286-8662.jpg" alt="Blog Post 2" className="w-full h-full object-cover" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800">Outdoor Play Areas</h3>
                            {/* <span className="text-sm block text-gray-400 mt-2">7 JUN 2023 | BY MARK ADAIR</span> */}
                            <p className="text-sm text-gray-500 mt-4">A thrilling outdoor play haven where kids can climb, run, and explore—fresh air, boundless fun, and endless adventures await!</p>
                            <a href="/outdoor" className="mt-4 inline-block text-blue-600 font-semibold text-sm hover:underline">See Details</a>
                        </div>
                    </div>
                    <div className="flex max-lg:flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-[1.03] transition-all duration-300">
                        <div className="h-64 lg:w-full">
                            <img src="https://www.familyofchildhood.com/wp-content/uploads/2017/05/OP-00912B.jpg" alt="Blog Post 2" className="w-full h-full object-cover" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800">Water Parks</h3>
                            {/* <span className="text-sm block text-gray-400 mt-2">5 OCT 2023 | BY SIMON KONECKI</span> */}
                            <p className="text-sm text-gray-500 mt-4">Dive into a world of splashes and thrills! From exciting slides to splash zones and water games, endless fun and unforgettable aquatic adventures await!</p>
                            <a href="waterpark" className="mt-4 inline-block text-blue-600 font-semibold text-sm hover:underline">See Details</a>
                        </div>
                    </div>
                    <div className="flex max-lg:flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-[1.03] transition-all duration-300">
                        <div className="h-64 lg:w-full">
                            <img src="https://content.jdmagicbox.com/comp/def_content/amusement_parks/default-amusement-parks-8.jpg" alt="Blog Post 2" className="w-full h-full object-cover" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800">Adventure Parks</h3>
                            {/* <span className="text-sm block text-gray-400 mt-2">10 DEC 2023 | BY SIMON KONECKI</span> */}
                            <p className="text-sm text-gray-500 mt-4">An adrenaline-packed adventure park where you can climb, zip, swing, and explore—thrills, challenges, and endless fun await!</p>
                            <a href="adventurepark" className="mt-4 inline-block text-blue-600 font-semibold text-sm hover:underline">See Details</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Cards;   