import { cookies } from "next/headers";

export async function GET(params) {
    const cookie = cookies()
    return Response.json(`Hello ${}`);
}