import { exploreData } from "@/data/exploreMoreData";
import type { LocationType } from "@/type/ExploreMore";

export function useExploreMore(
    selectedProperty: string,
    selectedLocation : string
){

    const selectedNavType = exploreData.find(
    (exploreData) => exploreData.type === selectedProperty
    )

    const locations : LocationType[] = selectedNavType?.locations ?? []

    const selectedLocationData = locations.find(
        (location) => location.location === selectedLocation
    )

    const locationDataoRNull = !!selectedLocationData
    const areaAndHousing =
        selectedLocationData?.areas.flatMap((area) =>
            area.propertyTypes.map((type) => ({
            area: area.area,
            type,
            }))
        ) ?? [];

            const uniqueHousingOptions = [
        ...new Set(areaAndHousing.map((item) => item.type))
        ];

    return {
        locations,
        locationDataoRNull,
        areaAndHousing,
        uniqueHousingOptions
    }
}