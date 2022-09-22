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
          height="140"
          image={props.img}
          alt="login_image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           This is the new Login !!, please subscribe
          </Typography>
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField id="outlined-basic" label="Password" variant="outlined" />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Login
        </Button>
      </CardActions>
    </Card>
  );
}