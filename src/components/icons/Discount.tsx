import * as React from "react";

function SvgDiscount(props: React.SVGProps<SVGSVGElement>) {
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
                d="M15.443 10.057l-5.378 5.378a1.5 1.5 0 01-2.122 0L1.5 9V1.5H9l6.443 6.442a1.5 1.5 0 010 2.115v0zM5.25 5.25h.008"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default SvgDiscount;
