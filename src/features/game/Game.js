import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import {travelNorth, travelSouth, travelEast, travelWest} from "./gameSlice";

export default function Game() {
    const game = useSelector((state) => state.game);
    const dispatch = useDispatch();

    return (
        <div>
            <section aria-label="travel buttons">
                <h2> Travel Buttons </h2>
                <p> These change the x-and-y values in state by 1 or -1 based on the cardinal direction.</p>
                <p>You are at point [ {game.xCoordinate}, {game.yCoordinate} ] on the grid. </p>
                <button aria-label="travel north" onClick = {() => {dispatch(travelNorth())}}> Travel North </button>
                <button aria-label="travel south" onClick = {() => {dispatch(travelSouth())}}> Travel South </button>
                <button aria-label="travel east" onClick = {() => {dispatch(travelEast())}}> Travel East </button>
                <button aria-label="travel west" onClick = {() => {dispatch(travelWest())}}> Travel West </button>
            </section>

            <section aria-label="backpack toggle">
                <button> Backpack </button>
            </section>
        </div>
    )
};