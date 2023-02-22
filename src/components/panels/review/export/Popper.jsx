import { ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper } from "@mui/material"

const ExportOptsPopper = ({ options, open, anchor, selectedIdx, handleClose, handleClick }) => {
    return (
        <Popper
            {...{ open }}
            sx={{
                zIndex: 1,
                width: anchor.current ?
                    anchor.current.clientWidth : 'auto'
            }}
            anchorEl={anchor.current}
            transition
            disablePortal >
            {({ TransitionProps, placement }) => (
                <Grow
                    {...TransitionProps}
                    style={{
                        transformOrigin: placement === 'bottom' ?
                            'center top' : 'center bottom'
                    }}>
                    <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                            <MenuList autoFocusItem>
                                {options.map((opt, idx) => {
                                    let selected = idx === selectedIdx

                                    return (
                                        <MenuItem
                                            key={`exportOpt${idx}`}
                                            {...{ selected }}
                                            onClick={event => handleClick(event, idx)}>
                                            {opt}
                                        </MenuItem>
                                    )
                                })}
                            </MenuList>
                        </ClickAwayListener>
                    </Paper>
                </Grow>
            )}
        </Popper>
    )
}

export default ExportOptsPopper
