import { FooterSectionTitle } from '@/components/footer'
import type { Navigation } from '@/interfaces/navigation'
import Grid from '@mui/material/Grid'
import MuiLink from '@mui/material/Link'
import Link from 'next/link'
import { FC } from 'react'

const courseMenu: Array<Navigation> = [
  {
    label: 'UI/UX Design',
    path: '#',
  },
  {
    label: 'Mobile Development',
    path: '#',
  },
  {
    label: 'Machine Learning',
    path: '#',
  },
  {
    label: 'Web Development',
    path: '#',
  },
]

const pageMenu : Array<Navigation> = [
  {
    label: 'Home',
    path: '#',
  },
  {
    label: 'Treatments',
    path: '/#popular-treatments',
  },
  {
    label: 'Hospitals',
    path: '/#hospitals',
  },
  {
    label: 'Doctors',
    path: '/#expert-doctors',
  },
]

const companyMenu: Array<Navigation> = [
  { label: 'Contact Us', path: '#contact-us-page' },
  { label: 'Privacy & Policy', path: '#' },
  { label: 'Term & Condition', path: '#' },
  { label: 'FAQ', path: '#' },
]

const treatmentsMenu: Array<Navigation> = [
  { label: 'Cardiac', path: '/cardiac' },
  { label: 'Neurology / Spine', path: '/neurology' },
  { label: 'Opthalmology', path: '/opthalmology' },
  { label: 'Orthopedic', path: '/orthopedic' },
  { label: 'Oncology', path: '/oncology' },
]

interface NavigationItemProps {
  label: string
  path: string
}

const NavigationItem: FC<NavigationItemProps> = ({ label, path }) => {
  return (
    <Link href={path} passHref>
      <MuiLink
        underline="hover"
        sx={{
          display: 'block',
          mb: 1,
          color: 'primary.contrastText',
        }}
      >
        {label}
      </MuiLink>
    </Link>
  )
}

const FooterNavigation: FC = () => {
  return (
    <Grid container spacing={8}>
      <Grid item xs={6} md={4}>
        <FooterSectionTitle title="Top Treatments" />
        {treatmentsMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid>
      <Grid item xs={6} md={4}>
        <FooterSectionTitle title="About" />
        {companyMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid>
      <Grid item xs={4} md={4}>
        <FooterSectionTitle title="Menu" />
        {pageMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid>
      
    </Grid>
  )
}

export default FooterNavigation
