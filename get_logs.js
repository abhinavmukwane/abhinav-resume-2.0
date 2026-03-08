import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    page.on('console', msg => console.log(`[CONSOLE] ${msg.text()}`));

    await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });

    await new Promise(r => setTimeout(r, 2000));
    await page.mouse.move(500, 500);

    // See what element is actually on top at (500,500)
    const topElementInfo = await page.evaluate(() => {
        const el = document.elementFromPoint(500, 500);
        if (!el) return "None";

        return {
            tagName: el.tagName,
            id: el.id,
            className: el.className,
            zIndex: window.getComputedStyle(el).zIndex
        }
    });

    console.log("Top Element at (500, 500):", topElementInfo);

    // Are .cursor or .cursor2 interfering?
    const originalCursors = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('.cursor, .cursor2')).map(el => {
            return {
                className: el.className,
                display: window.getComputedStyle(el).display,
                visibility: window.getComputedStyle(el).visibility,
                opacity: window.getComputedStyle(el).opacity,
                zIndex: window.getComputedStyle(el).zIndex
            };
        });
    });

    console.log("Original Cursors info:", originalCursors);

    await browser.close();
})();
