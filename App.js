import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import Root from './Navigation/Root';

export default () => (
    <ApplicationProvider {...eva} theme={eva.light}>
        <Root />
    </ApplicationProvider>
);
