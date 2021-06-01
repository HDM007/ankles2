import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import {travelNorth, travelSouth, travelEast, travelWest, openBackpack} from "./gameSlice";

export default function Game() {
    const game = useSelector((state) => state.game);
    const dispatch = useDispatch();
    if (game.backpackOn) {
        return ( 
            <section aria-label="backpack toggle section">
                <h2>Backpack is open!</h2>
                <p> Current backpack contents are: </p>
                <ol>
                    <li> Add default items to backpack </li>
                    <li> Then we can start figuring out displaying them via object keys</li>
                    <li> Eventually we can use a backend to persist the items.</li>
                </ol>
                <button onClick = {() => {dispatch(openBackpack())}}>Close Backpack</button>
            </section>
        )} else {
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
                
                <section aria-label="backpack toggle section">
                    <button onClick = {() => {dispatch(openBackpack())}}> Open Backpack </button>
                </section>

                </div>
            )
        }
    }