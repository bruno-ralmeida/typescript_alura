System.register(["../views/index", "../models/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, index_2, NegotiationController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            NegotiationController = class NegotiationController {
                constructor() {
                    this._negotiations = new index_2.Negotiations();
                    this._negotiationsView = new index_1.NegotiationsView('#negotiations');
                    this._messageView = new index_1.MessageView('#message');
                    this._inputDate = $('#date');
                    this._inputQuantity = $('#quantity');
                    this._inputValue = $('#value');
                }
                add(e) {
                    e.preventDefault();
                    const negotiation = new index_2.Negotiation(new Date(this._inputDate.val().toString().replace(/-/g, ',')), parseInt(this._inputQuantity.val().toString()), parseFloat(this._inputValue.val().toString()));
                    this._negotiations.add(negotiation);
                    this._negotiationsView.update(this._negotiations);
                    this._messageView.update('Negotiation added successfully!');
                }
            };
            exports_1("NegotiationController", NegotiationController);
        }
    };
});
