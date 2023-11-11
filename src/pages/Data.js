import React, { useContext } from "react";
import "./data.css";
import { Kontext } from "./Context";
import { useParams } from "react-router-dom";
import { render } from "react-dom";
import ReactStars from "react-stars";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Data() {
  const { data } = useContext(Kontext);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const cardBackgroundStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w342${data.backdrop_path})`,
    backgroundRepeat: "no-repeat",
  };
  const img = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w342${data.backdrop_path})`,
  };

  const cardStyle = {
    maxWidth: 750,
    maxHeight: "auto",
    zIndex: 10,
    backgroundColor: "white",
  };
  console.log(data);
  return (
    <div style={cardBackgroundStyle} className="data">
      <Card sx={cardStyle}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={data.title}
          subheader={data.release_date}
        />
        <CardMedia
          component="img"
          height="auto"
          sx={{ borderRadius: 0 }}
          image={`https://image.tmdb.org/t/p/w342${data.backdrop_path}`}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {data.overview}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography color="text.secondary" paragraph>
              <div className="stars">
                <ReactStars count={10} size={30} value={data.vote_average} />
                Votes:{data.vote_count}
              </div>
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
