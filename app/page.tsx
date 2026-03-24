import {
  Box,
  Button,
  Card,
  CardContent,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import MainAppBar from "./components/MainAppBar";

export default function Home() {
  return (
    <Box className="homepage" sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <MainAppBar />
      <main
        style={{
          height: "calc(100vh - 64px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card
          sx={{
            width: "65%",
            height: "25%",
            bgcolor: "background.paper",
            borderRadius: 3,
            boxShadow: 6,
          }}
        >
          <Stack direction="column" sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h5" component="h2" align="left" color="text.primary">
                Welcome to the Job Application Tracker!
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body1" align="left" color="text.secondary">
                This application helps you efficiently track your job
                applications. You can add new applications, update their status,
                and keep all your job search information organized in one place.
              </Typography>
            </CardContent>
            <CardContent sx={{ width: "100%" }}>
              <Typography variant="h5" component="h3" align="center" color="text.primary">
                Please login
              </Typography>
            </CardContent>
            <Stack
              direction="column"
              alignItems="center"
              spacing={1}
              sx={{ width: "100%" }}
            >
              <Button variant="contained" color="primary">
                Login
              </Button>
              <Typography variant="body2" color="text.secondary">
                Don&apos;t have an account?{" "}
                <Link href="#" color="primary.light">
                  Sign up
                </Link>
              </Typography>
            </Stack>
          </Stack>
        </Card>
      </main>
    </Box>
  );
}
