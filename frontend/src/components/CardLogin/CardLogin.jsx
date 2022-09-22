import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 340 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={props.img}
          alt="THIRD_IMAGE"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           This is the new Login !!, please subscribe immediately
          </Typography>
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField id="outlined-basic" label="Password" variant="outlined" />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Login Now!!!!
        </Button>
      </CardActions>
    </Card>
  );
}