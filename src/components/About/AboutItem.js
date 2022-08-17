import { Card, CardContent, CardHeader, Typography } from '@mui/material';

const AboutItem = ({ title, content }) => {
  return (
    <Card sx={{ backgroundColor: '#FFF2DB', height: 200 }}>
      <CardHeader
        title={
          <Typography variant="subtitle1" fontWeight={600} align="center">
            {title}
          </Typography>
        }
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary" align="center">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AboutItem;
