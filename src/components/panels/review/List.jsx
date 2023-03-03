import _ from 'lodash'
import { Box, List } from "@mui/material"

import ReviewSection from './Section'

const ReviewList = ({ sections }) => {
    return (
        <Box sx={{ marginY: '2rem', width: '100%', height: '100%', overflowY: 'scroll' }}>
            <List>
                {sections.map(({ id, heading, subsections }, idx) => (
                    <ReviewSection key={_.kebabCase([id, 'record'])} {...{ id: idx, heading, subsections }} />
                ))}
            </List>
        </Box>
    )
}

export default ReviewList
