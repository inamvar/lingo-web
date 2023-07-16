import { renderToStaticMarkup } from 'react-dom/server';
import pdf from 'html-pdf';

const componentToPDFBuffer = (html) => {
    return new Promise((resolve, reject) => {
       // const html = renderToStaticMarkup(component);

        const options = {
            format: 'A4',
            orientation: 'portrait',
            border: '10mm',
            footer: {
                height: '10mm',
            },
            type: 'pdf',
            timeout: 30000,
            childProcessOptions: {
                env: {
                    OPENSSL_CONF: '/dev/null',
                },
            }
        };

        const buffer = pdf.create(html, options).toBuffer((err, buffer) => {
            if (err) {
                return reject(err);
            }

            return resolve(buffer);
        });
    });
}

export default {
    componentToPDFBuffer
}