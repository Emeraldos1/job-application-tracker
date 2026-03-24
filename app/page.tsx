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
          minHeight: "calc(100dvh - 64px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
        }}
      >
        <Card
          sx={{
            width: { xs: "95%", sm: "75%", md: "65%" },
            bgcolor: "background.paper",
            borderRadius: 3,
            boxShadow: 6,
          }}
        >
          <CardContent>
            <Stack direction="column" spacing={2}>
              <Typography variant="h5" component="h2" color="text.primary">
                Welcome to the Job Application Tracker!
              </Typography>
              <Typography variant="body1" color="text.secondary">
                This application helps you efficiently track your job
                applications. You can add new applications, update their status,
                and keep all your job search information organized in one place.
              </Typography>
              <Stack direction="column" alignItems="center" spacing={1} sx={{ pt: 1 }}>
                <Typography variant="h5" component="h3" color="text.primary">
                  Please login
                </Typography>
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
          </CardContent>
        </Card>
      </main>
    </Box>
  );
}
