import { Button, Stack } from "@mui/material"
import ExportBtnGroup from "./export/BtnGroup"

const ReviewNav = ({ handleBack }) => {
    return (
        <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
            <Button variant="outlined" onClick={handleBack}>
                Back
            </Button>
            <ExportBtnGroup />
        </Stack>
    )
}

export default ReviewNav
