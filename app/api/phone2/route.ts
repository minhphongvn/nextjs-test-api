export async function GET(req: Request) {
  // const endpoint = "https://graph.zalo.me/v2.0/me/info";
  // const secretKey = process.env.ZALO_APP_SECRET_KEY;
  const { searchParams } = new URL(req.url);
  const access_token = searchParams.get("access_token");
  const token = searchParams.get("token");

  return Response.json({ access_token, token });
}
