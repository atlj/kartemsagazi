import { Card, SearchBar } from "@components";
import client from "@services/graphql";
import { getPlaces } from "@services/graphql/queries/place";
import { GetStaticProps } from "next";
import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
            <div className="relative self-center mb-8 w-2/3 max-w-xs ">
                <Image
                    src="/res/EmsaGazi.png"
                    width="316"
                    height="100"
                    layout="responsive"
                />
            </div>
            <SearchBar onChange={setSearchString} />
            <div className="grid grid-cols-2 mt-8 md:grid-cols-4 sm:grid-cols-3 lg:grid-cols-6 gap-3 gap-y-4">
                {data.map((place) => (
                    <Link key={place.id} href={"/" + place.id}>
                        <a>
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
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
    const { data } = await client.query<{ places: Place[] }>({
        query: getPlaces,
    });

    const copyData = [...data.places].sort((a, b) => a.order - b.order);

    return {
        props: {
            places: copyData,
        },
    };
};

export default Home;
