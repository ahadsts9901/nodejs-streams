import fs from "fs"
import path from "path"
const __dirname = path.resolve()

export const streamController = (req, res) => {

    try {

        // 31_mb_file
        const filePath = path.join(__dirname, 'largeData.json');
        
        if (!fs.existsSync(filePath)) {
            return res.status(404).send({ message: 'file not found' });
        }

        res.setHeader('Content-Type', 'application/json');
        
        const readStream = fs.createReadStream(filePath);

        readStream.pipe(res);

        readStream.on('error', (error) => {
            console.error('stream error:', error);
            res.status(500).send({
                message: 'error streaming the file',
                error: error?.message,
            });
        });

        readStream.on('end', () => {
            console.log('file streaming completed.');
        });

    } catch (error) {
        console.error(error)
        res.status(500).send({
            message: "internal server error",
            error: error?.message
        })
    }

}