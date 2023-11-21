import app from './routes/index';

const HOSTNAME = '127.0.0.1';
const PORT = 1245;

app.listen(HOSTNAME, PORT, () => {
  console.log(`app running at http://${HOSTNAME}:${PORT}/`);
});

export default app;
