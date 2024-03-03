import { Treatment } from '@/interfaces/treatment'
import Box from '@mui/material/Box'
import { iconButtonClasses } from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import { FC } from 'react'

interface Props {
  item: Treatment
}

const TreatmentCardItem: FC<Props> = ({ item }) => {
  return (
    <Box
      sx={{
        px: 1,
        py: 4,
      }}
    >
      <Box
        sx={{
          p: 2,
          backgroundColor: 'background.paper',
          borderRadius: 4,
          transition: (theme) => theme.transitions.create(['box-shadow']),
          '&:hover': {
            boxShadow: 2,
            [`& .${iconButtonClasses.root}`]: {
              backgroundColor: 'primary.main',
              color: 'primary.contrastText',
              boxShadow: 2,
            },
          },
        }}
      >
        <Box
          sx={{
            lineHeight: 0,
            overflow: 'hidden',
            borderRadius: 3,
            mb: 2,
          }}
        >
          <Image src={item.photo as string} width={760} height={760} alt={'Treatment ' + item.id} />
        </Box>
        <Box sx={{ mb: 1 }}>
          <Typography component="h2" variant="h5" sx={{ height: 26, overflow: 'hidden', fontSize: '1.2rem' }}>
            {item.title}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>{item.description}</Typography>
        </Box>
        {/* <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <PlaceIcon sx={{ fontSize: 20, color: 'primary.main', marginRight: 0.4 }} />
          {/* <Typography variant="h5" color="primary.main">
              Experience:
            </Typography> */}
        {/* <Typography sx={{ color: 'text.secondary' }}>Banglore, India</Typography> */}
        {/* </Box>  */}

        {/* <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Rating name="rating-Treatment" value={item.rating} max={5} sx={{ color: '#ffce31', mr: 1 }} readOnly />
            <Typography component="span" variant="h5">
              ({item.ratingCount})
            </Typography>
          </Box> */}

        {/* <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h5" color="primary.main" mr={0.6}>
              {'$' + item.price}
            </Typography>
            <Typography variant="h6">{' for Video Consultation'}</Typography>
          </Box>
          <IconButton
            color="primary"
            sx={{ '&:hover': { backgroundColor: 'primary.main', color: 'primary.contrastText' } }}
          >
            <ArrowForward />
          </IconButton>
        </Box> */}
      </Box>
    </Box>
  )
}

export default TreatmentCardItem
