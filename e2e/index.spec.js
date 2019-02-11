// @flow
const tapAndSee = async (tappable: string, elements: Array<string>) => {
    await element(by.id(tappable)).tap();

    for (let item of elements) {
        await expect(element(by.id(item))).toBeVisible();
    }
};

describe('Simple flow', () => {
    beforeEach(async () => {
        await device.reloadReactNative();
    });

    it('should have home screen', async () => {
        await expect(element(by.id('screen.home'))).toBeVisible();
        await tapAndSee('header.button', ['side-drawer', 'menu-button.user-profile', 'menu-button.about']);
        await tapAndSee('menu-button.user-profile', ['screen.user-profile']);
        await tapAndSee('header.button', ['screen.home']);
    });
});
