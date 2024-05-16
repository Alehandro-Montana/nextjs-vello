import { SignUp } from "@clerk/nextjs";
import { encryptData, decryptData } from "./cryptoUtils";
 
export default function Page() {

  const sensitiveData = 'конфіденційна_інформація';
  const encryptedData = encryptData(sensitiveData);
  console.log('Шифровані дані:', encryptedData);

  const decryptedData = decryptData(encryptedData);
  console.log('Розшифровані дані:', decryptedData);
  return <SignUp />;
}
