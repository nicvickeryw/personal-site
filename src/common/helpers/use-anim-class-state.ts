import { useState } from 'react';

export interface AnimationState {
    mountedOnce: boolean; // Whether this component has been mounted.
    classes: string;
}

/**
 * Hook used to modify class state on first component mount.
 *
 * @param timeout
 * @param mounted
 * @param initialClasses
 * @param classes
 */
export function useAnimClassState(
    timeout: number = 0,
    initialClasses: string | null,
    mounted: Promise<void> | null = null,
    ...classes: string[]
) {
    let [classState, setClassState] = useState<AnimationState>({
        mountedOnce: false,
        classes: initialClasses || '',
    });

    if (!classState.mountedOnce) {
        // Maybe we can resolve a Promise and call this asynchronously?
        setTimeout(() => {
            // @TODO: Solve issue caused by async func calling setState on unmounted component
            // By this time, the component could be unmounted.
            if (mounted) {
                mounted.then(() => {
                    setClassState({
                        mountedOnce: true,
                        classes: `${classState.classes} ${classes.join(' ')}`,
                    });
                })
            } else {
                setClassState({
                    mountedOnce: true,
                    classes: `${classState.classes} ${classes.join(' ')}`,
                });
            }
        }, timeout);
    }

    return classState.classes;
}
