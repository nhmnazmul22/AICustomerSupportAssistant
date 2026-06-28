import { AIinteraction } from "@/config/gemini.config"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    if ((body.input as string).trim().length === 0) {
      return NextResponse.json({
        success: false,
        message: "Please, write a question for ai response!!",
      })
    }
    const generateMessage = await AIinteraction(body.input)

    console.log("Generate Message: ", generateMessage)
    return NextResponse.json({
      success: true,
      message: "AI Generated Response",
      response: generateMessage.output_text,
    })
  } catch (err) {
    return NextResponse.json({
      success: false,
      message: err instanceof Error ? err.message : "Something went wrong!",
    })
  }
}
