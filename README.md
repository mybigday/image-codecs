# image-codecs

Pure JS cross platform image encoder/decoder.

## Usage

```js
import { encode, decode } from 'image-codecs';

const imageData = decode(buffer);
// Return: { width, height, data: Uint8Array }

const buffer = encode(imageData, 'jpeg'); // or 'bmp', 'png'
// Return: Buffer
```

## Supported formats

- JPEG
- BMP
- PNG
