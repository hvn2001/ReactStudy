var Dispatcher = function () {
    return {
        _stores: [],
        register: function (store) {
            // throw error if no update method exists
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
        // check all stores for update
        dispatch: function (action) {
            if (this._stores.length > 0) {
                this._stores.forEach(function (entry) {
                    entry.store.update(action, entry.change);
                });
            }
        }
    }
};