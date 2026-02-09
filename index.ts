import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import test from '@playwright/test';

const configenv = dotenv.config({ path: 'config.env' });
const credsenv = dotenv.config({ path: 'creds.env' });

export { configenv, credsenv };
export { Page, Locator, BrowserContext, APIRequestContext, APIResponse } from '@playwright/test';
export { test, expect } from './fixtures/testFixtures';
export { path };
export { fs };
export type { EnhancedPage, TestDirectories } from '@Types/testTypes';

// Export utilities if needed in tests
export { getFormattedDateTime, getDisplayDateTime } from '@Utils/dateTime';
export { sanitizeTestName } from '@Utils/stringUtils';
export { createArtifactDirectories } from '@Utils/directoryUtils';
export { captureScreenshot } from '@Helper/screenShots';
export { showIntroSplash } from '@Helper/splashScreen';
export { highlight, createhighLightLocator, createhighLightPage } from './helpers/highlight';
export { BasePage } from '@BasePage';
export { useData } from '@TestData/TestData';


//API
export { Api, CheckStatus } from '@api_Helpers/api';
export { generateRandomUser } from '@api_Helpers/RandomUser';

//_________________________________
const GREEN = '\x1b[32m';
const RED = '\x1b[31m';
const RESET = '\x1b[0m';
const WHITE = '\x1b[97m';

test.afterEach(async ({ }, testInfo) => {
    console.log(`${WHITE}___________________________________________________________`);
    const title = testInfo.title;
    const status = testInfo.status;

    if (status === 'passed') {
        console.log(`${GREEN}✔ PASSED: ${title}${RESET}`);
    } else if (status === 'failed') {
        console.log(`${RED}✖ FAILED: ${title}${RESET}`);
    } else {
        console.log(`⚠ ${status?.toUpperCase()}: ${title}`);
    }

});
