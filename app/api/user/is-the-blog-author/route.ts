import cachedDataFromSession from "@/app/utils/Auth/cachedDataFromSession";
import { NextResponse } from "next/server";
export async function GET()
{
	const userData = await cachedDataFromSession();
	const id = userData? userData.id : null
	const status = id ? 200 : 404;
	return NextResponse.json({id: id}, {status});
}