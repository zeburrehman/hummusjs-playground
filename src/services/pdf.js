let hummus = require('hummus');

module.exports = {
    createPDF(fileName){
        console.log(__dirname);
        var pdfWriter = hummus.createWriter(`${__dirname}/output/${fileName}.pdf`, {version:hummus.ePDFVersion14});
		var page = pdfWriter.createPage();

		page.mediaBox = [0,0,595,842];
		for (var i=0; i < 4; ++i) {
			let ctx = pdfWriter.startPageContentContext(page);
			ctx.writeText("Hello World", 0, 400*(i+1));
			
			pdfWriter.writePage(page);
		}
		pdfWriter.end();
    }
}