import React, { useEffect, useReducer } from 'react';

const reducer = (store, action) => {
    switch (action.type) {
        case 'start':
            return {...store, status: 'fetching'};

        case 'success':
            return {...store,  status: 'success', component: action.payload};

        case 'error':
            return {...store,  status: 'error'};
    }
};

const useDynamic = (name, onError, defaultComponent) => {
    const [state, updateState] = useReducer(reducer, {
        status: 'ready',
        component: defaultComponent || (() => null),
    });

    useEffect(() => {
        if (!name) return;

        updateState({type: 'start'});
        import('../dynamicComponents/' + name)
            .then(Component => {
                updateState({
                    type: 'success',
                    payload: Component.default
                });
            })
            .catch(error => {
                updateState({type: 'error'});
                if (onError) onError(error);
            });
    }, [name]);

    state.component.status = state.status;
    return state.component;
};

export default useDynamic;
