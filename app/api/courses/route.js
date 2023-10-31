import { NextResponse } from "next/server";
import courses from "../data.json";

export function GET(request) {
  return NextResponse.json(courses);
}
