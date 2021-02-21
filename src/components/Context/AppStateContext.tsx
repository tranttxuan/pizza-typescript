import React, { createContext } from "react";

interface AppStateValue {
    cart: {
        items: { name: string; price: number };
    };
}

export const AppStateContext: AppStateValue = createContext();
