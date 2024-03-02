import { Box, Typography } from '@mui/material'
import { FC } from 'react'

interface Props {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const Logo: FC<Props> = ({ onClick, variant }) => {
  return (
    <Box onClick={onClick}>
      <Typography
        variant="h4"
        component="h1"
        sx={{ fontWeight: 700, '& span': { color: variant === 'primary' ? 'primary.main' : 'unset' } }}
      >
        Cura<span>Aid</span>
      </Typography>
    </Box>
  )
}

Logo.defaultProps = {
  variant: 'primary',
}

export default Logo
