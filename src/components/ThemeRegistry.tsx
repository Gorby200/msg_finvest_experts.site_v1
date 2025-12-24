'use client';

import { useServerInsertedHTML } from 'next/navigation';

export default function ThemeRegistry({ theme }: { theme: any }) {
    useServerInsertedHTML(() => {
        if (!theme?.colors?.institutional) return null;

        const colors = theme.colors.institutional;
        return (
            <style dangerouslySetInnerHTML={{
                __html: `
          :root {
            --navy: ${colors.navy};
            --gold: ${colors.gold};
            --slate: ${colors.slate};
            --cream: ${colors.cream};
            --aurora: ${colors.aurora || '#E6FFFA'};
          }
        `,
            }} />
        );
    });

    return null;
}
