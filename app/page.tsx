import { Box, Button, Card, CardContent, Grid, Link, Stack, Typography } from "@mui/material";

import MainAppBar from "./components/MainAppBar";

export default function Home() {
  return (
    <Box className="homepage" sx={{ minHeight: "100vh" }}>
      <MainAppBar />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "calc(100dvh - 64px)", px: 2 }}
      >
        <Grid size={{ xs: 12, sm: 8, md: 6 }}>
          <Card
            sx={{
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
        </Grid>
      </Grid>
    </Box>
  );
}
