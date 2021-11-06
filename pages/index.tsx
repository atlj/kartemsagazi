import { Card, SearchBar } from "@components";
import client from "@services/graphql";
import { getPlaces } from "@services/graphql/queries/place";
import { GetServerSideProps } from "next";
import React, { useMemo, useState } from "react";

type Props = {
    places: Place[];
};

const Home = ({ places }: Props) => {
    const [searchString, setSearchString] = useState<string | null>(null);

    const data = useMemo<Place[]>(() => {
        if (searchString === null) {
            return places;
        }
        // search for searchstring in places name
        return places.filter((place) => {
            if (
                place.location.district
                    .toLowerCase()
                    .includes(searchString.toLowerCase()) ||
                place.name.toLowerCase().includes(searchString.toLowerCase())
            ) {
                return true;
            }
            return false;
        });
    }, [searchString, places]);

    return (
        <div className="bg-dark-400 pt-10 pl-5 pr-5 min-h-screen flex flex-col ">
            <SearchBar onChange={setSearchString} />
            <div className="grid grid-cols-2 mt-8 md:grid-cols-4 sm:grid-cols-3 lg:grid-cols-6 gap-3 gap-y-4">
                {data.map((place) => (
                    <Card
                        className="w-auto h-60 md:max-w-xs"
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
