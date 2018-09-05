import React from 'react';
import "react-bootstrap-toggle/dist/bootstrap2-toggle.css";
import "../css/efecto.css";
import Toggle from 'react-bootstrap-toggle/dist/react-bootstrap2-toggle';
import logo from '../../logo.svg';
import $ from 'jquery';

export default class Efecto extends React.Component{
    constructor() {
        super();
        this.state = { toggleActive: false };
        this.onToggle = this.onToggle.bind(this);
      }
     
      onToggle() {
        this.setState({ toggleActive: !this.state.toggleActive });
        if(!this.state.toggleActive)
        {
          $("#logoLab0").removeClass('App-logo-off');
          $("#logoLab0").addClass('App-logo-on');
        }
        else
        {
          $("#logoLab0").removeClass('App-logo-on');
          $("#logoLab0").addClass('App-logo-off');
        }
      }
      handleChangeTamanoLetra(event) {
        var node = $("#parrafoACambiar");
        node.css( {"font-size": $("#tamanoLetra").val() + 'em'});
      }

      handleCambiarAlineacion(event) {
        var node = $("#parrafoAlinear");
        var rnd = Math.floor(Math.random() * (4 - 1)) + 1;
        if(rnd ===1)
        {node.css( {"text-align": "left"});}
        else if(rnd ===2)
        {node.css( {"text-align": "right"});}
        else
        {node.css( {"text-align": "center"});}
      }

      
      handleCambiarColorTexto(event) {
        var node = $("#parrafoColorTexto");
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        node.css( {"color": color});
      }
    
      handleClickCambiarDeColor(event) {
        var node = $("#cambiarColorFondo");
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        node.css( {"background-color": color});
      }
      render() {
        return (
          <section>
            <article>
              <div className="row">
                <div className="col col-lg-3">
                  1. Rotar la imagen
                </div>
                <div className="col col-lg-3">
                <Toggle
                  onClick={this.onToggle}
                  on= "On"
                  off="Off"
                  offstyle="danger"
                  active={this.state.toggleActive}  
                />
                </div>
                <div className="col col-lg-6">
                  <img src={logo} id="logoLab0" className="App-logo-off" alt="logo" />
                </div>
              </div>
              <div className="row">
                <div className="col col-lg-3">
                  2. aumentar o disminuir letra
                </div>
                <div className="col col-lg-3">
                
                <input type="number" id="tamanoLetra" className="form-control" name="tamanoLetra" placeholder="Cambiar la fuente a 0.1 em"  step="0.1" onChange={this.handleChangeTamanoLetra}  />
                </div>
                <div className="col col-lg-6">
                  <div id="parrafoACambiar">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col col-lg-3">
                  3. Cambiar de color de fondo aleatorio
                </div>
                <div className="col col-lg-3">
                  <button type="button" className="btn btn-default" onClick={this.handleClickCambiarDeColor} >Cambiar de color</button>
                </div>
                <div className="col col-lg-6">
                  <div id="cambiarColorFondo">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col col-lg-3">
                  4. Cambiar de alineación del texto
                </div>
                <div className="col col-lg-3">
                  <button type="button" className="btn btn-default" onClick={this.handleCambiarAlineacion} >Cambiar alineacion</button>
                </div>
                <div className="col col-lg-6">
                  <div id="parrafoAlinear">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col col-lg-3">
                  5. Cambiar de color del texto
                </div>
                <div className="col col-lg-3">
                  <button type="button" className="btn btn-default" onClick={this.handleCambiarColorTexto} >Cambiar color Texto</button>
                </div>
                <div className="col col-lg-6">
                  <div id="parrafoColorTexto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                </div>
              </div>
             </article>
          </section>
        )
      }    
}