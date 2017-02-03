// ##### Table Component ##### //

import React from 'react'

class TableComp extends React.Component {
  render() {
    return (
      <table className="c-table">
        <thead>
          <tr>
            <th scope="col">Quantity</th>
            <th scope="col">Apples</th>
            <th scope="col">Oranges</th>
            <th scope="col">Pears</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">One</th>
            <td>Odio</td>
            <td>Lorem</td>
            <td>Optio</td>
          </tr>
          <tr>
            <th scope="row">Two</th>
            <td>Iusto</td>
            <td>Architecto</td>
            <td>Lorem</td>
          </tr>
          <tr>
            <th scope="row">Three</th>
            <td>Lorem</td>
            <td>Assumenda</td>
            <td>Quos</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

module.exports = TableComp;