export default {
  port: 3000,
  fetch(request) {
    return new Response('<!DOCTYPE html><html><head><title>Dwarven Rogue Stronghold</title><body><script src="./dist/drs-client.js"></script></body></html>');
  },
};
