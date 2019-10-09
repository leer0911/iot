import React from 'react';
import { useClasses } from '../../../styles';
import {
  Box,
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  CardContent,
  CardActionArea,
  Button,
  Typography,
  Avatar,
  IconButton,
} from '../../../';
import MoreIcon from '../../../icon/MoreVert';
import FavoriteIcon from '../../../icon/Favorite';
import SearchIcon from '../../../icon/Search';

const styles = theme => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});

const Demo = () => {
  const classes = useClasses(styles);

  return (
    <Box p={2}>
      <h3>基础卡片</h3>
      <Box bgcolor="#f5f5f5" p={2}>
        <Card>
          <CardHeader
            title="title"
            subheader="subheader"
            avatar={<Avatar>R</Avatar>}
            action={
              <IconButton>
                <MoreIcon />
              </IconButton>
            }
          />
          <CardMedia
            className={classes.media}
            image="https://material-ui.com/static/images/cards/paella.jpg"
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton>
              <FavoriteIcon />
            </IconButton>
            <IconButton>
              <SearchIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Box>

      <h3>多媒体内容</h3>
      <Box bgcolor="#f5f5f5" p={2}>
        <Card>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
};

export default Demo;
