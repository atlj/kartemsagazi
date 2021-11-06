import { useEffect } from "react";
import Router from "next/router";
import Image from "next/image";

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
function Error({ statusCode }) {
    useEffect(() => {
        Router.push("/");
    }, []);
    return (
        <div className="bg-dark-400 min-h-screen justify-center flex flex-col items-center font-mono text-6xl text-white ">
            <div className="relative w-2/3 mb-5">
                <Image
                    src="https://media.giphy.com/media/Vu7FU5T4RJPo1esgna/giphy.gif"
                    layout="responsive"
                    width={500}
                    height={281}
                />
            </div>
            {statusCode ? `${statusCode} Hatası` : "İstemci Hatası"}
        </div>
    );
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default Error;
