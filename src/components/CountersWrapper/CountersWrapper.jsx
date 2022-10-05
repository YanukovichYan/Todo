import React from 'react';
import classes from "./CountersWrapper.module.css";
import Counter from "../Counter/Counter";

const CountersWrapper = () => {


    return (
        <div className={classes.countersWrapper}>
            <button className={classes.addCounter}>Add counter</button>
            <Counter/>
        </div>
    );
};

export default CountersWrapper;