import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";

function InfoBox({
  title,
  cases,
  active1,
  active2,
  active3,
  isBlue,
  isGreen,
  isRed,
  total,
  ...props
}) {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active1 && "infoBox--infected"} ${
        active2 && "infoBox-recoverd"
      } ${active3 && "infoBox-deaths"}`}
    >
      <CardContent>
        <Typography className="infoBox_title" color="textSecondary">
          {title}
        </Typography>

        <Typography
          className={`infoBox_cases ${isBlue && "infoBox_infected"} ${
            isGreen && "infoBox_recovered"
          } ${isRed && "infoBox_deaths"}`}
          variant="h4"
        >
          {cases}
        </Typography>

        <Typography className="infoBox_total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
