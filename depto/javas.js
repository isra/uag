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
            info.appendChild(document.createTextNode('RECEPCION DE TRAMITE: Los tramites mostrados a continuacion seran los que aun no finalizan su revision por todos los departamentos. NOTA: se debera revisar en la Seccion de ***REVISIONES ANTERIORES*** si el tramite ya paso por recepcion de este departamento. A excepcion de que el tramite tenga que pasar por alguna segunda revision por parte del Departamento se debera hacer una segunda Revision.'));
            contenedor.appendChild(info);
            recibirTramite();
            break;
    case '1':
            limpia();
            var contenedor= document.getElementById('listaOpciones');
            var info;
            info=document.createElement('div');
            info.align="center";
            info.appendChild(document.createTextNode('TRAMITES PENDIENTES: Los tramites mostrados a continuacion seran los que ya tuvieron Recepcion por algun personal de este Departamento.'));
            contenedor.appendChild(info);
            entregarTramite();
            break;
    case '2':
            limpia();
            var contenedor= document.getElementById('listaOpciones');
            var info;
            info=document.createElement('div');
            info.align="center";
            info.appendChild(document.createTextNode('TRAMITES FINALIZADOS: Estos son los tramites los cuales ya fueron Recibidos (* recepcion tramites *) y Entregados (* tramites pendientes *) en este Departamento.'));
            contenedor.appendChild(info);
            tramiteFinalizados();
            break;
    case '3':
            limpia();
            var contenedor= document.getElementById('listaOpciones');
            var info;
            info=document.createElement('div');
            info.align="center";
            info.appendChild(document.createTextNode('Responsabilidades Depto: Lista de responsabilidades o actividades que debe cumplir el personal.'));
            contenedor.appendChild(info);
            listarResponsabilidades();
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
  lg.appendChild(document.createTextNode('Recepcion de Tramite'));
  fs.appendChild(lg);
  var div = document.createElement('div');
  div.id="divTramitesIniciados";
  div.align="center";
  fs.appendChild(div);
  contenedor.appendChild(fs);    

  var url='../cliente/documento.php?opcion=1&sid='+Math.random();
  xmlHttp=getXmlHttpObject();
  if(xmlHttp==null){ alert('no exite soporte para ajax'); return; }
  
  xmlHttp.onreadystatechange=function()
  {
    if(xmlHttp.readyState==4 || xmlHttp.readyState=='complete')
      document.getElementById('divTramitesIniciados').innerHTML=xmlHttp.responseText;
    else
      document.getElementById('divTramitesIniciados').innerHTML='<em><label style="color:#f00">Buscando Tramites en el sistema...</em>';
  }
  xmlHttp.open('GET',url,true);
  xmlHttp.send(null);
  
}

function preRevisarTramite(folio,strTramite)
{
  var idD,nD,idP,nP;
  idD=document.getElementById('configIdDepto').firstChild.nodeValue;
  nD=document.getElementById('configNombreDepto').firstChild.nodeValue;
  idP=document.getElementById('configIdPersonal').firstChild.nodeValue;
  nP=document.getElementById('configNombrePersonal').firstChild.nodeValue;
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
  xmlHttp.send('opcion=2'+'&folio='+folio+'&descripcionTramite='+strTramite+'&idD='+idD+'&nD='+nD+'&idP='+idP+'&nP='+nP);
}


function guardar(folio,depto,entrada,recibio)
{
  
  document.getElementById('tInfoEstado').setAttribute('disabled','false');
  document.getElementById('btnGuardarRevision').setAttribute('disabled','false');
  var estado=document.getElementById('tInfoEstado').value;
  
  var url='../cliente/documento.php';
  xmlHttp=getXmlHttpObject();
  if(xmlHttp==null){ alert('no exite soporte para ajax'); return; }
  xmlHttp.onreadystatechange=function()
  {
    document.getElementById('avisos').style.display="block";
    if(xmlHttp.readyState==4 || xmlHttp.readyState=='complete')
      document.getElementById('avisos').innerHTML=xmlHttp.responseText;
    else
      document.getElementById('avisos').innerHTML='Guardando Revision de Tramite con Folio: ' + folio +  '...';
  }
  xmlHttp.open('POST',url,true);
  xmlHttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
  xmlHttp.send('opcion=3&folio='+folio+'&depto='+depto+'&entrada='+entrada+'&recibio='+recibio+'&estado='+estado);
  
}

/*Entregar Tramites*/
function entregarTramite()
{

  limpiarArea('tareas');
  limpiarArea('avisos');
  var idD=document.getElementById('configIdDepto').firstChild.nodeValue;
  var contenedor=document.getElementById('tareas');
  var fs= document.createElement('fieldSet');
  fs.id='fsPersonal';
  var lg= document.createElement('legend');
  lg.appendChild(document.createTextNode('Tramites Pendientes'));
  fs.appendChild(lg);
  var div = document.createElement('div');
  div.id="divTramitesIniciados";
  div.align="center";
  fs.appendChild(div);
  contenedor.appendChild(fs);    

  var url='../cliente/documento.php?opcion=4&idDepto='+idD+'&sid='+Math.random();
  xmlHttp=getXmlHttpObject();
  if(xmlHttp==null){ alert('no exite soporte para ajax'); return; }
  
  xmlHttp.onreadystatechange=function()
  {
    if(xmlHttp.readyState==4 || xmlHttp.readyState=='complete')
      document.getElementById('divTramitesIniciados').innerHTML=xmlHttp.responseText;
    else
      document.getElementById('divTramitesIniciados').innerHTML='<em><label style="color:#f00">Buscando Tramites Revisados en el sistema...</em>';
  }
  xmlHttp.open('GET',url,true);
  xmlHttp.send(null);
  
}

function preEntregarTramite(folio,strTramite,idInfoTramite)
{
  
  var idD,nD,idP,nP;
  idD=document.getElementById('configIdDepto').firstChild.nodeValue;
  nD=document.getElementById('configNombreDepto').firstChild.nodeValue;
  idP=document.getElementById('configIdPersonal').firstChild.nodeValue;
  nP=document.getElementById('configNombrePersonal').firstChild.nodeValue;
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
  xmlHttp.send('opcion=5'+'&folio='+folio+'&descripcionTramite='+strTramite+'&idD='+idD+'&nD='+nD+'&idP='+idP+'&nP='+nP+'&idInfoTramite='+idInfoTramite);
  
}

function guardarEntrega(folio,depto,entrada,recibio,idInfoTramite)
{
  
  //alert(idInfoTramite);
  
  document.getElementById('tInfoEstado').setAttribute('disabled','false');
  document.getElementById('btnGuardarRevision').setAttribute('disabled','false');
  var estado=document.getElementById('tInfoEstado').value;
  
  var url='../cliente/documento.php';
  xmlHttp=getXmlHttpObject();
  if(xmlHttp==null){ alert('no exite soporte para ajax'); return; }
  xmlHttp.onreadystatechange=function()
  {
    document.getElementById('avisos').style.display="block";
    if(xmlHttp.readyState==4 || xmlHttp.readyState=='complete')
      document.getElementById('avisos').innerHTML=xmlHttp.responseText;
    else
      document.getElementById('avisos').innerHTML='Guardando Revision de Tramite con Folio: ' + folio +  '...';
  }
  xmlHttp.open('POST',url,true);
  xmlHttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
  xmlHttp.send('opcion=6&folio='+folio+'&depto='+depto+'&entrada='+entrada+'&recibio='+recibio+'&estado='+estado+'&idInfoTramite='+idInfoTramite);
}

/*finalizados*/
function tramiteFinalizados()
{

  limpiarArea('tareas');
  limpiarArea('avisos');
  var idD=document.getElementById('configIdDepto').firstChild.nodeValue;
  var contenedor=document.getElementById('tareas');
  var fs= document.createElement('fieldSet');
  fs.id='fsPersonal';
  var lg= document.createElement('legend');
  lg.appendChild(document.createTextNode('Tramites Finalizados'));
  fs.appendChild(lg);
  var div = document.createElement('div');
  div.id="divTramitesIniciados";
  div.align="center";
  fs.appendChild(div);
  contenedor.appendChild(fs);    

  var url='../cliente/documento.php?opcion=7&idDepto='+idD+'&sid='+Math.random();
  xmlHttp=getXmlHttpObject();
  if(xmlHttp==null){ alert('no exite soporte para ajax'); return; }
  
  xmlHttp.onreadystatechange=function()
  {
    if(xmlHttp.readyState==4 || xmlHttp.readyState=='complete')
      document.getElementById('divTramitesIniciados').innerHTML=xmlHttp.responseText;
    else
      document.getElementById('divTramitesIniciados').innerHTML='<em><label style="color:#f00">Buscando Tramites Finalizados en el Sistema...</em>';
  }
  xmlHttp.open('GET',url,true);
  xmlHttp.send(null);
  
}

function tramitesFinalizadosDepto(folio,strTramite)
{
  var idD=document.getElementById('configIdDepto').firstChild.nodeValue;
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
  xmlHttp.send('opcion=8'+'&folio='+folio+'&descripcionTramite='+strTramite+'&idD='+idD);
  
}

function listarResponsabilidades()
{
  limpiarArea('tareas');
  limpiarArea('avisos');
  var idD=document.getElementById('configIdDepto').firstChild.nodeValue;
  var contenedor=document.getElementById('tareas');
  var fs= document.createElement('fieldSet');
  fs.id='fsPersonal';
  var lg= document.createElement('legend');
  lg.appendChild(document.createTextNode('Lista de Responsabilidades'));
  fs.appendChild(lg);
  var div = document.createElement('div');
  div.id="divTramitesIniciados";
  div.align="center";
  fs.appendChild(div);
  contenedor.appendChild(fs);    

  var url='../cliente/departamentos.php?opcion=7&idDepto='+idD+'&op=0&sid='+Math.random();
  xmlHttp=getXmlHttpObject();
  if(xmlHttp==null){ alert('no exite soporte para ajax'); return; }
  
  xmlHttp.onreadystatechange=function()
  {
    if(xmlHttp.readyState==4 || xmlHttp.readyState=='complete')
      document.getElementById('divTramitesIniciados').innerHTML=xmlHttp.responseText;
    else
      document.getElementById('divTramitesIniciados').innerHTML='<em><label style="color:#f00">Buscando Resonsabilidades...</em>';
  }
  xmlHttp.open('GET',url,true);
  xmlHttp.send(null);

}