import { Box, Button, ButtonGroup } from "@mui/material"
import { ChevronDown } from "feather-icons-react/build/IconComponents"
import { useRef, useState } from "react"
import ExportOptsPopper from "./Popper"

const exportOptions = ['Email', 'Excel', 'PDF', 'CSV']

const ExportBtnGroup = () => {
    const [exportOpt, setExportOpt] = useState(0)
    const [open, setOpen] = useState(false)
    const anchor = useRef()

    const handleClick = () => {
        // TODO: Implement export action
    }

    const handleOptClick = (event, idx) => {
        // TODO: Implement option click action
    }

    const handleToggle = () => {
        console.log(anchor.current.clientWidth);
        setOpen(!open)
    }

    const handleClose = () => {
        // TODO: Implement close action
    }

    return (
        <>
            <ButtonGroup variant="contained" ref={anchor}>
                <Button onClick={handleClick}>{exportOptions[exportOpt]}</Button>
                <Button size="small" onClick={handleToggle}>
                    <ChevronDown />
                </Button>
            </ButtonGroup>
            <ExportOptsPopper {...{
                options: exportOptions,
                open,
                anchor,
                handleClose,
                handleClick: handleOptClick
            }} />
        </>
    )
}

export default ExportBtnGroup
