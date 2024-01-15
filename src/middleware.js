
import { NextResponse } from 'next/server'


export function middleware(request) {
console.log("middleware execute")
    const authToken = request.cookies.get("authToken")?.value; //here RHS authToken is from JWT
    if (
        request.nextUrl.pathname === "/api/login" || request.nextUrl.pathname === "/api/users"
    ) {
        return;
    }
    const loggedInUserNotAceesPath = request.nextUrl.pathname === "/login" || request.nextUrl.pathname==="/signup"
    if (loggedInUserNotAceesPath) {
        if (authToken) {
            return NextResponse.redirect(new URL('/profile/user', request.url))
        }
    }
        else {
            if (!authToken) {
                if (request.nextUrl.pathname.startsWith("/api")) {
                    return NextResponse.json({
                        message: "access denied",
                        success: false
                    }, {
                        status: 401
                    })

                  
                }
                return NextResponse.redirect(new URL('/login', request.url))
            }
            else {

            }
        }
    
    //  
}


export const config = {
    matcher: ["/", "/signup", "/login", "/profile/:path*", "/addTask", "/showTask",
        "/api/:path*"
    ]
    // "/api/:path*" here we use this so api/login will also include which we don't wanted so we have to make separate 
    //api/login condition 
}