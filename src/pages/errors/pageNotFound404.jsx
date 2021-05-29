import { Divider, Typography } from '@material-ui/core';
import React from 'react';

export default class PageNotFound404 extends React.Component {
    render() {
        return (
            <div>
                <Typography align={"center"} variant={"h4"} >404 - page not found</Typography>
                <Divider variant={"middle"}/>
                <Typography className={"mt30"}>Página "{this.props.environment.currentPage}" não encontrada.</Typography>
            </div>
        );
    }
}