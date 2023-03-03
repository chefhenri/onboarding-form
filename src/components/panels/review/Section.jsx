import _ from 'lodash'
import { useContext, useState } from 'react'
import { ListItem, Stack } from "@mui/material"

import { SectionCtx, ReviewCtx } from '../../../contexts'
import ReviewHeading from './Heading'
import ReviewItem from './Item'

const ReviewSection = ({ id, heading, subsections }) => {
    const setSection = useContext(SectionCtx)
    const setInReview = useContext(ReviewCtx)
    const [showEdit, setShowEdit] = useState(false)

    const toggleShowEdit = () => {
        setShowEdit(!showEdit)
    }

    const handleEditBtn = () => {
        setSection({ type: 'set_section', payload: { index: id } })
        setInReview(false)
    }

    return (
        <ListItem onMouseEnter={toggleShowEdit} onMouseLeave={toggleShowEdit}>
            <Stack direction="column" width="100%" spacing={1}>
                <ReviewHeading {...{ heading, show: showEdit, handler: handleEditBtn }} />
                {subsections.map(({ fields }) => {
                    return fields.map((field) => <ReviewItem key={_.kebabCase([field.id, 'record'])} {...field} />)
                })}
            </Stack>
        </ListItem>
    )
}

export default ReviewSection
