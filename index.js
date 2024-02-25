const jpeg = require('jpeg-js')
const png = require('fast-png')
const bmp = require('bmp-js')

if (typeof Buffer === 'undefined') {
  global.Buffer = require('buffer').Buffer
}

exports.decode = (buffer) => {
  if (buffer[0] === 0xff && buffer[1] === 0xd8) {
    const data = jpeg.decode(buffer)
    return {
      width: data.width,
      height: data.height,
      data: new Uint8Array(data.data),
    }
  }
  if (buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4e && buffer[3] === 0x47) {
    const data = png.decode(buffer)
    return {
      width: data.width,
      height: data.height,
      data: data.data,
    }
  }
  if (buffer[0] === 0x42 && buffer[1] === 0x4d) {
    const data = bmp.decode(buffer)
    return {
      width: data.width,
      height: data.height,
      data: new Uint8Array(data.data)
    }
  }
  throw new Error('Unsupported image format')
}

exports.encode = (imageData, type) => {
  if (type === 'jpeg') {
    return jpeg.encode(imageData).data
  }
  if (type === 'png') {
    return png.encode(imageData)
  }
  if (type === 'bmp') {
    return bmp.encode(imageData).data
  }
  throw new Error('Unsupported image format')
}
