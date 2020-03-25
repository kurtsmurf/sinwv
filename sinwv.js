const canvas = document.querySelector('#wvz')
const side = 400
const color = '#0DBC79'
const scale = 8

canvas.height = side
canvas.width = side
canvas.style.border = scale + 'px solid ' + color

const ctx = canvas.getContext('2d')
const width = Math.floor(canvas.width / scale)
const height = Math.floor(canvas.height / scale)

ctx.scale(scale, scale)
ctx.fillStyle = color

const drawSineWave = (offset, amp, period) => {
  for (x = 0; x < width; x++) {
    const phase = (x + offset) / period
    const sine = Math.sin(2 * Math.PI * phase)
    const y = Math.floor(sine * amp) + (height / 2)

    ctx.fillRect(x, y, 1, 1)
  }
}

const amplitude = height / 3
const period = width
let offset = 0

const animate = () => {
  offset = ++offset % period

  ctx.clearRect(0, 0, width, height)
  drawSineWave(offset, amplitude, period)

  requestAnimationFrame(animate)
}
animate()