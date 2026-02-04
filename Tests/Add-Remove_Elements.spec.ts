import * as _ from '@Index';
import { AddRemoveEle } from '@Add-Remove_Elements.page';


_.test('AddRemove_Element', async ({ page }) => {
    
    const basePage = new _.BasePage(page);
    const addRemoveEle = new AddRemoveEle(page);

    await basePage.goToUrl();
    await addRemoveEle.ClickAddRemoveEleLink();
    await addRemoveEle.ClickAddElementButton();
    await addRemoveEle.ClickDeleteButton();


    console.log('BASE_URL:', process.env.BASE_URL);
    console.log('USERNAME:', process.env.AUTH_USERNAME);

});
