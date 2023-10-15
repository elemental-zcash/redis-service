#!/usr/bin/env node

const fs = require('fs');
const crypto = require('crypto');



function generateToken(length) {
  const byteLength = Math.ceil((3/4) * length);
  const buffer = crypto.randomBytes(byteLength);
  return buffer.toString('base64').slice(0, length);
}


const main = async () => {
  let envOutput = `REDIS_PSWD=${generateToken(96)}
`;

  fs.writeFileSync('../../.env', envOutput);
};

main();
