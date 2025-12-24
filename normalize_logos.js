const { Jimp } = require('jimp');
const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'Logo');
const targetDir = path.join(__dirname, 'public', 'images', 'partners');

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

async function processLogos() {
    const files = fs.readdirSync(sourceDir);
    console.log(`Processing ${files.length} logos...`);

    for (const file of files) {
        const ext = path.extname(file).toLowerCase();
        const basename = path.basename(file, ext);
        const sourcePath = path.join(sourceDir, file);
        const targetPath = path.join(targetDir, `${basename}.png`);

        console.log(`Working on ${file}...`);

        // SVG and WebP: copy directly but we'll need to ensure consistent sizing in CSS
        if (ext === '.svg' || ext === '.webp') {
            fs.copyFileSync(sourcePath, path.join(targetDir, file));
            console.log(`Copied ${ext}: ${file}`);
            continue;
        }

        try {
            const image = await Jimp.read(sourcePath);

            // Get original dimensions
            const originalWidth = image.bitmap.width;
            const originalHeight = image.bitmap.height;

            // Target height for normalization
            const targetHeight = 60;

            // Calculate aspect ratio
            const aspectRatio = originalWidth / originalHeight;

            // Resize to target height while maintaining aspect ratio
            const newWidth = Math.round(targetHeight * aspectRatio);

            // Ensure minimum width for very small logos
            const finalWidth = Math.max(newWidth, 80);
            const finalHeight = Math.round(finalWidth / aspectRatio);

            image.resize({ w: finalWidth, h: finalHeight });

            // Remove white backgrounds
            const threshold = 240;
            image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
                const r = this.bitmap.data[idx + 0];
                const g = this.bitmap.data[idx + 1];
                const b = this.bitmap.data[idx + 2];
                if (r > threshold && g > threshold && b > threshold) {
                    this.bitmap.data[idx + 3] = 0;
                }
            });

            const buffer = await image.getBuffer('image/png');
            fs.writeFileSync(targetPath, buffer);
            console.log(`Processed: ${targetPath} (${finalWidth}x${finalHeight})`);
        } catch (err) {
            console.error(`Error processing ${file}:`, err);
        }
    }
}

processLogos();
