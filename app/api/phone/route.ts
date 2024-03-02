import axios from "axios";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest) {
  const endpoint = "https://graph.zalo.me/v2.0/me/info";
  const secretKey = process.env.ZALO_APP_SECRET_KEY;
  const { access_token, token } = req.query;

  const response = await axios.get(endpoint, {
    headers: {
      Accept: "application/json",
      access_token,
      code: token,
      secret_key: secretKey,
    },
  });
  return NextResponse.json({ message: response.data });
}
