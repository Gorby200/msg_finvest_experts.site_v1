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

        if (ext === '.svg' || ext === '.webp') {
            fs.copyFileSync(sourcePath, path.join(targetDir, file));
            console.log(`Copied ${ext}: ${file}`);
            continue;
        }

        try {
            const image = await Jimp.read(sourcePath);
            image.resize({ h: 60 });

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
            console.log(`Processed: ${targetPath}`);
        } catch (err) {
            console.error(`Error processing ${file}:`, err);
        }
    }
}

processLogos();
