import Card from "@components/Card";
import React from "react";

const Home = () => {
    return (
        <div className="bg-dark-400 pt-10 pl-5 pr-5 min-h-screen">
            <div className="grid grid-cols-2 gap-3 gap-y-4">
                <Card
                    className="w-auto h-60 "
                    title="The Big Big Big Burger"
                    description="İki kişi gidildiğinde 20% indirim"
                    discount="10%"
                    district="Bahçelievler"
                    url="https://res.cloudinary.com/aatlj/image/upload/v1636209427/eb0673c4e4fdab1d38d77f737ce885e6_572512c554.png"
                />
                <Card
                    className="w-auto h-60 "
                    title="Pizza İl Forno"
                    description="İki kişi gidildiğinde 20% indirim sdvdsvsdndjlskvjsdlkjvsdklvjslşkvvj"
                    discount="5%"
                    district="Kızılay"
                    url="https://res.cloudinary.com/aatlj/image/upload/v1636209427/eb0673c4e4fdab1d38d77f737ce885e6_572512c554.png"
                />
                <Card
                    className="w-auto h-60 "
                    title="Pizza İl Forno"
                    description="İki kişi gidildiğinde 20% indirim sdvdsvsdndjlskvjsdlkjvsdklvjslşkvvj"
                    discount="5%"
                    district="Kızılay"
                    url="https://res.cloudinary.com/aatlj/image/upload/v1636209427/eb0673c4e4fdab1d38d77f737ce885e6_572512c554.png"
                />
            </div>
        </div>
    );
};

export default Home;
