import React, { useEffect } from "react";
import Router from "next/router";
import { GetServerSideProps } from "next";
import client from "@services/graphql";
import { getPlaceById } from "@services/graphql/queries/place";
import Image from "next/image";

import * as Icons from "@components/icons";

type Props = {
    place: Place | null;
};

function PlacePage({ place }: Props) {
    useEffect(() => {
        if (place === null) {
            Router.push("/");
        }
    }, [place]);

    return (
        <div className="bg-dark-400 pt-5 pl-5 pr-5 min-h-screen flex flex-col">
            <Icons.Cross
                style={{ cursor: "pointer" }}
                className="text-white w-9 h-9"
                onClick={() => {
                    Router.back();
                }}
            />
            <div className="relative w-72 h-52 self-center mt-6">
                <Image
                    src={place.image.url}
                    objectFit="cover"
                    className="rounded-lg"
                    layout="fill"
                />
            </div>
            <div className="font-mono text-white self-center font-medium text-3xl mt-8 ">
                {place.name}
            </div>
            <div className="font-mono self-center text-white opacity-80 text-lg mt-5 ">
                {place.description}
            </div>
            <div className="flex mt-16 justify-center ">
                <a
                    href={place.location.adress}
                    className=" mr-5 p-5 bg-dark-500 flex flex-col  w-full max-w-xs items-center rounded-lg  "
                >
                    <Icons.GoogleMaps className="text-white w-auto h-full" />
                </a>
                <div className="bg-dark-500 rounded-lg justify-between flex-col flex p-3 ">
                    <div>
                        <div className="text-primary-400 font-mono text-base">
                            Semt
                        </div>
                        <div className="text-white font-mono text-base">
                            {place.location.district}
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="text-primary-400 font-mono text-base">
                            İndirim
                        </div>
                        <div className="text-white font-mono text-base">
                            {place.discount}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps<Props> = async (
    context,
) => {
    const { data } = await client.query<
        { place: Place | null },
        { id: string }
    >({
        query: getPlaceById,
        variables: { id: context.params.id as string },
    });
    return { props: { place: data.place } };
};

export default PlacePage;
