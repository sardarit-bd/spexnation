import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

async function verifyJWT(token) {
    try {
        const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET);

        const { payload } = await jwtVerify(token, secret, {
            clockTolerance: 30
        });

        return payload;
    } catch {
        return null;
    }
}

export async function proxy(req) {

    const path = req.nextUrl.pathname;

    const token = req.cookies.get("token")?.value;


    const decoded = token ? await verifyJWT(token) : null;

    const protectedRoutes = ["/dashboard"];
    const isProtected = protectedRoutes.some(route => path.startsWith(route));




    //  Not logged in
    if (!decoded) {

        const res = NextResponse.redirect(new URL("/signin", req.url));

        ["token", "name"].forEach(cookieName => {
            res.cookies.set(cookieName, "", {
                path: "/",
                maxAge: 0
            });
        });

        if (isProtected) return res;
    }


    //  Prevent logged user going to signin
    if (decoded && path.startsWith("/signin")) {

        return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};