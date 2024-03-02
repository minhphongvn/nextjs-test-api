import axios from "axios";

export async function GET(req: Request) {
  const endpoint = "https://graph.zalo.me/v2.0/me/info";
  const secretKey = process.env.ZALO_APP_SECRET_KEY;
  const { searchParams } = new URL(req.url);
  const access_token = searchParams.get("access_token");
  const token = searchParams.get("token");

  const response = await axios.get(endpoint, {
    headers: {
      Accept: "application/json",
      access_token,
      code: token,
      secret_key: secretKey,
    },
  });
  return Response.json({ message: response.data });
}
