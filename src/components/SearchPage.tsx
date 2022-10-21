// create search page component

import { makeStyles, Typography } from '@material-ui/core';

export const SearchPage = () => {
    const classes = useStyle();

    return (
        <>
            <div className={ classes.root}>
                <Typography variant='h5' color='textPrimary'>
                    Available rooms
                </Typography>
            </div>
        </>
    );
}

const useStyle = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        margin: theme.spacing(2),
    },
}));