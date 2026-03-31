import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../firebase/config';

function getFileExtension(fileName) {
  const parts = fileName.split('.');
  return parts.length > 1 ? parts.pop().toLowerCase() : 'jpg';
}

export async function uploadProductImage(file, code, onProgress) {
  const extension = getFileExtension(file.name);
  const imagePath = `products/${new Date().getFullYear()}/${code}-${Date.now()}.${extension}`;
  const storageRef = ref(storage, imagePath);

  const uploadResult = await new Promise((resolve, reject) => {
    const task = uploadBytesResumable(storageRef, file, {
      contentType: file.type,
    });

    task.on(
      'state_changed',
      (snapshot) => {
        if (onProgress) {
          const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          onProgress(percent);
        }
      },
      reject,
      resolve,
    );
  });

  const imageUrl = await getDownloadURL(uploadResult.ref);

  return {
    imageUrl,
    imagePath,
  };
}

export async function deleteStoredImage(imagePath) {
  if (!imagePath) {
    return;
  }

  try {
    await deleteObject(ref(storage, imagePath));
  } catch (error) {
    if (error.code !== 'storage/object-not-found') {
      throw error;
    }
  }
}
