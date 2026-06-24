import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";

const selectProperties = (state: RootState) => state.detailPage.properties

const selectId = (state:RootState) => state.detailPage.selectedId

export const selectSelectedProperty = createSelector(
    [selectProperties,selectId],
    (properties,selectedId) => properties.find((p) => p.id === selectedId)
)
    