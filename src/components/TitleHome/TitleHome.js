import { Box, Grid, styled, Typography } from "@mui/material";

const DividerTitle = styled(Typography)(() => ({
  display: "block",
  width: "100%",
  borderTop: " 2px solid #F7BE68",
  height: "48px",
  background:
    "linear-gradient(180deg, rgba(255,248,236,1) 0%, rgba(255,255,255,1) 37%)",
}));

const TitleHome = ({ title }) => {
  return (
    <Box sx={{ flexGrow: 1, mt: "26px" }}>
      <Grid container spacing={3}>
        <Grid item xs={5}>
          <DividerTitle />
        </Grid>
        <Grid item xs={2}>
          <Typography
            component="h3"
            p={0}
            m={0}
            textAlign="center"
            sx={{
              transform: "translate(0, -10px)",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            {title}
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <DividerTitle />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TitleHome;
