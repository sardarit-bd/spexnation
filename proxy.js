import { NextResponse } from "next/server";
import verifyJWT from "./lib/verifyJWT";

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