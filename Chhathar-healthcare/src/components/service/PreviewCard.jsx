import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const PreviewCard = ({
  image,
  name,
  speciality,
  degree,
  experience,
  schedule,
  description,
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 180 }} image={image} />
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="subtitle2" fontWeight="bold">
          {speciality}
        </Typography>
        <Typography variant="subtitle2" fontWeight="bold">
          {degree}
        </Typography>
        <Typography variant="subtitle2" fontWeight="bold">
          {experience}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {schedule}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PreviewCard;
