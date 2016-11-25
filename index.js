var iterativeLog = xs =>
  xs.forEach( (x, y) => console.log(`${y}: ${x}`) )

var iterate = f => {
  var x = []
  f(x)
  return x
}

var doToArray = (xs, f) => xs.forEach(f)
