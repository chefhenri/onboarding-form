import _ from 'lodash'
import { Box, Grid } from "@mui/material"

import ReviewHeading from './Heading'

// TODO: Render subsection field data, get data from redux store
const ReviewContainer = ({ sections }) => {
    return (
        <Box>
            <Grid container rowSpacing={3} columnSpacing={2}>
                {sections.map(({ heading, subsections }) => (
                    <>
                        <ReviewHeading {...{ heading }} key={_.kebabCase([heading, 'review', 'heading'])} />
                        {subsections.map(({ heading, fields }) => (
                            <Grid item xs={6}>

                            </Grid>
                        ))}
                    </>
                ))}
            </Grid>
        </Box>
    )
}

export default ReviewContainer
