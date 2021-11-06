import React from "react";
import Image from "next/image";
import cn from "classnames";
import styles from "./index.module.css";

import * as Icons from "@components/icons";

type Props = {
    className?: string;
    url: string;
    title: string;
    description: string;
    district: string;
    discount: string;
    key?: string;
};

function Card({
    url,
    title,
    description,
    district,
    discount,
    className,
    key,
}: Props) {
    return (
        <div
            key={key}
            className={cn(
                "bg-dark-500 p-2 rounded-lg flex-col flex justify-between ",
                styles.container,
                className,
            )}
        >
            <div className="flex flex-1 flex-col">
                <div className="relative w-full h-1/2 ">
                    <Image
                        className={cn("rounded-lg")}
                        layout="fill"
                        objectFit="cover"
                        src={url}
                    />
                </div>
                <div
                    className={cn(
                        " mt-2 font-mono font-medium text-white text-sm ",
                        styles.textdots,
                    )}
                >
                    {title}
                </div>
                <div
                    className={cn(
                        " mt-1 font-mono opacity-80  text-white  ",
                        styles.textdots,
                        styles.labelText,
                    )}
                >
                    {description}
                </div>
            </div>
            <div className=" flex justify-between">
                <div
                    className={cn(
                        "flex-row items-center flex  truncate text-white",
                        styles.labelText,
                    )}
                >
                    <Icons.MapPin className=" w-5 h-5 mr-1" />
                    {district}
                </div>
                <div
                    className={cn(
                        " items-center flex  font-bold text-primary-400 ",
                        styles.labelText,
                    )}
                >
                    <Icons.Discount className="mr-1 w-5 h-5" />
                    {discount}
                </div>
            </div>
        </div>
    );
}

export default Card;
