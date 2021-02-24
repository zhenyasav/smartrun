var fs = require('fs');
var path = require('path');
var child = require('child_process');
var arg = process.argv.slice(2);
if (!arg || !arg.length) {
  console.error('run command not specified, exiting.');
  process.exit(1);
}
if (!fs.existsSync(path.resolve(__dirname, '../node_modules'))) {
  child.execSync('npm install');
} 
child.spawn(arg[0], arg.slice(1), { stdio: 'inherit' });
