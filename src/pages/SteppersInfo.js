import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Link } from "gatsby";

const CreditLink = props => <Link to="/Credit" {...props} />;
const useStyles = makeStyles(theme => ({
  root: {
    width: "90%"
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  actionsContainer: {
    marginBottom: theme.spacing(2)
  },
  resetContainer: {
    padding: theme.spacing(3)
  }
}));

function getSteps() {
  return ["学习成果认证", "学习成果积累", "学习成果转换"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `学习成果认证是在学习成果框架中为各类学习成果找到合适位置的过程。也就是依据学习成果框架标准和规范，确定学习成果所属的领域、类型及其所处的等级。为便于学习成果的认证、积累与转换，根据我国继续教育领域学习成果不同呈现形式，将学习成果分为三种类型，即学历教育学习成果、非学历教育学习成果和无一定形式学习成果。`;
    case 1:
      return "学习成果积累是指学分银行对学习者在不同时期、不同地点取得的各类学习成果进行认证并存储的过程。学分银行将会对学习者存储的学习成果进行认证，并按照学时、学分进行积累。学分银行可以根据学习者需求开具继续教育学时证明，以满足企事业单位对员工继续教育的要求。学习者存储在学分银行的学习成果满足一定条件时也可以转入学历教育机构，替换学历教育部分课程学分，或转入职业类证书颁发机构，作为申请证书的部分或全部条件。";
    case 2:
      return `学习成果转换是指拥有学习成果的各级各类颁证机构可以参照学分银行提供的学习成果框架及相应认证标准的技术路径，在学习成果互认联盟的运行机制下自愿达成转换规则，从而实现不同类型或相同类型学习成果之间的转换和互认。学习成果携带者可通过查询学分银行发布的转换规则，到当地学习成果认证分中心（认证点）办理相关转换申请业务，凭学分银行开具的学习成果认证证明到颁证机构实现学习成果的最终转换。`;
    // default:
    //   return "Unknown step";
  }
}

function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    上一步
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "完成" : "下一步"}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>恭喜你已获得该门课程证书!</Typography>
          {/* <Button
            onClick={handleReset}
            className={classes.button}
            href="/Credit"
          >
            查看
          </Button> */}
          <Button
            color="primary"
            component={CreditLink}
            className={classes.button}
          >
            查看
          </Button>
        </Paper>
      )}
    </div>
  );
}

export default VerticalLinearStepper;
