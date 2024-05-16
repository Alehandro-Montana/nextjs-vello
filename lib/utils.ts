/*import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import crypto from 'crypto';

// Функція для обчислення хешу файла
export async function computeFileHash(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      const buffer = Buffer.from(fileReader.result as ArrayBuffer);
      const fileHash = crypto.createHash('sha256');
      fileHash.update(buffer);
      const hash = fileHash.digest('hex');
      resolve(hash);
    };
    fileReader.onerror = reject;
    fileReader.readAsArrayBuffer(file);
  });
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
*/

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
