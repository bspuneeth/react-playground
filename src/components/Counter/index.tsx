import { Button, Grid, IconButton, Paper, Tooltip, Zoom } from "@mui/material";
import "./index.css";
import React, { useState } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { RestartAlt, ThumbDown } from "@mui/icons-material";

function Counter(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);

  const handleCounterUp = () => {
    setCounter(counter + 1);
  };

  const handleCounterDown = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(0);
  };

  return (
    <div>
      <Paper elevation={3} className="Counter-Paper">
        <Grid container spacing={2} className="Counter-Container">
          <Grid item xs={12} className="Counter-Item">
            {counter}
          </Grid>
        </Grid>
        <hr />
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Tooltip TransitionComponent={Zoom} title="Thumbs Up">
              <Button onClick={handleCounterUp}>
                <ThumbUpIcon />
              </Button>
            </Tooltip>
          </Grid>
          <Grid item xs={4}>
            <Tooltip TransitionComponent={Zoom} title="Thumbs Down">
              <Button onClick={handleCounterDown}>
                <ThumbDown />
              </Button>
            </Tooltip>
          </Grid>
          <Grid item xs={4}>
            <Tooltip TransitionComponent={Zoom} title="Reset">
              <Button onClick={handleReset}>
                <RestartAlt />
              </Button>
            </Tooltip>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Counter;
