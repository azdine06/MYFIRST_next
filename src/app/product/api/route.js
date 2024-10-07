export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const name = searchParams.get("name") || "";
  return Response.json(`Hello ${name}`);
}
//* cette methode me permet de recupé les parametres qui se trouve dans Url

export async function POST(request) {
  const json = await request.json();
  return Response.json(`Hello ${json.name}`);
}
//*pour envoiyé data soit par axios soit par featch API

export async function PATCH(request) {
  const formData = await request.formData();
  const name = formData.get("name");
  return Response.json(`Hello ${name}`);
}
//*dans la méthode patch on travail avec  form-data dans post main
