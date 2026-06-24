import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844, isMobile: true });
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });

  const overflowInfo = await page.evaluate(() => {
    const docWidth = document.documentElement.clientWidth;
    const scrollWidth = document.documentElement.scrollWidth;
    
    if (scrollWidth <= docWidth) {
      return { msg: 'No horizontal overflow detected on documentElement.' };
    }

    const overflowingElements = [];
    const elements = document.querySelectorAll('*');
    for (const el of elements) {
      const rect = el.getBoundingClientRect();
      if (rect.right > docWidth) {
        overflowingElements.push({
          tag: el.tagName,
          className: el.className,
          id: el.id,
          right: rect.right,
          width: rect.width,
          scrollWidth: el.scrollWidth,
        });
      }
    }
    
    return {
      docWidth,
      scrollWidth,
      elements: overflowingElements
    };
  });

  console.log(JSON.stringify(overflowInfo, null, 2));

  await browser.close();
})();
