import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <>
        <div class="container header">
          <h1 class="logo">Gizmo</h1>
          <form>
            <input type="text" placeholder="Search"></input>
            <select>
              <option>EN</option>
              <option>AR</option>
              <option>DE</option>
              <option>ES</option>
              <option>FR</option>
              <option>HE</option>
              <option>IT</option>
              <option>NL</option>
              <option>NO</option>
              <option>PT</option>
              <option>RU</option>
              <option>SE</option>
              <option>UD</option>
              <option>ZH</option>
            </select>
          </form>
        </div>
      </>
    );
  }
}
