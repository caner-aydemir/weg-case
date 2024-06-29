import {NextResponse} from "next/server";

export async function POST(request){

    //Client tarafından aldığım username ve password değerlerini vercel apisine POST isteği olarak atıyorum ve auth işlemlerini kontrol ediyorum.

    const {username , password} = await request.json()

        const response = await fetch("https://recruitment-api.vercel.app/login" ,
        {
            method:"POST",
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({username , password})
        }
       ,)

        const data = await response.json()
    if (data.status === 200)
        {
            const response = NextResponse.json(
                { success: true },
                { status: 200 }
            );

            response.cookies.set({
                name: "token",
                value: data.jwt,
                path: "/",
                username:username,
            });
            response.cookies.set({
                name: "username",
                value: username,
                path: "/",
            });
            return response
        }
        else
        {
            return NextResponse.json({ success: false,data });
        }
}
