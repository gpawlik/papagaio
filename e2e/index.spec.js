// @flow
describe('Simple flow', () => {
    beforeEach(async () => {
        await device.reloadReactNative();
    });

    it('should have home screen', async () => {
        await expect(element(by.id('screen.home'))).toBeVisible();
    });
});
