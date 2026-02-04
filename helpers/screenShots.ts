import * as _ from '@Index';

// Take screenshot with page title and timestamp
export const takeScreenshot = async (
  page: _.Page, 
  screenshotDir: string, 
  customName?: string
): Promise<string | null> => {
  try {
    const pageTitle = await page.title();
    const sanitizedTitle = _.sanitizeTestName(pageTitle || 'untitled');
    const dateTime = _.getFormattedDateTime();
    const fileName = customName 
      ? `${_.sanitizeTestName(customName)}_${dateTime}.png`
      : `${sanitizedTitle}_${dateTime}.png`;
    const screenshotPath = _.path.join(screenshotDir, fileName);
    
    await page.screenshot({ path: screenshotPath, fullPage: false });
    console.log(`📸 Screenshot saved: ${screenshotPath}`);
    
    return screenshotPath;
  } catch (error) {
    console.error('Failed to take screenshot:', error);
    return null;
  }
};