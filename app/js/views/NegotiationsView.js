System.register(["./index"], function (exports_1, context_1) {
    "use strict";
    var index_1, NegotiationsView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            NegotiationsView = class NegotiationsView extends index_1.View {
                template(negotiations) {
                    return `
      <table class="table table-hover table-bordered">
      <thead>
          <tr>
              <th>DATE</th>
              <th>QUANTITY</th>
              <th>VALUE</th>
              <th>VOLUME</th>
          </tr>
      </thead>
  
      <tbody>
      ${negotiations
                        .list()
                        .map((n) => {
                        return `
          <tr>
          <td>${n.date.getDate()}/ ${n.date.getMonth() + 1} / ${n.date.getFullYear()} </td>
          <td>${n.quantity}</td>
          <td>${n.value}</td>
          <td>${n.volume.toLocaleString()}</td>
          </tr>
        `;
                    })
                        .join('')}
      </tbody>
  
      <tfoot>
      </tfoot>
      </table>               
      `;
                }
            };
            exports_1("NegotiationsView", NegotiationsView);
        }
    };
});
