'use client';
import CherryBlossomPetals from "@/components/CherryBlossom";
import Platformer from "@/components/Platformer";
import characterImg from "../public/character.jpg";
import backgroundImg from "../public/background.webp"; 
import groundImg from "../public/ground_asset.jpg"; 

const Generate = () => {
    const handleButtonClick = async () => {
        const dataToSend = {
            key: "value" // Replace with your actual data
        };

        try {
            const response = await fetch('http://127.0.0.1:5000/api/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend),
            });

            const responseData = await response.json();
            console.log(responseData);
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };
    return (
        <>
            <div className="background"></div>
            <div className="generation pt-[8%] my-0 mx-auto flex items-center justify-center text-center">
                <div className="heading-wrapper">
                    <h1 className="font-[Karmatic] text-[6em] text-[--title]">
                        GENERATE
                    </h1>
                </div>
            </div>
            <div className="subheading-wrapper flex items-center justify-center text-center">
                <h3 className="font-[Karmatic] text-[2em] text-[--body] pt-4 pb-8">
                    Kickstart your indie dev journey!
                </h3>
            </div>
            <div className="text-input w-full pb-5 flex items-center justify-center">
                <input
                    type="text"
                    maxLength={100}
                    placeholder="Enter your game idea..."
                    className="w-[90%] max-w-[600px] p-2 border font-[SuperLegend]"
                />
            </div>
            <div className="flex items-center justify-center text-center text-[--body]">
                <div className="font-[SuperLegend]">Number of Assets: </div>
                <div className="pl-4">
                    <input
                        type="text"
                        defaultValue="5"
                        step="1"
                        min="1"
                        max="20"
                        maxLength={2}
                        className="w-[70px] p-2 border font-[SuperLegend] text-[black]"
                    />
                </div>
                
            </div>
            <div className="flex items-center justify-center p-[20px]"> {/* Full height for centering */}
                <button 
                    onClick={handleButtonClick} 
                    className="flex items-center font-[SuperLegend] justify-center text-center text-[--body] p-4 bg-pink-500 text-white rounded hover:bg-pink-600">
                    Generate Now
                </button>
            </div>
            <div className="demo-section py-12 w-full text-white pt-80">
                {/* Demo Heading */}
                <div className="text-center mb-8">
                    <h2 className="font-[Karmatic] text-[4em] text-[--title] pb-4">
                        Game Environment Demo
                    </h2>
                    <p className="font-[SuperLegend] text-[1.5em] text-[--body] pb-10">
                        Preview your assets in action!
                    </p>
                </div>
                <Platformer 
                    characterImg={characterImg} 
                    backgroundImg={backgroundImg} 
                    groundImg={groundImg} 
                />
            </div>

        <CherryBlossomPetals />
        </>
    );
}
 
export default Generate;