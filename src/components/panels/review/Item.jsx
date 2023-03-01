import _ from 'lodash'
import moment from 'moment'
import { useSelector } from "react-redux"
import { Fragment, useState } from 'react'
import { Divider, ListItem, Stack, Typography } from "@mui/material"
import ReviewHeading from './Heading'

const DATE_FMT = 'MM/DD/YYYY'

// TODO: Add handle for review heading 'edit' button
const ReviewItem = ({ heading, subsections }) => {
    const formData = useSelector((state) => state.form)

    const [showEdit, setShowEdit] = useState(false)

    const toggleShowEdit = () => {
        setShowEdit(!showEdit)
    }

    const formatValue = (name, type, options) => {
        let value = formData[name]

        if (value === undefined) return

        switch (type) {
            case 'checkbox':
                return value ? 'Yes' : 'No'
            case 'date':
                return moment(value).format(DATE_FMT)
            case 'select':
                return options.filter(option => option.value === value)[0].label
            case 'slider':
                return typeof value === 'boolean' ? 'Unlimited' : value
            case 'switch':
                return value ? 'Yes' : 'No'
            default:
                return value
        }
    }

    return (
        <ListItem onMouseEnter={toggleShowEdit} onMouseLeave={toggleShowEdit}>
            <Stack direction="column" width="100%" spacing={1}>
                <ReviewHeading {...{ heading, show: showEdit }} />
                {subsections.map(({ fields }) => {
                    return fields.map(({ id, name, type, label, options }) => {
                        let fmtGroup = type === 'checkbox'

                        return (
                            fmtGroup ? (
                                <Fragment key={_.kebabCase([id, 'record'])}>
                                    <Typography>{label}</Typography>
                                    {options.map((opt, idx) => {
                                        let nom = _.kebabCase([name, opt, idx])

                                        return (
                                            <Stack key={_.kebabCase([nom, 'record'])} direction="row-reverse" width="100%" sx={{ justifyContent: 'space-between', paddingLeft: '1rem' }}>
                                                <Typography>{formatValue(nom, type)}</Typography>
                                                <Typography>{opt}</Typography>
                                            </Stack>
                                        )
                                    })}
                                    <Divider />
                                </Fragment>
                            ) : (
                                <Fragment key={_.kebabCase([id, 'record'])}>
                                    <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
                                        <Typography>{label}</Typography>
                                        <Typography>{formatValue(name, type, options)}</Typography>
                                    </Stack>
                                    <Divider />
                                </Fragment>
                            )
                        )
                    })
                })}
            </Stack>
        </ListItem>
    )
}

export default ReviewItem
