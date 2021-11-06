import * as React from "react";

function SvgMapPin(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M15.75 7.5c0 5.25-6.75 9.75-6.75 9.75s-6.75-4.5-6.75-9.75a6.75 6.75 0 0113.5 0z"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M9 9.75a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default SvgMapPin;
