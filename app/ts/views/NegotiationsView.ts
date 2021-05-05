class NegotiationsView {
  private _element: Element;

  constructor(selector: string) {
    this._element = document.querySelector(selector);
  }
  update(negotiations: Negotiations): void {
    this._element.innerHTML = this.template(negotiations);
  }

  template(negotiations: Negotiations): string {
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
        <td>${n.date.getDate()}/ ${
          n.date.getMonth() + 1
        } / ${n.date.getFullYear()} </td>
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
}
