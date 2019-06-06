import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import MuiLink from "@material-ui/core/Link";
import ProTip from "../components/ProTip";
import Link from "../components/Link";
import TopAppBar from "../components/TopAppBar";
import MadeWithLove from "../components/MadeWithLove";

export default function App() {
  return (
    <>
      <CssBaseline />
      <TopAppBar title="学分银行" />
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            学分银行
          </Typography>
          <Typography variant="h6" component="h1" gutterBottom align="center">
            学分银行
          </Typography>
          <Link to="/">Go to the main page</Link>
          <ProTip />
          <MadeWithLove />
        </Box>
      </Container>
    </>
  );
}
