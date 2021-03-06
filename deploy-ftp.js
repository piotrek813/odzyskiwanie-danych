const ftp = require('basic-ftp');
require('dotenv').config();

async function example() {
  const client = new ftp.Client(600600);
  client.ftp.verbose = true;
  try {
    await client.access({
      host: process.env.FTP_HOST,
      user: process.env.FTP_USER,
      password: process.env.FTP_PASSWD,
      secure: true,
      secureOptions: { rejectUnauthorized: false },
    });
    await client.ensureDir(
      '/domains/odzyskiwaniedanych.warszawa.pl/public_html'
    );
    await client.clearWorkingDir();
    await client.uploadFromDir(`${__dirname}/public`);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
  client.close();
}

example();
