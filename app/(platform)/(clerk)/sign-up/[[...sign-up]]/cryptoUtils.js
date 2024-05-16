
import CryptoJS from 'crypto-js';

const secretKey = '8af83e9f8ed9446e913e7253c0d29c4b';

export function encryptData(data) {
  return CryptoJS.AES.encrypt(data, secretKey).toString();
}

export function decryptData(encryptedData) {
  const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
}
