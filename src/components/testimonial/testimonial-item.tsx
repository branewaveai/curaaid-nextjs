import { Testimonial } from '@/interfaces/testimonial'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { FC } from 'react'

interface Props {
  item: Testimonial
}

const TestimonialItem: FC<Props> = ({ item }) => {
  return (
    <Box
      sx={{
        px: 1,
        py: 1,
      }}
    >
      <Box
        sx={{
          p: 1,
          backgroundColor: "background.paper",
          borderRadius: 4,
          transition: (theme) => theme.transitions.create(["box-shadow"]),
          "&:hover": {
            boxShadow: 2,
          },
        }}
      >
      <div style={{ maxWidth: "100%", padding: "0" }}>
      {/* <h2>Video Testimonials</h2> */}
        <div
          style={{
            position: "relative",
            paddingTop: "56.25%",
            overflow: "hidden",
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${item.id}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: "0",
              left: "0",
            }}
          ></iframe>
        </div>
      </div>
      {/* <Image src={item.photo as string} width={570} height={427} alt={'Mentor ' + item.id} /> */}

        <Box sx={{ mb: 2 }} style={{marginTop: "5px"}}>
          <Typography component="h2" variant="h4" sx={{ fontSize: "1.20rem" }}>
            {item.title}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default TestimonialItem;