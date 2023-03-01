import _ from 'lodash'
import { Box, List } from "@mui/material"

import ReviewItem from './Item'

const ReviewList = ({ sections }) => {
    return (
        <Box sx={{ marginY: '2rem', width: '100%', overflowY: 'scroll' }}>
            <List>
                {sections.map(({ id, heading, subsections }) => (
                    <ReviewItem key={_.kebabCase([id, 'record'])} {...{ heading, subsections }} />
                ))}
            </List>
        </Box>
    )
}

export default ReviewList
