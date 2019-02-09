// @flow
import * as R from 'ramda';

const colors = {
    slate: 'rgb(51, 73, 91)',
    orange: 'rgb(255, 122, 0)',
    white: 'rgb(255, 255, 255)',
    chalk: 'rgb(244, 245, 246)',
};
const fontSizes = {
    fs1: '14px',
    fs2: '16px',
    fs3: '18px',
    fs4: '20px',
    fs5: '24px',
    fs6: '36px',
    fs7: '48px',
    fs8: '60px',
    fs9: '72px',
};
const lineHeights = {
    lh1: '18px',
    lh2: '20px',
    lh3: '22px',
    lh4: '24px',
    lh5: '28px',
    lh6: '40px',
    lh7: '52px',
    lh8: '64px',
    lh9: '76px',
};

const spacerSizes = {
    ss0: '0px',
    ss1: '1px',
    ss2: '2px',
    ss3: '4px',
    ss4: '8px',
    ss5: '12px',
    ss6: '16px',
    ss7: '20px',
    ss8: '24px',
    ss9: '36px',
    ss10: '48px',
    ss11: '64px',
    ss12: '72px',
};

const breakPoints = {
    bp0: '320px',
    bp1: '360px',
    bp2: '600px',
    bp3: '1024px',
    bp4: '1440px',
};

const borderRadius = {
    br1: '12px',
    br2: '8px',
    br3: '6px',
};

export const theme = [colors, fontSizes, lineHeights, spacerSizes, breakPoints, borderRadius];

export const selectors = R.mergeAll(theme);
