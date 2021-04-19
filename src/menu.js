import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './componentes/styles/menu.css';
import Home from './componentes/scripts/home.js';
import {

  BrowserRouter as Router,
  Switch,
  Route,
  Link
  
} 
from "react-router-dom";

export default function funcion() {
    return (
        <Router>
            <div>
                <nav class="site-header sticky-top py-1">
                <div class="container d-flex flex-column flex-md-row justify-content-between">
                <Link class="py-2" to="/" aria-label="Razer">
                <img src="https://hybrismediaprod.blob.core.windows.net/sys-master-phoenix-images-container/h56/h3c/9163652366366/razer-ths-logo.svg" width="80" height="40" class="d-inline-block align-top" alt=""></img>
                </Link>
                <Link to="#" class="py-2 d-none d-md-inline-block" >PC</Link>
                <Link to="#" class="py-2 d-none d-md-inline-block" >Console</Link>
                <Link to="#" class="py-2 d-none d-md-inline-block" >Mobile</Link>
                <Link to="#" class="py-2 d-none d-md-inline-block" >Lifestyle</Link>
                <Link to="#" class="py-2 d-none d-md-inline-block" >Services</Link>
                <Link to="#" class="py-2 d-none d-md-inline-block" >Community</Link>
                <Link to="#" class="py-2 d-none d-md-inline-block" >Support</Link>
                <Link to="#" class="py-2 d-none d-md-inline-block" >                
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vector_search_icon.svg/945px-Vector_search_icon.svg.png" width="30" height="30" class="d-inline-block align-top" alt=""></img>
                </Link>
                <Link to="#" class="py-2 d-none d-md-inline-block" >                
                <img src="https://icons-for-free.com/iconfiles/png/512/add+to+cart+cart+shopping+cart+shopping+cart+icon+icon-1320073116171330767.png" width="30" height="30" class="d-inline-block align-top" alt=""></img>
                </Link>


            </div>
        </nav>
            <Switch>
                <Route exact path="/">
                <h1><Home/></h1>
                </Route>
            </Switch>
        </div>
        </Router>
    )
  }
  