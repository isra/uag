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
            info.appendChild(document.createTextNode('Tramites de Alumno'));
            contenedor.appendChild(info);
            nuevoTramite();
            break;
    default:
            break;
  }   
}

function nuevoTramite()
{
  document.getElementById('divTramitesIniciados').innerHTML='';
  limpiarArea('tareas');
  limpiarArea('avisos');
  var contenedor=document.getElementById('tareas');
  var fs= document.createElement('fieldSet');
  fs.id='fsPersonal';
  var lg= document.createElement('legend');
  lg.appendChild(document.createTextNode('Buscar los tramites iniciados de algun alumno'));
  fs.appendChild(lg);
  var btnAgregar=document.createElement('input');
  btnAgregar.type='button';
  btnAgregar.value='Mostrar Informacion';
  btnAgregar.id='btnAgregar';
  addEvent(btnAgregar,'click',MostrarRegistroAlumno,false);
  
  var tb = document.createElement('table');
  tb.name='tbPersonal';
  tb.align='center';
  tb.border='0';
  tb.cellSpacing='1';
  tb.cellPadding='5';
  tb.id='tbPersonal';
  
  var tbody=document.createElement('tbody');
  var tr;
  var td;
  var txt;
  
  tr=document.createElement('tr');
  td=document.createElement('th');
  td.colSpan='2';
  td.align='right';
  
  td.appendChild(document.createTextNode('Matricula de Alumno:'));            
  txt=document.createElement('input');
  txt.type='text';
  txt.id='txtMatricula';
  txt.name='txtMatricula';
  txt.maxLength='18';
  txt.size='20';
  
  td.appendChild(txt);            
  td.appendChild(btnAgregar);            
  tr.appendChild(td);
  tbody.appendChild(tr);
  
  tr=document.createElement('tr');
  td=document.createElement('th');
  td.appendChild(document.createTextNode('Buscar por Nombre:'));
  tr.appendChild(td);
  
  txt=document.createElement('input');
  txt.type='text';
  txt.id='txtNombres';
  txt.name='txtNombres';
  txt.maxLength='30';
  txt.size='35';
  addEvent(txt,'keyup',mostrarDatos,false);
  td.appendChild(txt);            
  
  
  td=document.createElement('th');
  //td.colSpan='2';
  td.appendChild(document.createTextNode('Buscar por Apellidos:'));
  tr.appendChild(td);
  txt=document.createElement('input');
  txt.type='text';
  txt.id='txtApellidos';
  txt.name='txtApellidos';
  txt.maxLength='35';
  txt.size='40';
  addEvent(txt,'keyup',mostrarDatos,false);
  td.appendChild(txt);            
  tbody.appendChild(tr);
  
  tr=document.createElement('tr');
  td=document.createElement('td');
  td.colSpan='2';
  //td.align='right';
  txt=document.createElement('span');
  txt.id='spanListadoAlumnos';
  td.appendChild(txt);            
  tr.appendChild(td);
  tbody.appendChild(tr);
  
  tb.appendChild(tbody);
  fs.appendChild(tb);
  contenedor.appendChild(fs);    
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


function mostrarDatos(e)
{
  document.getElementById('divTramitesIniciados').innerHTML='';
  var dato;
  var obj;
  if(window.event)
    obj=window.event.srcElement;
  else
    obj=e.target;
 
  dato=obj.value;
  
  if(dato.charAt(0)==' ' || dato.length==0 || dato.indexOf("'") != -1)
  {
    document.getElementById('spanListadoAlumnos').innerHTML='';
    document.getElementById('spanListadoAlumnos').style.display='none';
    
    return;
  }
  if (dato.charAt(dato.length-1)== ' ')
    return;
  
  obj=obj.getAttribute('id');
  
  xmlHttp=getXmlHttpObject();
  if(xmlHttp==null)
  {
    alert('no hay soporte para HTTPResquest');
    return;
  }
  var url='../cliente/alumno.php';
  //xmlHttp.onreadystatechange=stateChanged;
  xmlHttp.onreadystatechange=function()
  {
    
    document.getElementById('spanListadoAlumnos').style.display='block';
    if(xmlHttp.readyState==4 || xmlHttp.readyState=='complete')
    {
      document.getElementById('spanListadoAlumnos').innerHTML=xmlHttp.responseText;
    }
    else
      document.getElementById('spanListadoAlumnos').innerHTML='<label style="color:#f00;"><em>Buscando Alumnos...</em></label>';
    
  }
  
  xmlHttp.open('POST',url,true);
  xmlHttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
  
  if(obj=='txtNombres')
    xmlHttp.send('opcion=1&nombres=' + dato);
  else
    xmlHttp.send('opcion=1&apellidos=' + dato);
  
}

function MostrarRegistroAlumno()
{
  document.getElementById('divTramitesIniciados').innerHTML='';
  document.getElementById('avisos').innerHTML='';
  document.getElementById('avisos').style.display='none';
  
  var matricula=document.getElementById('txtMatricula').value;
  
  if(matricula.charAt(0)==' ' || matricula.length==0 || matricula.indexOf("'") != -1 || matricula.indexOf(" ") != -1)
  {
    document.getElementById('spanListadoAlumnos').innerHTML='';
    document.getElementById('spanListadoAlumnos').style.display='none';
    return;
  }
  
  var url='../cliente/documento.php?opcion=9&idAlumno='+matricula+'&sid='+Math.random();
  xmlHttp=getXmlHttpObject();
  if(xmlHttp==null)
  {
    alert("No existe soporte para Ajax");
    return;
  }
  xmlHttp.onreadystatechange=function()
  {
    document.getElementById('spanListadoAlumnos').style.display='block';
    if(xmlHttp.readyState==4 || xmlHttp.readyState=='complete')
    {
      document.getElementById('spanListadoAlumnos').innerHTML=xmlHttp.responseText;

    }
    else
      document.getElementById('spanListadoAlumnos').innerHTML='<label style="color:#f00"><em>Buscando informacion...</em></label>';
  }
  
  xmlHttp.open('GET',url,true);
  xmlHttp.send(null);
  
}

function tramitesAlumno(folio,strTramite)
{
  
  //alert(folio + " - " + strTramite);
  var url='../cliente/documento.php';
  xmlHttp=getXmlHttpObject();
  if(xmlHttp==null){ alert('no exite soporte para ajax'); return; }
  xmlHttp.onreadystatechange=function()
  {
    if(xmlHttp.readyState==4 || xmlHttp.readyState=='complete')
      document.getElementById('divTramitesIniciados').innerHTML=xmlHttp.responseText;
    else
      document.getElementById('divTramitesIniciados').innerHTML='<em><label style="color:#f00">Buscando tramite ' + folio +  ', en el sistema...</em>';
  }
  xmlHttp.open('POST',url,true);
  xmlHttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
  xmlHttp.send('opcion=8'+'&folio='+folio+'&descripcionTramite='+strTramite);
  
}