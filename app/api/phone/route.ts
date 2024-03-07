import axios from "axios";

export async function GET(req: Request) {
  const endpoint = "https://graph.zalo.me/v2.0/me/info";
  const secretKey = process.env.ZALO_APP_SECRET_KEY;
  const { searchParams } = new URL(req.url);

  if (!searchParams.has('access_token') || !searchParams.has('token')) {
    return Response.json({ number: '0987654321' });
  }

  const access_token = searchParams.get("access_token");
  const token = searchParams.get("token");

  const {
    data: {
      data: { number },
    },
  } = await axios.get(endpoint, {
    headers: {
      Accept: "application/json",
      access_token,
      code: token,
      secret_key: secretKey,
    },
  });

  return Response.json({ number });
}
