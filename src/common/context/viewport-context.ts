import React from 'react';
import { ViewportType } from '../../App';

/**
 * Holds context data across the app about what sort of viewport we're using, so we can update any components'
 * state based on the viewport in global context.
 */
const ViewportContext = React.createContext<ViewportType>('desktop');

export const ViewportProvider = ViewportContext.Provider;
export const ViewportConsumer = ViewportContext.Consumer;

export default ViewportContext;
