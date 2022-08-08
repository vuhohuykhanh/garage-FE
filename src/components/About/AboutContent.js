import { Box, Grid } from "@mui/material";
import AboutItem from "./AboutItem";
import { ExampleAbouts } from "./utils";

const AboutContent = () => {
  const abouts = ExampleAbouts();

  return (
    <Box sx={{ flexGrow: 1, mb: 12, mt: 10 }}>
      <Grid container spacing={2}>
        {abouts.map((about) => (
          <Grid item xs={6} md={3}>
            <AboutItem title={about.title} content={about.content} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default AboutContent;
