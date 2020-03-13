import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./UserForm.css";
import Continent from "./Continent";
import Countries from "./Countries";
import NAmericaCount from "./NAmericaCount";
import Hotels from "./Hotels";
import SAmericaCount from "./SAmericaCount";
import SouthAsia from "./SAsianCount";
import Cities from "./Cities";
import Details from "./Details";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  backButton: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

function getSteps() {
  return [
    "Choose Continent",
    "Choose Countries",
    "Choose Cities",
    "Enter Your Details",
    "Confirmation"
  ];
}

function getStepContent(stepIndex) {
  const userValue = sessionStorage.getItem("userItem");

  switch (stepIndex) {
    case 0:
      return (
        <div>
          <form id="msform">
            {/* fieldsets */}
            <Continent></Continent>
          </form>
        </div>
      );
    case 1:
      switch (userValue) {
        case "europe":
          return (
            <div>
              <form id="msform">
                <Countries></Countries>
              </form>
            </div>
          );
          break;
        case "northamerica":
          return (
            <div>
              <form id="msform">
                <NAmericaCount />
              </form>
            </div>
          );
          break;
        case "southamerica":
          return (
            <div>
              <form id="msform">
                <SAmericaCount></SAmericaCount>
              </form>
            </div>
          );
          break;
        case "southeastasia":
          return (
            <div>
              <form id="msform">
                <SouthAsia></SouthAsia>
              </form>
            </div>
          );
          break;
        default:
          break;
      }

    case 2:
      return (
        <form id="msform">
          <Cities></Cities>
        </form>
      );
    case 3:
      return (
        <form id="msform">
        <Details></Details>
        </form>
      );

    default:
      return (
        <form id="msform">
          <fieldset>
            <div className="conformation">
            <h1>Your Details are Submitted</h1>
            <h3>PLease Give us 2 days to plan your complete trip along </h3>
            </div>
          </fieldset>
        </form>
      );
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>

      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
            <div className="mb-5">
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
              <div className="mx-auto">
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.backButton}>
                  Back
              </Button>
                <Button variant="contained" color="primary" onClick={handleNext}>
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}
