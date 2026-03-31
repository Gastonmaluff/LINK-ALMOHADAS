import imageCompression from 'browser-image-compression';

const compressionOptions = {
  maxSizeMB: 0.8,
  maxWidthOrHeight: 1600,
  useWebWorker: true,
};

export async function compressImageFile(file, onProgress) {
  try {
    return await imageCompression(file, {
      ...compressionOptions,
      onProgress,
    });
  } catch (error) {
    throw new Error(error.message || `No se pudo comprimir ${file.name}.`);
  }
}
