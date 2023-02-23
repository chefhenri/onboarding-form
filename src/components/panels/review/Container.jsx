import _ from 'lodash'
import { Box, Divider, Grid, Typography } from "@mui/material"
import { useSelector } from 'react-redux'
import { Fragment } from 'react'
import ReviewRecord from './Record'

const ReviewContainer = ({ sections }) => {
    const formData = useSelector((state) => state.form)

    return (
        <Box sx={{ marginBottom: '2rem', overflowY: 'scroll' }}>
            <Grid container rowSpacing={6} columnSpacing={2}>
                {sections.map(({ id, subsections }) => (
                    <Fragment key={_.kebabCase([id, 'review'])}>
                        {subsections.map(({ id, heading, fields }) => (
                            <Grid key={_.kebabCase([id, 'review'])} item xs={12}>
                                <Typography component="h4" variant="h6">{heading}</Typography>
                                <Divider sx={{ marginY: '1rem' }} />
                                <Grid container rowSpacing={2}>
                                    {fields.map(({ id, name, type, label, options }) => (
                                        <ReviewRecord key={_.kebabCase([id, 'review'])} {...{ id, type, label, value: formData[name], options }} />
                                    ))}
                                </Grid>
                            </Grid>
                        ))}
                    </Fragment>
                ))}
            </Grid>
        </Box>
    )
}

export default ReviewContainer
