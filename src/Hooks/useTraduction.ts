import { useContext } from "react";
import { TraductionContext } from "../Provider/Traduction";

// Hook personnalisé pour accéder au contexte
export const useTraduction = () => {
    const context = useContext(TraductionContext);
    if (context === undefined) {
        throw new Error('useTraduction must be used within a TraductionProvider');
    }
    return context;
};