System.register(["../views/index", "../models/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, index_2, Weekday, NegotiationController;
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
            (function (Weekday) {
                Weekday[Weekday["SUNDAY"] = 0] = "SUNDAY";
                Weekday[Weekday["MONDAY"] = 1] = "MONDAY";
                Weekday[Weekday["TUESDAY"] = 2] = "TUESDAY";
                Weekday[Weekday["WEDNESDAY"] = 3] = "WEDNESDAY";
                Weekday[Weekday["THURSDAY"] = 4] = "THURSDAY";
                Weekday[Weekday["FRIDAY"] = 5] = "FRIDAY";
                Weekday[Weekday["SATURDAY"] = 6] = "SATURDAY";
            })(Weekday || (Weekday = {}));
            NegotiationController = class NegotiationController {
                constructor() {
                    this._negotiations = new index_2.Negotiations();
                    this._negotiationsView = new index_1.NegotiationsView('#negotiations', true);
                    this._messageView = new index_1.MessageView('#message', true);
                    this._inputDate = $('#date');
                    this._inputQuantity = $('#quantity');
                    this._inputValue = $('#value');
                }
                add(e) {
                    e.preventDefault();
                    let date = new Date(this._inputDate.val().toString().replace(/-/g, ','));
                    if (date.getDay() == Weekday.SUNDAY || date.getDay() == Weekday.SATURDAY) {
                        this._messageView.update('Negotiations on weekdays only');
                        return;
                    }
                    const negotiation = new index_2.Negotiation(date, parseInt(this._inputQuantity.val().toString()), parseFloat(this._inputValue.val().toString()));
                    this._negotiations.add(negotiation);
                    this._negotiationsView.update(this._negotiations);
                    this._messageView.update('Negotiation added successfully!');
                }
            };
            exports_1("NegotiationController", NegotiationController);
        }
    };
});
