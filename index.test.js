/**
 * @jest-environment jsdom
 */

const { encode, decode } = require('./')

const emptyImage = {
  width: 1,
  height: 1,
  data: new Uint8Array([0, 0, 0, 0])
}

test('encode', () => {
  expect(encode(emptyImage, 'jpeg')).toMatchSnapshot()
  expect(encode(emptyImage, 'png')).toMatchSnapshot()
  expect(encode(emptyImage, 'bmp')).toMatchSnapshot()
})

test('decode', () => {
  expect(decode(encode(emptyImage, 'jpeg'))).toMatchSnapshot()
  expect(decode(encode(emptyImage, 'png'))).toMatchSnapshot()
  expect(decode(encode(emptyImage, 'bmp'))).toMatchSnapshot()
})
