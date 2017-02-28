const tape = require('tape');
const exec = require('child_process').exec
tape('A basic test', function(t) {
    t.plan(1);
    const expected = `<math xmlns="http://www.w3.org/1998/Math/MathML" display="block" alttext="x">\n  <mi>x</mi>\n</math>\n`
    let child = exec('node ./bin/tex2mml "x"',
      function (error, stdout, stderr) {
        console.log(stdout);
        t.equal(stdout, expected, 'Virtual Console not activated');
    });


});
