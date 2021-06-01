import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
    name: "game",
    initialState: {
        health: 100,
        level: 1,
        xp: 0,
        sp: 0,
        gold: 0,
        attack: 1,
        defense: 1,
        luck: 1,
        items: [],
        specialist: "none",
        backpackOn: false,
        backpackContents: {},
        xCoordinate: 0,
        yCoordinate: 0
    },
    reducers: {
        travelNorth: (state) => {
            state.yCoordinate += 1
        },
        travelSouth: (state) => {
            state.yCoordinate -= 1
        },
        travelEast: (state) => {
            state.xCoordinate += 1
        },
        travelWest: (state) => {
            state.xCoordinate -= 1
        },
        openBackpack: (state) => {
            state.backpackOn = !state.backpackOn
        }
    }
});

export const {travelNorth, travelEast, travelSouth, travelWest, openBackpack} = gameSlice.actions
export default gameSlice.reducer