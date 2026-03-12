import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const sourceImage = 'public/favicon.png';

async function generateFavicons() {
  const source = await sharp(sourceImage);
  const metadata = await source.metadata();
  console.log(`Source image: ${metadata.width}x${metadata.height}`);

  // Generate favicon-48x48.png (Google's recommended minimum for search results)
  await sharp(sourceImage)
    .resize(48, 48, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toFile('public/favicon-48x48.png');
  console.log('Generated: public/favicon-48x48.png (48x48)');

  // Generate a better favicon-32x32.png from the source
  await sharp(sourceImage)
    .resize(32, 32, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toFile('public/favicon-32x32-new.png');
  
  // Replace the old one
  fs.copyFileSync('public/favicon-32x32-new.png', 'public/favicon-32x32.png');
  fs.unlinkSync('public/favicon-32x32-new.png');
  console.log('Regenerated: public/favicon-32x32.png (32x32, better quality)');

  // Generate a better favicon-16x16.png from the source
  await sharp(sourceImage)
    .resize(16, 16, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toFile('public/favicon-16x16-new.png');
  
  fs.copyFileSync('public/favicon-16x16-new.png', 'public/favicon-16x16.png');
  fs.unlinkSync('public/favicon-16x16-new.png');
  console.log('Regenerated: public/favicon-16x16.png (16x16, better quality)');

  // Generate android-chrome-512x512.png (referenced in webmanifest)
  await sharp(sourceImage)
    .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toFile('public/android-chrome-512x512.png');
  console.log('Generated: public/android-chrome-512x512.png (512x512)');

  // Copy updated files to app/ directory too
  const filesToCopy = [
    'favicon-32x32.png',
    'favicon-16x16.png',
  ];
  
  for (const file of filesToCopy) {
    fs.copyFileSync(`public/${file}`, `app/${file}`);
    console.log(`Copied: public/${file} -> app/${file}`);
  }

  // Generate favicon.ico with multiple sizes (16, 32, 48)
  // ICO format needs to be created manually - we'll use a simple approach
  // by creating a 48x48 PNG and converting it
  const ico16 = await sharp(sourceImage).resize(16, 16).png().toBuffer();
  const ico32 = await sharp(sourceImage).resize(32, 32).png().toBuffer();
  const ico48 = await sharp(sourceImage).resize(48, 48).png().toBuffer();
  
  // Create ICO file format
  const icoBuffer = createIco([ico16, ico32, ico48], [16, 32, 48]);
  fs.writeFileSync('public/favicon.ico', icoBuffer);
  fs.writeFileSync('app/favicon.ico', icoBuffer);
  console.log('Generated: favicon.ico (16x16, 32x32, 48x48)');

  console.log('\nAll favicons generated successfully!');
}

function createIco(pngBuffers, sizes) {
  const numImages = pngBuffers.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  const dirSize = dirEntrySize * numImages;
  
  let offset = headerSize + dirSize;
  const entries = [];
  
  for (let i = 0; i < numImages; i++) {
    entries.push({
      size: sizes[i],
      data: pngBuffers[i],
      offset: offset,
    });
    offset += pngBuffers[i].length;
  }
  
  const totalSize = offset;
  const buffer = Buffer.alloc(totalSize);
  
  // ICO header
  buffer.writeUInt16LE(0, 0);     // Reserved
  buffer.writeUInt16LE(1, 2);     // Type: 1 = ICO
  buffer.writeUInt16LE(numImages, 4); // Number of images
  
  // Directory entries
  for (let i = 0; i < numImages; i++) {
    const entryOffset = headerSize + i * dirEntrySize;
    const size = entries[i].size;
    
    buffer.writeUInt8(size >= 256 ? 0 : size, entryOffset);      // Width
    buffer.writeUInt8(size >= 256 ? 0 : size, entryOffset + 1);  // Height
    buffer.writeUInt8(0, entryOffset + 2);    // Color palette
    buffer.writeUInt8(0, entryOffset + 3);    // Reserved
    buffer.writeUInt16LE(1, entryOffset + 4); // Color planes
    buffer.writeUInt16LE(32, entryOffset + 6); // Bits per pixel
    buffer.writeUInt32LE(entries[i].data.length, entryOffset + 8);  // Size
    buffer.writeUInt32LE(entries[i].offset, entryOffset + 12);       // Offset
    
    // Copy PNG data
    entries[i].data.copy(buffer, entries[i].offset);
  }
  
  return buffer;
}

generateFavicons().catch(console.error);
