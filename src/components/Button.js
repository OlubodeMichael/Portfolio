import React from "react";

export function Button({children}) {
    return(
        <div>
            <button className="mt-4 py-2 px-6 bg-sky-500 text-white rounded-md w-44 h-10 hover:bg-sky-700   font-lato font-bold font-xl mt-14 mb-10 sm:mb-0">
                {children}
            </button>
        </div>
    )
}

