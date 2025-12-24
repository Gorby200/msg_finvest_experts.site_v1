import { ImageResponse } from 'next/og';
import theme from '@/content/settings/theme.json';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
    width: 32,
    height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
    const navy = theme?.colors?.institutional?.navy || '#0A192F';

    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 12,
                    background: navy, // Dynamic Institutional Navy
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    borderRadius: '8px', // Rounded corners
                    fontWeight: 700,
                    fontFamily: 'sans-serif',
                }}
            >
                MSG
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    );
}
