import { Doctor } from '@/interfaces/doctor'
import ArrowForward from '@mui/icons-material/ArrowForward'
import Box from '@mui/material/Box'
import IconButton, { iconButtonClasses } from '@mui/material/IconButton'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import { FC } from 'react'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import PlaceIcon from '@mui/icons-material/Place'
import Link from 'next/link'

interface Props {
  item: Doctor
}

const DoctorCardItem: FC<Props> = ({ item }) => {
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
          <Image src={item.cover} width={760} height={760} alt={'Doctor ' + item.id} />
        </Box>
        <Box sx={{ mb: 1 }}>
          <Typography component="h2" variant="h5" sx={{ height: 26, overflow: 'hidden', fontSize: '1.2rem' }}>
            {item.title}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>{item.speciality}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <PlaceIcon sx={{ fontSize: 20, color: 'primary.main', marginRight: 0.4 }} />
          {/* <Typography variant="h5" color="primary.main">
              Experience:
            </Typography> */}
          <Typography sx={{ color: 'text.secondary' }}>{item.location}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <LocalHospitalIcon sx={{ fontSize: 20, color: 'primary.main', marginRight: 0.4 }} />
          {/* <Typography variant="h5" color="primary.main">
              Experience:
            </Typography> */}
          <Typography sx={{ color: 'text.secondary' }}>{item.hospital}</Typography>
        </Box>

        {/* <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Rating name="rating-doctor" value={item.rating} max={5} sx={{ color: '#ffce31', mr: 1 }} readOnly />
            <Typography component="span" variant="h5">
              ({item.ratingCount})
            </Typography>
          </Box> */}

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
            <Link href={"/doctors/dr-" + `${item?.pathName}`}>
              <ArrowForward />
            </Link>
          </IconButton>
        </Box>
      </Box>
    </Box>
  )
}

export default DoctorCardItem
