// global imports
let express = require('express');
let bodyParser = require('body-parser');
var hummus = require('hummus');

// local imports
let settings = require('./config/settings');
let pdf = require('./services/pdf');

// configure application
let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// define endpoints here
app.get('/', (req, res) => {
    // pdf.createPDF('Test');
    res.writeHead(200, {'Content-Type': 'application/pdf'});  
    var pdfWriter = hummus.createWriter(new hummus.PDFStreamForResponse(res));
    var page = pdfWriter.createPage(0,0,595,842);
    console.log(__dirname + "/arial.ttf");
    pdfWriter.startPageContentContext(page).writeText('Hello World',
                                                        0,800,
                                                        {
                                                        font: pdfWriter.getFontForFile( __dirname + '/arial.ttf'),
                                                        size:50,
                                                        colorspace:'black',
                                                        color:0x00
                                                        });
    pdfWriter.writePage(page);
    pdfWriter.end();
    res.end();
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.status(200).send({
        result: 200
    });
});

let port = settings.port;
app.listen(port,() => {
    console.log(`Server started at port: ${port}`);
});