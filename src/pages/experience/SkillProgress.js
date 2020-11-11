import React from "react";
import { LinearProgress, Box, Typography, withStyles } from "@material-ui/core";
import { Fade } from "react-reveal";

import "./SkillProgress.css";

const LinearPro = withStyles((theme) => ({
  root: {
    height: 27,
    // borderRadius: 5,
  },
  colorPrimary: {
    // backgroundColor: theme.palette.grey[100],
  },
  bar: {
    borderRadius: 10,
    backgroundColor: "#6960D8",
  },
}))(LinearProgress);

const LinearProgressWithLabel = (props) => {
  return (
    <Box display="flex" alignItems="center" className="margin">
      <Box width="15%">
        <span className="label">{props.label}</span>
      </Box>
      <Box width="100%">
        <LinearPro
          variant="buffer"
          value={props.maxValue >= props.value ? props.value : props.maxValue}
          valueBuffer={5}
        />
      </Box>
      <Box width="8%">
        <span className="number">{`${Math.round(
          props.maxValue >= props.value ? props.value : props.maxValue
        )} %`}</span>
      </Box>
    </Box>
  );
};

const SkillProgress = () => {
  const data = [
    {
      name: "Python",
      value: 100,
    },
    {
      name: "Javascript",
      value: 100,
    },
    {
      name: "HTML",
      value: 100,
    },
    {
      name: "CSS",
      value: 95,
    },
    {
      name: "Typescript",
      value: 80,
    },
    {
      name: "React-Redux",
      value: 98,
    },
    {
      name: "Vue",
      value: 90,
    },
    {
      name: "Angular",
      value: 60,
    },
    {
      name: "Bootstrap",
      value: 89,
    },
    {
      name: "Django",
      value: 80,
    },
    {
      name: "Spring",
      value: 60,
    },
    {
      name: "Laravel",
      value: 40,
    },
    {
      name: "CodeIgniter",
      value: 53,
    },
    {
      name: "Tensorflow",
      value: 85,
    },
  ];

  const [pro, setPro] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setPro((prev) => (prev >= 100 ? 100 : prev + 3));
    }, 20);
    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className="progress">
      {data.map((item, index) => {
        return index % 2 === 0 ? (
          <Fade right duration={2000} key={index}>
            <LinearProgressWithLabel
              maxValue={item.value}
              value={pro}
              label={item.name}
            />
          </Fade>
        ) : (
          <Fade left duration={2000} key={index}>
            <LinearProgressWithLabel
              maxValue={item.value}
              value={pro}
              label={item.name}
            />
          </Fade>
        );
      })}
    </div>
  );
};

export default SkillProgress;
