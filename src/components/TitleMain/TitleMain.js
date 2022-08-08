import { Box, Typography } from "@mui/material";

const TitleMain = ({ image, title, subTitle }) => {
  return (
    <Box textAlign={"center"}>
      <Typography variant="h5" fontWeight={700}>
        {title}
      </Typography>
      {subTitle && <Typography variant="subtitle1">{subTitle}</Typography>}
      <img style={{ marginTop: "36px" }} src={image} alt={image} />
    </Box>
  );
};

export default TitleMain;
