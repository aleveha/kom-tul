import {NextRequest, NextResponse, userAgent} from "next/server";

// IE 10 or older, IE 11, non-chromium Edge
const UA_BLACKLIST = ["MSIE ", "Trident/", "Edge/"];

export function middleware(req: NextRequest) {
	const {ua} = userAgent(req);
	if (ua && UA_BLACKLIST.some(i => ua.indexOf(i) > 0)) {
		return NextResponse.redirect("/nepodporovany-prohlizec");
	}
}
