import { useState } from 'react';

export interface AnimationState {
    mountedOnce: boolean; // Whether this component has been mounted.
    classes: string;
}

/**
 * Hook used to modify class state on first component mount.
 *
 * @param timeout
 * @param initialClasses
 * @param classes
 */
export function useAnimClassState(
    timeout: number = 0,
    initialClasses: string | null,
    ...classes: string[]
): [string, boolean] {
    let [classState, setClassState] = useState<AnimationState>({
        mountedOnce: false,
        classes: initialClasses || '',
    });

    // @TODO: solve the memory leak issue caused by calling this too quickly..
    if (!classState.mountedOnce) {
        setTimeout(() => {
            setClassState({
                mountedOnce: true,
                classes: `${classState.classes} ${classes.join(' ')}`,
            });
        }, timeout);
    }

    return [classState.classes, classState.mountedOnce];
}
