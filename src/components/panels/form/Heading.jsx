import { Box, Typography } from '@mui/material'

const FormHeading = ({heading}) => {
    return (
        <>
            <Box
                component="div"
                sx={{
                    width: '80px',
                    height: '5px',
                    bgcolor: '#0066FF',
                    borderTopLeftRadius: '50px',
                    borderTopRightRadius: '50px'
                }} />
            <Typography
                component="div"
                variant="h6"
                sx={{
                    fontWeight: 700,
                    marginBottom: '1rem'
                }}>
                {heading}
            </Typography>
        </>
    )
}

export default FormHeading
