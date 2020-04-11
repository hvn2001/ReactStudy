var Dispatcher = function () {
    return {
        _stores: [],
        register: function (store) {
            // expecting an `update` method for each store
            if (!store || !store.update) {
                throw new Error(
                    'You should provide a store that has an `update` method'
                );
            } else {
                var consumers = [];
                var change = function () {
                    consumers.forEach(function (consumer) {
                        consumer(store);
                    });
                };
                var subscribe = function (consumer, noInit) {
                    consumers.push(consumer);
                    !noInit ? consumer(store) : null;
                };

                this._stores.push({store: store, change: change});
                return subscribe;
            }
            return false;
        },
        dispatch: function (action) {
            // check all stores for update
            if (this._stores.length > 0) {
                this._stores.forEach(function (entry) {
                    entry.store.update(action, entry.change);
                });
            }
        }
    }
};

module.exports = {
    create: function () {
        var dispatcher = Dispatcher();

        return {
            createAction: function (type) {
                if (!type) {
                    throw new Error('Please, provide action\'s type.');
                } else {
                    return function (payload) {
                        // actions are passed to dispatcher
                        return dispatcher.dispatch({
                            type: type,
                            payload: payload
                        });
                    }
                }
            },
            createSubscriber: function (store) {
                return dispatcher.register(store);
            }
        }
    }
};
