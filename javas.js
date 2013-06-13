addEvent(window,'load',iniciar,false);
var _indexPersonal=0;
var fondo;
var noFondo;
var xmlHttp;

function iniciar()
{
  var opcion = document.getElementById('opciones').getElementsByTagName('td');
  for(index=0; index < opcion.length; index++)
  {
    addEvent(opcion[index],'mouseover',efecto,false);
    addEvent(opcion[index],'mouseout',noEfecto,false);
    addEvent(opcion[index],'click',listarOpciones,false);
  }
  fondo='#fff';
  noFondo='#ff5566';
}

function efecto(e)
{
  var op;
  if(window.event)
    op=window.event.srcElement;
  else
    op=e.target;
  op.style.backgroundColor=fondo;
  op.style.color='#00f';
  op.style.textDecoration='underline';
  //op.style.fontStyle='oblique';
}

function noEfecto(e)
{
  var op;
  if(window.event)
    op=window.event.srcElement;
  else
    op=e.target;
  op.style.backgroundColor=noFondo;
  op.style.color='#fff';
  op.style.textDecoration='none';
  //op.style.fontStyle='normal';
}

function EfectoOpciones(e)
{
  var op;
  if(window.event)
    op=window.event.srcElement;
  else
    op=e.target;
  op.style.backgroundColor='#336690';
  op.style.color='#ff0';
  op.style.textDecoration='underline';
  //op.style.fontStyle='oblique';
}

function NoEfectoOpciones(e)
{
  var op;
  if(window.event)
    op=window.event.srcElement;
  else
    op=e.target;
  op.style.backgroundColor='#336690';
  op.style.color='#fff';
  op.style.textDecoration='none';
  // op.style.fontStyle='normal';
}

function listarOpciones(e)
{
  var op;
  if(window.event)
    op=window.event.srcElement;
  else
    op=e.target;
  switch(op.getAttribute('id'))
  {
    case '0':
            limpia();
            var contenedor= document.getElementById('listaOpciones');
            var info;
            info=document.createElement('div');
            info.align="center";
            info.appendChild(document.createTextNode('Acceso a personal de los departamentos de UAG.'));
            contenedor.appendChild(info);
            recibirTramite();
            break;
    case '1':
            limpia();
            var contenedor= document.getElementById('listaOpciones');
            var info;
            info=document.createElement('div');
            info.align="center";
            info.appendChild(document.createTextNode('Informacion Sobre el Avance de los Tramites y Certificados de Alumnos de la UAG.'));
            contenedor.appendChild(info);
            alumnos();
            break;
    default:
            break;
  }   
}

function limpia()
{
   limpiarArea('listaOpciones');
   document.getElementById('avisos').style.display='none';
   limpiarArea('avisos');
   limpiarArea('tareas');
   _indexPersonal=0;

}

function limpiarArea(area)
{
  document.getElementById('avisos').style.display='none';
  _indexPersonal=0;
  var a = document.getElementById(area);
  while(a.hasChildNodes())
  {
    a.removeChild(a.lastChild);
  }
}

function addEvent(elemento,evento,funcion,captura)
{
  if(elemento.attachEvent)
  {
    elemento.attachEvent('on'+evento,funcion);
    return true;
  }
  else
    if(elemento.addEventListener)
    {
      elemento.addEventListener(evento,funcion,captura);
      return true;
    }
    else
      return false;
}

function stateChanged()
{
  if(xmlHttp.readyState==4 || xmlHttp.readyState=='complete')
  {
    document.getElementById('avisos').innerHTML=xmlHttp.responseText;
    document.getElementById('avisos').style.display='block';
  }
  else
  {
    document.getElementById('avisos').innerHTML='procesando informacion...';
    document.getElementById('avisos').style.display='block';
  }
}

function getXmlHttpObject()
{
  xmlHttp=null;
  try
  {
    xmlHttp = new XMLHttpRequest();
  }
  catch(e)
  { 
    xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
  }
  return xmlHttp;
}

function recibirTramite()
{

  limpiarArea('tareas');
  limpiarArea('avisos');
  var contenedor=document.getElementById('tareas');
  var fs= document.createElement('fieldSet');
  fs.id='fsPersonal';
  var lg= document.createElement('legend');
  lg.appendChild(document.createTextNode('Personal de la UAG'));
  lg.style.fontWeight='bolder';
  lg.style.color='#369';
  lg.style.fontStyle='oblique';
  fs.appendChild(lg);
  var div = document.createElement('div');
  div.id="personal";
  div.align="center";
  div.innerHTML="<table border='0'><tbody><tr><td>Usuario:</td><td><input type='text' id='usuario' name='usuario' size='18' maxLength='5'></td></tr><tr><td>Password:</td><td><input type='password' id='password' name='password' size='18' maxLength='15'></td></tr></tbody></table>";
  var link=document.createElement('label');
  link.style.cursor='pointer';
  link.style.font='bolder oblique 12px Arial';
  link.style.color='#00f';
  addEvent(link,'click',entrar,false);
  link.appendChild(document.createTextNode('Iniciar Sesion'));
  div.appendChild(link);
  fs.appendChild(div);
  
  contenedor.appendChild(fs);    
}

function entrar()
{
  var usuario=document.getElementById('usuario').value;
  var password=document.getElementById('password').value;

  if(usuario=="" | password==""){ document.getElementById('personal').innerHTML='<label style="color:#f00;"><strong><em>-Ingresar Usuario y Password-</em></strong></label>'; return; }
  if(!(usuario>1)){ document.getElementById('personal').innerHTML='<label style="color:#f00;"><strong><em>-Usuario Incorrecto-</em></strong></label>'; return; }
  if(usuario.indexOf(" ")>=0 | password.indexOf(" ")>=0 | usuario.indexOf("'")>=0 | password.indexOf("'")>=0){ document.getElementById('personal').innerHTML='<label style="color:#f00;"><strong><em>-Entrada de Datos Incorrecta-</em></strong></label>'; return; }  
  var url='./cliente/autenticacion.php';
  
  xmlHttp=getXmlHttpObject();
  if(xmlHttp==null){ return }
  xmlHttp.onreadystatechange=function()
  {
    if(xmlHttp.readyState==4 | xmlHttp.readyState=='complete')
      document.getElementById('personal').innerHTML=xmlHttp.responseText;
    else
      document.getElementById('personal').innerHTML='<label style="color:#f00;"><strong><em>verificando datos...</em></strong></label>';
  }
  xmlHttp.open('POST',url,true);
  xmlHttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
  xmlHttp.send('opcion=2'+'&usuario='+usuario+'&password='+password);
}

function alumnos()
{

  limpiarArea('tareas');
  limpiarArea('avisos');
  var contenedor=document.getElementById('tareas');
  var div= document.createElement('div');
  div.style.textAlign='center';
  var link= document.createElement('a');
  link.setAttribute('href','alumnos/');
  link.appendChild(document.createTextNode('Bienvenido'));
  div.appendChild(link);
  contenedor.appendChild(div);    
}
