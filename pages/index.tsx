import Card from "@components/Card";
import client from "@services/graphql";
import { getPlaces } from "@services/graphql/queries/place";
import { GetServerSideProps } from "next";
import React from "react";

type Props = {
    places: Place[];
};

const Home = ({ places }: Props) => {
    console.log(places);

    return (
        <div className="bg-dark-400 pt-10 pl-5 pr-5 min-h-screen">
            <div className="grid grid-cols-2 gap-3 gap-y-4">
                {places.map((place) => (
                    <Card
                        className="w-auto h-60"
                        {...{
                            description: place.description,
                            discount: place.discount,
                            district: place.location.district,
                            title: place.name,
                            url: place.image.url,
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const { data } = await client.query<{ places: Place[] }>({
        query: getPlaces,
    });

    return {
        props: {
            places: data.places,
        },
    };
};

export default Home;
