//se puede apreciar por consola el comportamiento
var resultado = "0";
var h = 0;
var Calculadora={
                  init:function()
                  {
                    var idList=['on','sign','raiz','dividido','7','8','9','por','4','5','6','menos','1','2','3','0','punto','igual','mas'];
                    for (var h = 0; h < idList.length; h++)
                    {
                      document.getElementById(idList[h]).onclick = this.eventMin.bind(this);
                      document.getElementById(idList[h]).onmouseout = this.eventMax.bind(this);
                    }

                  },
                  eventMin:function(e)
                  {
                    //console.log(e.target.alt);
                    e.target.style="transform:scale(0.95,0.95)";
                    this.add(e.target.id);
                  }
                  ,
                  eventMax:function(e)
                  {
                    //console.log(e.target.alt);
                    e.target.style="transform:scale(1,1)";
                  },
                  add:function(valor)
                  {
                    var pantalla = document.getElementById("display");
                    if( ((pantalla.innerHTML == "0")||(pantalla.innerHTML == "")) && (valor=="0") )
                    {
                      if(pantalla.innerHTML == "")
                      {
                        pantalla.innerHTML= "0";
                        resultado+="0"
                      }
                    }
                    else if( ((pantalla.innerHTML == "0")||(pantalla.innerHTML == "")) && (valor!="0") )
                    {
                      switch (valor)
                      {
                        case "on":
                          h=0;
                          resultado="0";
                          pantalla.innerHTML="0";
                          break;
                        case "sign":
                          break;
                        case "igual":
                          if(!((resultado[resultado.length-1]=="+")||(resultado[resultado.length-1]=="-")||(resultado[resultado.length-1]=="*")||(resultado[resultado.length-1]=="/")))
                          {
                            resultado = ( (resultado.substring(h+1,h+6)=="((-1)") ? ( ( (resultado[resultado.length-1]!=")") ? (resultado+")") : (resultado) ) ) : (resultado) );
                            console.log("Operacion Final: "+resultado);
                            resultado = eval(resultado);
                            pantalla.innerHTML=( ((resultado.toString())[0]=="-") ? (resultado.toString()).substr(0,9) : (resultado.toString()).substr(0,8) );
                            console.log("_________________________________________");
                            console.log("Resultado real: "+resultado);
                            console.log("Lo que se muestra en pantalla: "+pantalla.innerHTML);
                            console.log("_________________________________________");
                            resultado=pantalla.innerHTML;
                            h=0;
                          }
                          break;
                        case "raiz":
                          break;
                          case "dividido":
                              resultado=( ((resultado[resultado.length-1]=="/")||(resultado[resultado.length-1]=="-")||(resultado[resultado.length-1]=="+")) ? (resultado.substring(0,resultado.length-1)+"/") : ( ((resultado[resultado.length-1])=="*") ? ( (resultado.substring(resultado.length-6,resultado.length)=="((-1)*") ? (resultado) : (resultado.substring(0,resultado.length-1)+"/") ) : ("("+resultado+( ( (resultado.substring(h+1,h+6)=="((-1)") ? ( ( (resultado[resultado.length-1]!=")") ? (")") : ("") ) ) : ("") ) )+")/") )  );
                              h =( (resultado.substring(resultado.length-6,resultado.length)=="((-1)*") ? (h) : (resultado.length-1) );
                              pantalla.innerHTML=( (resultado.substring(resultado.length-6,resultado.length)=="((-1)*") ? (pantalla.innerHTML) : ("") );
                              break;
                          case "por":
                              resultado=( ((resultado[resultado.length-1]=="/")||(resultado[resultado.length-1]=="-")||(resultado[resultado.length-1]=="+")) ? (resultado.substring(0,resultado.length-1)+"*") : ( ((resultado[resultado.length-1])=="*") ? ( (resultado.substring(resultado.length-6,resultado.length)=="((-1)*") ? (resultado) : (resultado.substring(0,resultado.length-1)+"*") ) : ("("+resultado+( (resultado.substring(h+1,h+6)=="((-1)") ? ( ( (resultado[resultado.length-1]!=")") ? (")") : ("") ) ) : ("") )+")*") ) );
                              h =( (resultado.substring(resultado.length-6,resultado.length)=="((-1)*") ? (h) : (resultado.length-1) );
                              pantalla.innerHTML=( (resultado.substring(resultado.length-6,resultado.length)=="((-1)*") ? (pantalla.innerHTML) : ("") );
                              break;
                          case "mas":
                              resultado=( ((resultado[resultado.length-1]=="/")||(resultado[resultado.length-1]=="-")||(resultado[resultado.length-1]=="+")) ? (resultado.substring(0,resultado.length-1)+"+") :  ( ((resultado[resultado.length-1])=="*") ? ( (resultado.substring(resultado.length-6,resultado.length)=="((-1)*") ? (resultado) : (resultado.substring(0,resultado.length-1)+"+") ) : ("("+resultado+( (resultado.substring(h+1,h+6)=="((-1)") ? ( ( (resultado[resultado.length-1]!=")") ? (")") : ("") ) ) : ("") )+")+") ) );
                              h =( (resultado.substring(resultado.length-6,resultado.length)=="((-1)*") ? (h) : (resultado.length-1) );
                              pantalla.innerHTML=( (resultado.substring(resultado.length-6,resultado.length)=="((-1)*") ? (pantalla.innerHTML) : ("") );
                              break;
                        case "menos":
                          resultado=((resultado[resultado.length-1]=="+") ? (resultado.substring(0,resultado.length-1)+"-") : ( ((resultado[resultado.length-1]=="/")||(resultado[resultado.length-1]=="-")) ? (resultado+"((-1)*") : ( (resultado[resultado.length-1]=="*") ? ( (resultado.substring(resultado.length-6,resultado.length)=="((-1)*") ? (resultado.substring(0,h+1)) : (resultado+"((-1)*") ) : ("("+resultado+")-") )  ) );
                          h = ((resultado[resultado.length-1]=="*") ? (resultado.length-7) : (resultado.length-1) );
                          pantalla.innerHTML=((resultado[resultado.length-1]=="-") ? ("") : ("-"));
                          break;
                        case "punto":
                          resultado+=( (resultado!="0") ? ("0.") : (".") );
                          pantalla.innerHTML+=".";
                          break;
                        default:
                          resultado=( (resultado!="0") ? (resultado+valor) : (valor) );
                          pantalla.innerHTML=valor;
                      }
                    }
                    else
                    {
                        switch (valor)
                        {
                          case "on":
                              h=0;
                              resultado="0";
                              pantalla.innerHTML="0";
                              break;
                          case "sign":
                              resultado = ( (h==0) ? ( (resultado.substring(0,5)!="((-1)") ? ("((-1)*"+resultado+")") : (resultado.substring(6,resultado.length-1)) ) : ( (resultado.substring(h+1,h+6)!="((-1)") ? (resultado.substr(0,h+1)+"((-1)*"+resultado.substr(h+1,resultado.length)+")") : (resultado.substr(0,h+1)+( (resultado[resultado.length-1]==")") ? (resultado.substring(h+7,resultado.length-1)) : (resultado.substring(h+7,resultado.length)) )) ) );
                              pantalla.innerHTML= ( (pantalla.innerHTML[0]!="-") ? ("-"+pantalla.innerHTML) : (pantalla.innerHTML.substr(1,pantalla.innerHTML.length-1)) );
                              break;
                          case "igual":
                              if(!((resultado[resultado.length-1]=="+")||(resultado[resultado.length-1]=="-")||(resultado[resultado.length-1]=="*")||(resultado[resultado.length-1]=="/")))
                              {
                                resultado = ( (resultado.substring(h+1,h+6)=="((-1)") ? ( ( (resultado[resultado.length-1]!=")") ? (resultado+")") : (resultado) ) ) : (resultado) );
                                console.log("Operacion Final: "+resultado);
                                resultado = eval(resultado);
                                pantalla.innerHTML=( ((resultado.toString())[0]=="-") ? (resultado.toString()).substr(0,9) : (resultado.toString()).substr(0,8) );
                                console.log("_________________________________________");
                                console.log("Resultado real: "+resultado);
                                console.log("Lo que se muestra en pantalla: "+pantalla.innerHTML);
                                console.log("_________________________________________");
                                resultado=pantalla.innerHTML;
                                h=0;
                              }
                              break;
                          case "raiz":
                              break;
                          case "dividido":
                              resultado=( ((resultado[resultado.length-1]=="/")||(resultado[resultado.length-1]=="-")||(resultado[resultado.length-1]=="+")) ? (resultado.substring(0,resultado.length-1)+"/") : ( ((resultado[resultado.length-1])=="*") ? ( (resultado.substring(resultado.length-6,resultado.length)=="((-1)*") ? (resultado) : (resultado.substring(0,resultado.length-1)+"/") ) : ("("+resultado+( ( (resultado.substring(h+1,h+6)=="((-1)") ? ( ( (resultado[resultado.length-1]!=")") ? (")") : ("") ) ) : ("") ) )+")/") )  );
                              h =( (resultado.substring(resultado.length-6,resultado.length)=="((-1)*") ? (h) : (resultado.length-1) );
                              pantalla.innerHTML=( (resultado.substring(resultado.length-6,resultado.length)=="((-1)*") ? (pantalla.innerHTML) : ("") );
                              break;
                          case "por":
                              resultado=( ((resultado[resultado.length-1]=="/")||(resultado[resultado.length-1]=="-")||(resultado[resultado.length-1]=="+")) ? (resultado.substring(0,resultado.length-1)+"*") : ( ((resultado[resultado.length-1])=="*") ? ( (resultado.substring(resultado.length-6,resultado.length)=="((-1)*") ? (resultado) : (resultado.substring(0,resultado.length-1)+"*") ) : ("("+resultado+( (resultado.substring(h+1,h+6)=="((-1)") ? ( ( (resultado[resultado.length-1]!=")") ? (")") : ("") ) ) : ("") )+")*") ) );
                              h =( (resultado.substring(resultado.length-6,resultado.length)=="((-1)*") ? (h) : (resultado.length-1) );
                              pantalla.innerHTML=( (resultado.substring(resultado.length-6,resultado.length)=="((-1)*") ? (pantalla.innerHTML) : ("") );
                              break;
                          case "mas":
                              resultado=( ((resultado[resultado.length-1]=="/")||(resultado[resultado.length-1]=="-")||(resultado[resultado.length-1]=="+")) ? (resultado.substring(0,resultado.length-1)+"+") :  ( ((resultado[resultado.length-1])=="*") ? ( (resultado.substring(resultado.length-6,resultado.length)=="((-1)*") ? (resultado) : (resultado.substring(0,resultado.length-1)+"+") ) : ("("+resultado+( (resultado.substring(h+1,h+6)=="((-1)") ? ( ( (resultado[resultado.length-1]!=")") ? (")") : ("") ) ) : ("") )+")+") ) );
                              h =( (resultado.substring(resultado.length-6,resultado.length)=="((-1)*") ? (h) : (resultado.length-1) );
                              pantalla.innerHTML=( (resultado.substring(resultado.length-6,resultado.length)=="((-1)*") ? (pantalla.innerHTML) : ("") );
                              break;
                          case "menos":
                              resultado=((resultado[resultado.length-1]=="+") ? (resultado.substring(0,resultado.length-1)+"-") : ( ((resultado[resultado.length-1]=="/")||(resultado[resultado.length-1]=="-")) ? (resultado+"((-1)*") : ( (resultado[resultado.length-1]=="*") ? ( (resultado.substring(resultado.length-6,resultado.length)=="((-1)*") ? (resultado.substring(0,h+1)) : (resultado+"((-1)*") ) : ("("+resultado+")-") )  ) );
                              h = ((resultado[resultado.length-1]=="*") ? (resultado.length-7) : (resultado.length-1) );
                              pantalla.innerHTML=((resultado[resultado.length-1]=="-") ? ("") : ("-"));
                              break;
                          case "punto":
                              if(pantalla.innerHTML.indexOf(".")==(-1))
                              {
                                pantalla.innerHTML+=".";
                                resultado+=".";
                              }
                              break;
                          default:
                          if(pantalla.innerHTML.length<8)
                          {
                            resultado+=valor;
                            pantalla.innerHTML+=valor;
                          }

                        }
                    }
                    console.log("Construyendo operacion: "+resultado);
                  }
                }
Calculadora.init();
