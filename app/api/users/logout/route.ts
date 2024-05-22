import connect from "@/app/utils/connect";
import { NextResponse } from "next/server";

export async function GET(){
    await connect();
    const response = NextResponse.json({message : "Logged out", status : 200});
    response.cookies.delete("session");
    return response;
}