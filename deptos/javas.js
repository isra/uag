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
            info.appendChild(document.createTextNode('Nuevo de Tramite'));
            contenedor.appendChild(info);
            nuevoTramite();
            break;
    case '1':
            limpia();
            var contenedor= document.getElementById('listaOpciones');
            var info;
            info=document.createElement('div');
            info.align="center";
            info.appendChild(document.createTextNode('RECEPCION DE TRAMITE: Los tramites mostrados a continuacion seran los que aun no finalizan su revision por todos los departamentos. NOTA: se debera revisar en la Seccion de ***REVISIONES ANTERIORES*** si el tramite ya paso por recepcion de este departamento. A excepcion de que el tramite tenga que pasar por alguna segunda revision por parte del Departamento se debera hacer una segunda Revision.'));
            contenedor.appendChild(info);
            recibirTramite();
            break;
    case '2':
            limpia();
            var contenedor= document.getElementById('listaOpciones');
            var info;
            info=document.createElement('div');
            info.align="center";
            info.appendChild(document.createTextNode('TRAMITES PENDIENTES: Los tramites mostrados a continuacion seran los que ya tuvieron Recepcion por algun personal de este Departamento.'));
            contenedor.appendChild(info);
            entregarTramite();
            break;
    case '3':
            limpia();
            var contenedor= document.getElementById('listaOpciones');
            var info;
            info=document.createElement('div');
            info.align="center";
            info.appendChild(document.createTextNode('TRAMITES FINALIZADOS: Estos son los tramites los cuales ya fueron Recibidos (* recepcion tramites *) y Entregados (* tramites pendientes *) en este Departamento.'));
            contenedor.appendChild(info);
            tramiteFinalizados();
            break;
    case '4':
            limpia();
            var contenedor= document.getElementById('listaOpciones');
            var info;
            info=document.createElement('div');
            info.align="center";
            info.appendChild(document.createTextNode('Responsabilidades Departamento: Lista de responsabilidades o actividades que debe cumplir el personal.'));
            contenedor.appendChild(info);
            listarResponsabilidades();
            break;
     case '5':
            limpia();
            var contenedor= document.getElementById('listaOpciones');
            var info;
            info=document.createElement('div');
            info.align="center";
            info.appendChild(document.createTextNode('Modificar Informacion de Tramite.'));
            contenedor.appendChild(info);
            modNuevoTramite();
            break;
    default:
            break;
  }   
}

function nuevoTramite()
{
  limpiarArea('tareas');
  limpiarArea('avisos');
  var contenedor=document.getElementById('tareas');
  var fs= document.createElement('fieldSet');
  fs.id='fsPersonal';
  var lg= document.createElement('legend');
  lg.appendChild(document.createTextNode('Tramite'));
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
  document.getElementById('avisos').innerHTML='';
  document.getElementById('avisos').style.display='none';
  
  var matricula=document.getElementById('txtMatricula').value;
  
  if(matricula.charAt(0)==' ' || matricula.length==0 || matricula.indexOf("'") != -1 || matricula.indexOf(" ") != -1)
  {
    document.getElementById('spanListadoAlumnos').innerHTML='';
    document.getElementById('spanListadoAlumnos').style.display='none';
    return;
  }
  
  var url='../cliente/alumno.php?opcion=5&matricula='+matricula+'&sid='+Math.random();
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
      mostrarTramites();
    }
    else
      document.getElementById('spanListadoAlumnos').innerHTML='<label style="color:#f00"><em>Buscando informacion...</em></label>';
  }
  
  xmlHttp.open('GET',url,true);
  xmlHttp.send(null);
  
}

//MtxtMatricula.value,txtFolioTramite.value,txtFolioCertificado.value,txtFolioRegistro.value,txtTramita.value,txtFechaInicio.value
function btnGuardarTramite()
{
  var matricula,folio,certificado,registro,tramita,fInicio;
  
  matricula=document.getElementById('MtxtMatricula').value;
  folio=document.getElementById('txtFolioTramite').value;
  certificado=document.getElementById('txtFolioCertificado').value;
  registro=document.getElementById('txtFolioRegistro').value;
  tramita=document.getElementById('txtTramita').value;
  fInicio=document.getElementById('txtFechaInicio').value;
  
  
  //slListaPersonal
  var idTramite;
  idTramite=document.getElementById('slListaPersonal').options[document.getElementById('slListaPersonal').selectedIndex].value;
  if(idTramite==0) return;
  
  if (folio.charAt(0)==' ' || folio=='' || certificado.charAt(0)==' ' || certificado=='' || registro.charAt(0)==' ' || registro=='' || tramita.charAt(0)==' ' || tramita=='')
  {
    document.getElementById('avisos').innerHTML='no se permiten valores nulos.';
    document.getElementById('avisos').style.display='block';
    return;
  } 
  
  if (folio<0 || certificado<0 || registro<0)
  {
    document.getElementById('avisos').innerHTML='Folio - Folio Certificado - Folio Registro: SOLO VALORES NUMERICOS.';
    document.getElementById('avisos').style.display='block';
    return;
  }  

  if (folio.indexOf("'") != -1 || certificado.indexOf("'") != -1 || registro.indexOf("'") != -1 || tramita.indexOf("'") != -1)
  {
    document.getElementById('avisos').innerHTML='Error. Valores de Registro no son validos.';
    document.getElementById('avisos').style.display='block';
    return;
  }
  
  document.getElementById('btnGuardarTramite').setAttribute('disabled','false');
  document.getElementById('txtFolioTramite').setAttribute('disabled','false');
  document.getElementById('txtFolioCertificado').setAttribute('disabled','false');
  document.getElementById('txtFolioRegistro').setAttribute('disabled','false');
  document.getElementById('txtTramita').setAttribute('disabled','false');
  document.getElementById('txtFechaInicio').setAttribute('disabled','false');
  document.getElementById('slListaPersonal').setAttribute('disabled','false');
  
  
  xmlHttp=getXmlHttpObject();
  if(xmlHttp==null)
  {
    alert('tu navegador no soporta ajax');
    return;
  }
  var url='../cliente/documento.php';
  xmlHttp.onreadystatechange=stateChanged;
  xmlHttp.open('POST',url,true);
  xmlHttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
  xmlHttp.send('opcion=0&folio='+folio+'&idTramite='+idTramite+'&idAlumno='+matricula+'&fCertificado='+certificado+'&fRegistro='+registro+'&tramita='+tramita+'&fInicio='+fInicio);
  
}

function mostrarTramites()
{
  var url='../cliente/tramite.php?opcion=2&opc=0&sid='+Math.random();
  xmlHttp=getXmlHttpObject();
  if(xmlHttp==null)
  {
    alert('no exite soporte para ajax');
    return;
  }
  xmlHttp.onreadystatechange=function(){
    if(xmlHttp.readyState==4 || xmlHttp.readyState=='complete')
    {
      try{ document.getElementById('listaTramites').innerHTML=xmlHttp.responseText; } catch(e) { }
    }  
    else
    {
      try{ document.getElementById('listaTramites').innerHTML='<em><label style="color:#f00">Buscando Tramites en el sistema...</em>'; } catch(e) { }
    }  
  }
  xmlHttp.open('GET',url,true);
  xmlHttp.send(null);
  
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

/*modifcar informacion de tramite*/
function modNuevoTramite()
{
  
  limpiarArea('tareas');
  limpiarArea('avisos');
  var contenedor=document.getElementById('tareas');
  var fs= document.createElement('fieldSet');
  fs.id='fsPersonal';
  var lg= document.createElement('legend');
  lg.appendChild(document.createTextNode('Buscar los tramites iniciados para modificar informacion'));
  fs.appendChild(lg);
  var btnAgregar=document.createElement('input');
  btnAgregar.type='button';
  btnAgregar.value='Mostrar Informacion';
  btnAgregar.id='btnAgregar';
  addEvent(btnAgregar,'click',ModMostrarRegistroAlumno,false);
  
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
  
  var div = document.createElement('div');
  div.id="modInformacionTramite";
  div.align="center";
  contenedor.appendChild(div);
}

function ModMostrarRegistroAlumno()
{
  document.getElementById('modInformacionTramite').innerHTML='';  
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
  document.getElementById('avisos').innerHTML='';
  document.getElementById('avisos').style.display='none';
    
  //alert(folio + " - " + strTramite);
  var url='../cliente/documento.php';
  xmlHttp=getXmlHttpObject();
  if(xmlHttp==null){ alert('no exite soporte para ajax'); return; }
  xmlHttp.onreadystatechange=function()
  {
    if(xmlHttp.readyState==4 || xmlHttp.readyState=='complete')
      document.getElementById('modInformacionTramite').innerHTML=xmlHttp.responseText;
    else
      document.getElementById('modInformacionTramite').innerHTML='<em><label style="color:#f00">Buscando tramite ' + folio +  ', en el sistema...</em>';
  }
  xmlHttp.open('POST',url,true);
  xmlHttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
  xmlHttp.send('opcion=10'+'&folio='+folio+'&descripcionTramite='+strTramite);
  
}

function modInfoTramite(folio)
{
  
  var fC=document.getElementById('ModtxtFCertificado').value;
  var fR=document.getElementById('ModtxtFRegistro').value;
  var fT=document.getElementById('ModtxtTramita').value;
  var fI=document.getElementById('ModtxtFechaInicio').value;
  var fF=document.getElementById('ModtxtFechaFin').value;
  document.getElementById('btnModInfoTramite').setAttribute('disabled','false');
  document.getElementById('ModtxtFCertificado').setAttribute('disabled','false');
  document.getElementById('ModtxtFRegistro').setAttribute('disabled','false');
  document.getElementById('ModtxtTramita').setAttribute('disabled','false');
  document.getElementById('ModtxtFechaInicio').setAttribute('disabled','false');
  document.getElementById('ModtxtFechaFin').setAttribute('disabled','false');
  
  /*
  alert(fC);
  alert(fR);
  alert(fT);
  alert(fI);
  alert(fF);
  */
  
  if (fC<0 || fR<0)
  {
    document.getElementById('avisos').innerHTML='Folio - Folio Certificado - Folio Registro: SOLO VALORES NUMERICOS.';
    document.getElementById('avisos').style.display='block';
    return;
  }  

  if (fC.indexOf("'") != -1 || fR.indexOf("'") != -1 || fT.indexOf("'") != -1)
  {
    document.getElementById('avisos').innerHTML='Error. Valores de Registro no son validos.';
    document.getElementById('avisos').style.display='block';
    return;
  }
  
  if (fF.charAt(" ") < 0 || fF =="")
  {
    fF='NULL';
  }
  
  /*
  $folio = $_POST['folio'];
  $fCertificado = $_POST['fCertificado'];
  $fRegistro = $_POST['fRegistro'];
  $tramita = $_POST['tramita'];
  $fInicio = $_POST['fInicio'];
  $fFin = $_POST['fFin'];
  */
  
  var url='../cliente/documento.php';
  xmlHttp=getXmlHttpObject();
  if(xmlHttp==null){ alert('no exite soporte para ajax'); return; }
  xmlHttp.onreadystatechange=function()
  {
    document.getElementById('avisos').style.display='block';
    if(xmlHttp.readyState==4 || xmlHttp.readyState=='complete')
      document.getElementById('avisos').innerHTML=xmlHttp.responseText;
    else
      document.getElementById('avisos').innerHTML='<em><label style="color:#f00">Buscando tramite ' + folio +  ', en el sistema...</em>';
  }
  xmlHttp.open('POST',url,true);
  xmlHttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
  xmlHttp.send('opcion=11'+'&folio='+folio+'&fCertificado='+fC+'&fRegistro='+fR+'&tramita='+fT+'&fInicio='+fI+'&fFin='+fF); 
  
}