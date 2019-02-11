import React, { Component } from 'react';
import { BrowserRouter} from "react-router-dom";
import OffCanvas from './components/Navigation/Offcanvas-side'
import Header from './components/Navigation/Head'
import Banner from './components/Banner/Banner'
import Post from './components/BlogPost/Post'
import FooterBase from './components/Footer/Footer-base'



class App extends Component {
  render() {
    return (
      <div>
          <BrowserRouter>
              <div>
                  <div>
                      <Header />
                  </div>
                  <OffCanvas/>
                  <Banner/>
                  <div id="page-start"></div>
                  <section className="main-container">
                      <div className="container">
                          <div className="row">

                              {/*// <!-- main start -->*/}
                              {/*// <!-- ================ -->*/}
                              <div className="main col-12">

                                  {/*// <!-- page-title start -->*/}
                                  {/*// <!-- ================ -->*/}
                                  <h1 className="page-title text-center">Streams</h1>
                                  <div className="separator with-icon"><i className="fa fa-pencil bordered"></i></div>
                                  <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                      minim veniam.</p>
                                  <br/>
                                      <br/>
                                      <Post/>
                              </div>
                          </div>
                      </div>
                  </section>
              </div>
              {/*<Route path="/login" exact component={}/>*/}
              {/*<Route path="/stream" exact component={}/>*/}
          </BrowserRouter>
          <FooterBase/>
      </div>
    );
  }
}

export default App;
