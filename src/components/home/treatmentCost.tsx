import { TreatmentCost } from "@/interfaces/treatmentCost";
import { Box, Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { FC } from "react";

interface Props {
  item: TreatmentCost;
}

const dummyTreatmentCosts: TreatmentCost[] = [
  {
    id: 1,
    photo: "",
    treatment: "Prostate Cancer Surgery",
    description: "Starting at",
    cost: "4,000",
    Currency: "USD",
  },
  {
    id: 2,
    photo: "",
    treatment: "Breast Cancer Surgery",
    description: "Starting at",
    cost: "3,000",
    Currency: "USD",
  },
  {
    id: 3,
    photo: "",
    treatment: "Chemotherapy",
    description: "Starting at",
    cost: "900",
    Currency: "USD",
  },
  {
    id: 4,
    photo: "",
    treatment: "Bone Marrow Transplant",
    description: "Starting at",
    cost: "15,000",
    Currency: "USD",
  },
];

const CostCard: FC<Props> = ({ item }) => {
  return (
    <Box
      sx={{
        px: 1.5,
        py: 2,
        height: "100%",
      }}
    >
      <Box
        sx={{
          p: 2,
          backgroundColor: "background.paper",
          borderRadius: 4,
          transition: (theme) => theme.transitions.create(["box-shadow"]),
          "&:hover": {
            boxShadow: 2,
          },
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ height: 90, overflow: "hidden" }}>
          <Typography
            variant="h6"
            sx={{
              color: "primary.main",
              mb: 1,
              fontSize: 22,
              lineHeight: "1.2em",
            }}
          >
            {item.treatment}
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ color: "text.secondary", mb: 1 }}>
            {item.description}
          </Typography>
        </Box>
        <Box >
          <Typography sx={{ color: "black", fontSize: 20 }}>
            {item.Currency} {item.cost}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const costOncology: FC = () => {
  return (
    <Box
      id="hospitals"
      sx={{
        pt: {
          xs: 6,
          md: 8,
        },
        pb: {
          xs: 8,
          md: 12,
        },
        backgroundColor: "#ecf3f3",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h1" sx={{ fontSize: 40 }}>
          Treatment cost for Oncology
        </Typography>
        {/* <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card> */}
        <Grid container spacing={0}>
          {dummyTreatmentCosts.map((item, index) => (
            <Grid item xs={6} sm={3} md={3} key={index}>
              <CostCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default costOncology;
