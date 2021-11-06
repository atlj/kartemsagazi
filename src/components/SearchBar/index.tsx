import React from "react";
import * as Icons from "@components/icons";
import cn from "classnames";
import styles from "./index.module.css";

type Props = {
    onChange: (text: string) => void;
    className?: string;
};

function SearchBar({ onChange, className }: Props) {
    return (
        <div
            className={cn(
                "bg-dark-500 flex items-center pt-3 pb-3 pl-3 pr-3 rounded-lg w-full max-w-lg  self-center ",
                styles.container,
                className,
            )}
        >
            <Icons.Search className="text-white w-5 h-5" />
            <div className={cn("flex-1 flex ml-2 ", styles.field)}>
                <input
                    onInput={(event) => {
                        onChange(event.currentTarget.value);
                    }}
                    className="text-white text-sm flex-1 "
                    type="text"
                    placeholder="Mekan ara"
                />
            </div>
        </div>
    );
}

export default SearchBar;
