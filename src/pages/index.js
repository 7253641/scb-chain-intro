import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import MuiLink from "@material-ui/core/Link";
import ProTip from "../components/ProTip";
import Link from "../components/Link";
import TopAppBar from "../components/TopAppBar";
import HeroUnit from "../components/HeroUnit";
import BottomAppBar from "../components/BottomAppBar";
import SCBWord from "../components/SCBWord";
import WordCardGrid from "../components/WordCardGrid";
import "typeface-roboto";
import StartButton from "../components/StartButton";
import MadeWithLove from "../components/MadeWithLove";

export default function App() {
  return (
    <>
      <CssBaseline />
      <TopAppBar title="首页" />
      <HeroUnit />
      <Container maxWidth="lg">
        <Box my={3}>
          {/* <ProTip /> */}
          <WordCardGrid />
          {/* <Link to="/about" color="secondary">
            Go to the about page
          </Link> */}
          <Grid container spacing={2} justify="center">
            <Grid item>
              <StartButton />
            </Grid>
          </Grid>
          <MadeWithLove />
          {/* <Typography variant="h4" component="title" gutterBottom>
      Gatsby v4-beta example
    </Typography> */}
        </Box>
      </Container>
    </>
  );
}
