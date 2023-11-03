import { NextRequest, NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    // const isAndroid = request.headers.get('user-agent')?.includes('Android');
    const isIOS = request.headers.get('user-agent')?.includes('iPhone');
    if (request.nextUrl.search.includes('binId=')) {
        const binId =
            request.nextUrl.search
                .split('&')
                .find((item) => item.includes('binId'))
                ?.split('=')?.[1] || '123';
        if (isIOS) {
            return NextResponse.redirect(
                `https://appclip.apple.com/id?p=com.litterlotto.ios.Clip?binId=${binId}`
            );
        }
        // https://appclip.apple.com/id?p=com.litterlotto.ios.Clip
        return NextResponse.redirect(new URL(`/bin/${binId}`, request.url));
    }
    return undefined;
}
