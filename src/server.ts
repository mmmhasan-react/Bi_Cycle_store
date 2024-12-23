// server configuration

import app from './app';
import config from './app/config';

// getting-started.js
import mongoose from 'mongoose';

async function main() {
  try {
    await mongoose.connect(config.dl_url as string);

    app.listen(config.port, () => {
      console.log(`Exam ple app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}
main();
