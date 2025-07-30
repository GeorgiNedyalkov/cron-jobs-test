import { NextResponse } from "next/server";

export async function GET() {

	const date = new Date();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const time = `${hours}:${minutes}`;

	console.log(`Executing a cron job at ${time}`);

	return NextResponse.json({
		message: "Cron job executed",
		time,
		date: date,
		ok: true,
	})
}
