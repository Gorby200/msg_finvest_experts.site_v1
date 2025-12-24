import fs from 'fs';
import path from 'path';

export async function getContent(type: 'locales' | 'settings', filename: string) {
    const filePath = path.join(process.cwd(), 'src', 'content', type, `${filename}.json`);
    try {
        const fileContents = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileContents);
    } catch (error) {
        console.error(`Error loading content from ${filePath}:`, error);
        return {};
    }
}

export async function getDictionary(locale: string) {
    return await getContent('locales', locale);
}

export async function getTheme() {
    return await getContent('settings', 'theme');
}
