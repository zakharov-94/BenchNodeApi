import { getPlaces } from "../../services/search/providers/openCageDataProvider";

export const getPlacesByName = async (q: string) => {
    if (q.length < 3) {
        return {
            type: "FeatureCollection",
            features: []
        };
    }

    return await getPlaces(q);
};