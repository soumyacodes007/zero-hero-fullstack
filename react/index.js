//  lets make a react app for food ordering 
// it will have 
/* header 
    logo 
    nav item 

  body 
    search 
    cards 
    container 
  footer 
  
  */





  import "./index.css"; // ✅ Importing CSS file

  import React from "react";
  import ReactDOM from "react-dom/client"; // ✅ Correct import for React 19
  
  // ✅ Renamed to "Header" for correct naming convention
  const Header = () => {
    return (
      <div className="header">
        <div className="logo">
          {/* ✅ Corrected Image Usage */}
          <img
            src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Logo"
          />
        </div>
        <div className="nav">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contacts</li>
            <li>Cart</li>
            <li>Dhriti</li>
          </ul>
        </div>
      </div>
    );
  };
  
  // ✅ Corrected component name and JSX syntax
  const AppLayout = () => {
    return (
      <div className="app">
        {/* ✅ Corrected JSX Comments */}
        {/* Header */}
        <Header />
        {/* Body */}
      </div>
    );
  };
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<AppLayout />);
  