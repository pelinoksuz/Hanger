import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard({ Event, User }) {
  return (
    <Card
      sx={{
        maxWidth: 400,
        margin: 4,
        backgroundColor: "#3c3c48",
        borderRadius: 3,
      }}
    >
      <CardMedia
        sx={{ height: 250, margin: 2, borderRadius: 2, border: 4 }}
        image={User.photoURL}
        title="green iguana"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          color="#fcd527"
          marginTop={-2}
        >
          {User.displayName} <br></br>
          {Event.name}
        </Typography>
        <Typography variant="body2" color="#fcd527">
          {Event.description}
        </Typography>
        
        <Typography variant="body2" color="#fcd527" marginTop={1}>
          <div><b>Date: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </b>{Event.date}</div>
          <div><b>Location: &nbsp; &nbsp; &nbsp; &nbsp;</b>{Event.location}</div>
          
        </Typography>
      </CardContent>
      <CardActions
        sx={{ justifyContent: "right", marginRight: 1, alignContent: "e" }}
      >
        <Button size="small" style={{ backgroundColor: "#757d7c" }}>
          Hang!
        </Button>
      </CardActions>
    </Card>
  );
}
