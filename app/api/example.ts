/*import { getAuth } from "@clerk/nextjs/server";
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { sessionClaims } = getAuth(req);

  if (!sessionClaims) {
    return res.status(401).json({ message: "Не вдалося отримати дані сеансу" });
  }

  const firstName = sessionClaims.fullName;
  const primaryEmail = sessionClaims.primaryEmail;

  if (!firstName || !primaryEmail) {
    return res.status(401).json({ message: "Відсутні ім'я або основна електронна адреса" });
  }

  return res.status(200).json({ firstName, primaryEmail });
}
*/
//добавлено в сессии 30.04.