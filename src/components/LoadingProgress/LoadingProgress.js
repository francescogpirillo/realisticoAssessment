import React from 'react';
import { CircularProgress } from '@material-ui/core';
import css from './LoadingProgress.module.css';

const LoadingProgress = () => {
    return (
        <CircularProgress className={css.circularProgress} />
    )
}

export default LoadingProgress;