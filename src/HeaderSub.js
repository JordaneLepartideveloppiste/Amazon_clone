import React from 'react';
import './styles/HeaderSub.css';
import MenuIcon from "@material-ui/icons/Menu";
import DetailsIcon from "@material-ui/icons/Details";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import './PopoverHeaderSub';
import PopoverHeaderSub from './PopoverHeaderSub';
import Popover from "@material-ui/core/Popover";
import { makeStyles } from "@material-ui/core/styles";

function HeaderSub() {
    const scrollTo = () => {
      window.scrollTop(0);
    };

    const useStyles = makeStyles((theme) => ({
      popover: {
        pointerEvents: "none",
      },
      paper: {
        padding: theme.spacing(1),
      },
    }));

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    return (
      <div className="header_sub">
        <div className="header_sub_comp burger">
          <MenuIcon />
          <p>Toutes</p>
        </div>
        <div className="header_sub_comp">
          <p>Meilleures Ventes</p>
        </div>
        <div className="header_sub_comp">
          <p>Amazon Basics</p>
        </div>
        <div className="header_sub_comp">
          <p>Dernières Nouveautés</p>
        </div>
        <div
          className="header_sub_comp select"
          aria-owns={open ? "mouse-over-popover" : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
          <p>Prime</p>
          <DetailsIcon style={{ fontSize: 12, position: "relative", top: 2 }} />
        </div>
        <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <PopoverHeaderSub />
      </Popover>
        <div className="blank_space"></div>
        <div className="header_sub_comp last_comp">
          <PlayCircleFilledIcon style={{ color: "#2CA9DF", fontSize: 36 }} />
          <p className="prime">Prime Video </p>
          <p className="test"> | Essai gratuit de 30 jours</p>
        </div>
      </div>
    );
}

export default HeaderSub;
