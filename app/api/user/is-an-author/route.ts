import {isAuthor} from "@/app/utils/Auth/authinticationUtils";
import { NextResponse } from "next/server";
export async function GET()
{
	const isAnAuthor = await isAuthor();
	const status = isAnAuthor ? 200 : 403;
	return NextResponse.json({isAnAuthor: isAnAuthor}, {status});
}