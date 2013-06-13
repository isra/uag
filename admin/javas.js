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
            var tabla= document.createElement('table');
            var cuerpo= document.createElement('tbody');
            tabla.border='0';
            tabla.align='center';
            tabla.cellPadding='2';
            tabla.cellSpacing='0';
            var pri=document.createElement('tr');
           
            var priTdPri=document.createElement('td');
            priTdPri.id='0';
            var opPri=document.createTextNode('Registrar en el Sistema');
            priTdPri.appendChild(opPri);
            
            var priTdSeg=document.createElement('td');
            priTdSeg.id='1';
            var opSeg=document.createTextNode('Modificar informacion');
            priTdSeg.appendChild(opSeg);
            
            var priTdTer=document.createElement('td');
            priTdTer.id='2';
            var opTer=document.createTextNode('Busqueda');
            priTdTer.appendChild(opTer);
            
            
            pri.appendChild(priTdPri);
            pri.appendChild(priTdSeg);
            pri.appendChild(priTdTer);
            
            var seg=document.createElement('tr');
            
            var segTdPri=document.createElement('td');
            segTdPri.id='3';
            var segOpPri=document.createTextNode('Eliminar Registro');
            segTdPri.appendChild(segOpPri);
            
            var segTdSeg=document.createElement('td');
            segTdSeg.id='4';
            var segOpSeg=document.createTextNode('Listado General');
            segTdSeg.appendChild(segOpSeg);
            
            seg.appendChild(segTdPri);
            seg.appendChild(segTdSeg);
            
            cuerpo.appendChild(pri);
            cuerpo.appendChild(seg);
            tabla.appendChild(cuerpo);
            contenedor.appendChild(tabla);
            
            var opcion = document.getElementById('listaOpciones').getElementsByTagName('td');
            for(index=0; index < opcion.length; index++)
            {     
              addEvent(opcion[index],'mouseover',EfectoOpciones,false);
              addEvent(opcion[index],'mouseout',NoEfectoOpciones,false);
              addEvent(opcion[index],'click',detalles,false);
            }
            break;
    case '1':
            limpia();
            var contenedor= document.getElementById('listaOpciones');
            var tabla= document.createElement('table');
            var cuerpo= document.createElement('tbody');
            tabla.border='0';
            tabla.align='center';
            tabla.cellPadding='2';
            tabla.cellSpacing='0';
            var tr;
            var td;
            var texto;
            
            tr=document.createElement('tr');
            td=document.createElement('th');
            texto=document.createTextNode('DEPARTAMENTOS UAG.');
            td.appendChild(texto);
            tr.appendChild(td);
            cuerpo.appendChild(tr);
            
            td=document.createElement('th');
            texto=document.createTextNode('RESPONSABILIDADES.');
            td.appendChild(texto);
            tr.appendChild(td);
            cuerpo.appendChild(tr);
            
            td=document.createElement('th');
            texto=document.createTextNode('PERSONAL.');
            td.appendChild(texto);
            tr.appendChild(td);
            cuerpo.appendChild(tr);
            
            tr=document.createElement('tr');
            td=document.createElement('td');
            td.id='0';
            texto=document.createTextNode('Crear Nuevo Depto.');
            td.appendChild(texto);
            tr.appendChild(td);
            cuerpo.appendChild(tr);
            
            td=document.createElement('td');
            td.id='4';
            texto=document.createTextNode('Asignar Responsabilidades a Depto.');
            td.appendChild(texto);
            tr.appendChild(td);
            cuerpo.appendChild(tr);
            td=document.createElement('td');
            td.id='7';
            texto=document.createTextNode('Asignar Personal a Depto.');
            td.appendChild(texto);
            tr.appendChild(td);
            cuerpo.appendChild(tr);
            
            tr=document.createElement('tr');
            td=document.createElement('td');
            td.id='1';
            texto=document.createTextNode('Modicar Informacion.');
            td.appendChild(texto);
            tr.appendChild(td);
            cuerpo.appendChild(tr);
            
            td=document.createElement('td');
            td.id='5';
            texto=document.createTextNode('Quitar Responsabilidades de un Depto.');
            td.appendChild(texto);
            tr.appendChild(td);
            cuerpo.appendChild(tr);
            td=document.createElement('td');
            td.id='8';
            texto=document.createTextNode('Quitar Personal de un Depto.');
            td.appendChild(texto);
            tr.appendChild(td);
            cuerpo.appendChild(tr);
            
            tr=document.createElement('tr');
            td=document.createElement('td');
            td.id='2';
            texto=document.createTextNode('Eliminar Depto.');
            td.appendChild(texto);
            tr.appendChild(td);
            cuerpo.appendChild(tr);
            
            td=document.createElement('td');
            td.id='6';
            texto=document.createTextNode('Listar Responsabilidades de un Depto.');
            td.appendChild(texto);
            tr.appendChild(td);
            cuerpo.appendChild(tr);
            td=document.createElement('td');
            td.id='9';
            texto=document.createTextNode('Listar Personal de un Depto.');
            td.appendChild(texto);
            tr.appendChild(td);
            cuerpo.appendChild(tr);
            
            tr=document.createElement('tr');
            td=document.createElement('td');
            //td.colSpan='3';
            td.id='3';
            texto=document.createTextNode('Listado General de Deptos.');
            td.appendChild(texto);
            tr.appendChild(td);
            cuerpo.appendChild(tr);
            
            /*
            tr=document.createElement('tr');
            td=document.createElement('td');
            tr.appendChild(td);
            td=document.createElement('th');
            //td.colSpan='3';
            texto=document.createTextNode('INFORMACION GRAL.');
            td.appendChild(texto);
            tr.appendChild(td);
            td=document.createElement('td');
            tr.appendChild(td);
            cuerpo.appendChild(tr);
            
            tr=document.createElement('tr');
            td=document.createElement('td');
            tr.appendChild(td);
            td=document.createElement('td');
            //td.colSpan='3';
            td.id='10';
            td.align='center';
            texto=document.createTextNode('Informacion General de un Depto.');
            td.appendChild(texto);
            tr.appendChild(td);
            cuerpo.appendChild(tr);
            */
            
            tabla.appendChild(cuerpo);
            contenedor.appendChild(tabla);
            
            var opcion = document.getElementById('listaOpciones').getElementsByTagName('td');
            for(index=0; index < opcion.length; index++)
            {     
              addEvent(opcion[index],'mouseover',EfectoOpciones,false);
              addEvent(opcion[index],'mouseout',NoEfectoOpciones,false);
              addEvent(opcion[index],'click',opcionesDepto,false);
            }
            break;
    case '2':
            limpia();
            var contenedor= document.getElementById('listaOpciones');
            var tabla= document.createElement('table');
            var cuerpo= document.createElement('tbody');
            tabla.border='0';
            tabla.align='center';
            tabla.cellPadding='2';
            tabla.cellSpacing='0';
            var tr;
            var td;
            var texto;
            
            tr=document.createElement('tr');
            td=document.createElement('th');
            texto=document.createTextNode('ESCUELAS UAG.');
            td.appendChild(texto);
            tr.appendChild(td);
            //cuerpo.appendChild(tr);
            
            td=document.createElement('th');
            texto=document.createTextNode('PLANES Y CARRERAS.');
            td.appendChild(texto);
            tr.appendChild(td);
            cuerpo.appendChild(tr);
            
            tr=document.createElement('tr');
            td=document.createElement('td');
            td.id='0';
            texto=document.createTextNode('Nueva Escuela.');
            td.appendChild(texto);
            tr.appendChild(td);
            cuerpo.appendChild(tr);
            td=document.createElement('td');
            td.id='3';
            texto=document.createTextNode('asignar.');
            td.appendChild(texto);
            tr.appendChild(td);
            cuerpo.appendChild(tr);
            
            tr=document.createElement('tr');
            td=document.createElement('td');
            td.id='1';
            texto=document.createTextNode('Eliminar Informacion de Escuela.');
            td.appendChild(texto);
            tr.appendChild(td);
            cuerpo.appendChild(tr);            
            td=document.createElement('td');
            td.id='4';
            texto=document.createTextNode('Quitar.');
            td.appendChild(texto);
            tr.appendChild(td);
            cuerpo.appendChild(tr);
            
            tr=document.createElement('tr');
            td=document.createElement('td');
            td.id='2';
            texto=document.createTextNode('Modificar Informacion.');
            td.appendChild(texto);
            tr.appendChild(td);
            cuerpo.appendChild(tr);
            td=document.createElement('td');
            td.id='5';
            texto=document.createTextNode('Mostrar.');
            td.appendChild(texto);
            tr.appendChild(td);
            cuerpo.appendChild(tr);
            
            tr=document.createElement('tr');
            td=document.createElement('td');
            td.id='6';
            texto=document.createTextNode('Informacion General de Escuela.');
            td.appendChild(texto);
            tr.appendChild(td);
            cuerpo.appendChild(tr);
            
            td=document.createElement('td');
            tr.appendChild(td);
            cuerpo.appendChild(tr);
            
            tabla.appendChild(cuerpo);
            contenedor.appendChild(tabla);
            
            var opcion = document.getElementById('listaOpciones').getElementsByTagName('td');
            for(index=0; index < opcion.length; index++)
            {     
              addEvent(opcion[index],'mouseover',EfectoOpciones,false);
              addEvent(opcion[index],'mouseout',NoEfectoOpciones,false);
              addEvent(opcion[index],'click',opcionesEscuelas,false);
            }
            break;
    case '3':
            limpia();
            var contenedor= document.getElementById('listaOpciones');
            var tabla= document.createElement('table');
            var cuerpo= document.createElement('tbody');
            tabla.border='0';
            tabla.align='center';
            tabla.cellPadding='2';
            tabla.cellSpacing='0';
            var tr;
            var td;
            var texto;
            
            tr=document.createElement('tr');
            td=document.createElement('th');
            texto=document.createTextNode('TRAMITES UAG.');
            td.appendChild(texto);
            tr.appendChild(td);
            //cuerpo.appendChild(tr);
            
            td=document.createElement('th');
            texto=document.createTextNode('DEPARTAMENTOS UAG.');
            td.appendChild(texto);
            tr.appendChild(td);
            cuerpo.appendChild(tr);
            
            tr=document.createElement('tr');
            td=document.createElement('td');
            td.id='0';
            texto=document.createTextNode('Nuevo Tramite.');
            td.appendChild(texto);
            tr.appendChild(td);
            cuerpo.appendChild(tr);
            td=document.createElement('td');
            td.id='3';
            texto=document.createTextNode('asignar.');
            td.appendChild(texto);
            tr.appendChild(td);
            cuerpo.appendChild(tr);
            
            tr=document.createElement('tr');
            td=document.createElement('td');
            td.id='1';
            texto=document.createTextNode('Eliminar Informacion de Tramite.');
            td.appendChild(texto);
            tr.appendChild(td);
            cuerpo.appendChild(tr);            
            td=document.createElement('td');
            td.id='4';
            texto=document.createTextNode('Quitar.');
            td.appendChild(texto);
            tr.appendChild(td);
            cuerpo.appendChild(tr);
            
            tr=document.createElement('tr');
            td=document.createElement('td');
            td.id='2';
            texto=document.createTextNode('Modificar Nombre de Tramite.');
            td.appendChild(texto);
            tr.appendChild(td);
            cuerpo.appendChild(tr);
            td=document.createElement('td');
            td.id='5';
            texto=document.createTextNode('Mostrar.');
            td.appendChild(texto);
            tr.appendChild(td);
            cuerpo.appendChild(tr);
            
            tr=document.createElement('tr');
            td=document.createElement('td');
            td.id='6';
            texto=document.createTextNode('Informacion General de Tramite.');
            td.appendChild(texto);
            tr.appendChild(td);
            cuerpo.appendChild(tr);
            
            td=document.createElement('td');
            tr.appendChild(td);
            cuerpo.appendChild(tr);
            
            tabla.appendChild(cuerpo);
            contenedor.appendChild(tabla);
            
            var opcion = document.getElementById('listaOpciones').getElementsByTagName('td');
            for(index=0; index < opcion.length; index++)
            {     
              addEvent(opcion[index],'mouseover',EfectoOpciones,false);
              addEvent(opcion[index],'mouseout',NoEfectoOpciones,false);
              addEvent(opcion[index],'click',opcionesTramites,false);
            }
            break;
    case '4':
            limpia();
            var contenedor= document.getElementById('listaOpciones');
            var tabla= document.createElement('table');
            var cuerpo= document.createElement('tbody');
            tabla.border='0';
            tabla.align='center';
            tabla.cellPadding='2';
            tabla.cellSpacing='0';
            var tr;
            var td;
            var texto;
            
            tr=document.createElement('tr');
            td=document.createElement('th');
            texto=document.createTextNode('ALUMNOS.');
            td.appendChild(texto);
            tr.appendChild(td);
            //cuerpo.appendChild(tr);
            
            td=document.createElement('th');
            texto=document.createTextNode('TRAMITES DE ALUMNOS.');
            td.appendChild(texto);
            tr.appendChild(td);
            cuerpo.appendChild(tr);
            
            tr=document.createElement('tr');
            td=document.createElement('td');
            td.id='0';
            texto=document.createTextNode('Nuevo Alumno.');
            td.appendChild(texto);
            tr.appendChild(td);
            cuerpo.appendChild(tr);
            td=document.createElement('td');
            td.id='3';
            texto=document.createTextNode('Mostrar Estado Tramite.');
            td.appendChild(texto);
            tr.appendChild(td);
            cuerpo.appendChild(tr);
            
            tr=document.createElement('tr');
            td=document.createElement('td');
            td.id='1';
            texto=document.createTextNode('Modificar Informacion de Alumno.');
            td.appendChild(texto);
            tr.appendChild(td);
            cuerpo.appendChild(tr);            
            td=document.createElement('td');
            td.id='4';
            texto=document.createTextNode('Cancelar Tramite.');
            td.appendChild(texto);
            tr.appendChild(td);
            cuerpo.appendChild(tr);
            
            tr=document.createElement('tr');
            td=document.createElement('td');
            td.id='2';
            texto=document.createTextNode('Buscar Alumno.');
            td.appendChild(texto);
            tr.appendChild(td);
            cuerpo.appendChild(tr);
            td=document.createElement('td');
            //td.id='5';
            //texto=document.createTextNode('');
            //td.appendChild(texto);
            //tr.appendChild(td);
            //cuerpo.appendChild(tr);
            /*
            tr=document.createElement('tr');
            td=document.createElement('td');
            td.id='6';
            texto=document.createTextNode('');
            td.appendChild(texto);
            tr.appendChild(td);
            cuerpo.appendChild(tr);
            
            td=document.createElement('td');
            tr.appendChild(td);
            cuerpo.appendChild(tr);
            */
            tabla.appendChild(cuerpo);
            
            contenedor.appendChild(tabla);
            var opcion = document.getElementById('listaOpciones').getElementsByTagName('td');
            for(index=0; index < opcion.length; index++)
            {     
              addEvent(opcion[index],'mouseover',EfectoOpciones,false);
              addEvent(opcion[index],'mouseout',NoEfectoOpciones,false);
              addEvent(opcion[index],'click',opcionesAlumno,false);
            }
            
            break;
                   
  }   
}

function detalles(e)
{
  var op;
  if(window.event)
    op=window.event.srcElement;
  else
    op=e.target;
  switch(op.getAttribute('id'))
  {
    case '0':
            limpiarArea('tareas');
            limpiarArea('avisos');
            var contenedor=document.getElementById('tareas');
            var fs= document.createElement('fieldSet');
            fs.id='fsPersonal';
            var lg= document.createElement('legend');
            lg.appendChild(document.createTextNode('Agregar nuevo registro de personal al Sistema'));
            fs.appendChild(lg);
            var btnAgregar=document.createElement('input');
            btnAgregar.type='button';
            btnAgregar.value='+ registro';
            btnAgregar.id='btnAgregar';
            addEvent(btnAgregar,'click',nuevoRegistro,false);
            
            var tb = document.createElement('table');
            tb.name='tbPersonal';
            tb.align='center';
            tb.border='0';
            tb.cellSpacing='5';
            tb.cellPadding='3';
            tb.id='tbPersonal';
            var tbody=document.createElement('tbody');
            var tr;
            var td;
            
            tr=document.createElement('tr');
            td=document.createElement('th');
            td.colSpan='4';
            td.appendChild(btnAgregar);            
            tr.appendChild(td);
            tbody.appendChild(tr);
            
            tr=document.createElement('tr');
            td=document.createElement('th');
            td.appendChild(document.createTextNode('Numero de Registro'));
            tr.appendChild(td);
            
            td=document.createElement('th');
            td.appendChild(document.createTextNode('Nombre(s)'));
            tr.appendChild(td);
            
            td=document.createElement('th');
            td.appendChild(document.createTextNode('Apellidos(paterno-materno)'));
            tr.appendChild(td);
            
            td=document.createElement('th');
            td.appendChild(document.createTextNode('Password'));
            tr.appendChild(td);
            
            tbody.appendChild(tr);
            tb.appendChild(tbody);
            fs.appendChild(tb);
            contenedor.appendChild(fs);
            
            break;
    case '1':
            limpiarArea('tareas');
            limpiarArea('avisos');
            
            var contenedor=document.getElementById('tareas');
            var fs= document.createElement('fieldSet');
            fs.id='fsPersonal';
            var lg= document.createElement('legend');
            lg.appendChild(document.createTextNode('Modificar informacion de personal en el Sistema'));
            fs.appendChild(lg);
                        
            var tb = document.createElement('table');
            tb.name='tbPersonal';
            tb.align='left';
            tb.border='0';
            tb.cellSpacing='3';
            tb.cellPadding='5';
            tb.id='tbPersonal';
            var tbody=document.createElement('tbody');
            var tr;
            var td;
            
            tr=document.createElement('tr');
            td=document.createElement('th');
            td.appendChild(document.createTextNode('Clave Personal'));
            tr.appendChild(td);
            
            var txtIdCliente = document.createElement('input');
            txtIdCliente.type='text';
            txtIdCliente.name='txtIdCliente';
            txtIdCliente.id='txtIdCliente';
            txtIdCliente.size='5';
            txtIdCliente.maxLength='5';
            
            
            td=document.createElement('th');            
            td.appendChild(txtIdCliente);            
            tr.appendChild(td);
                        
            var btnBuscar=document.createElement('input');
            btnBuscar.type='button';
            btnBuscar.value='Buscar Registro';
            btnBuscar.id='btnBuscar';
            
            addEvent(btnBuscar,'click',modBuscarRegistroPersonal,false);
            
            td=document.createElement('th');            
            td.appendChild(btnBuscar);
            tr.appendChild(td);
            
            tbody.appendChild(tr);
            tb.appendChild(tbody);
            fs.appendChild(tb);
            contenedor.appendChild(fs);
            break;
    case '2':
            limpiarArea('tareas');
            limpiarArea('avisos');
            
            var contenedor=document.getElementById('tareas');
            var fs= document.createElement('fieldSet');
            fs.id='fsPersonal';
            var lg= document.createElement('legend');
            lg.appendChild(document.createTextNode('Busqueda de registro en el Sistema'));
            fs.appendChild(lg);
                        
            var tb = document.createElement('table');
            tb.name='tbPersonal';
            tb.align='left';
            tb.border='0';
            tb.cellSpacing='3';
            tb.cellPadding='5';
            tb.id='tbPersonal';
            var tbody=document.createElement('tbody');
            var tr;
            var td;
            
            tr=document.createElement('tr');
            td=document.createElement('th');
            td.appendChild(document.createTextNode('Clave Personal'));
            tr.appendChild(td);
            
            var txtIdCliente = document.createElement('input');
            txtIdCliente.type='text';
            txtIdCliente.name='txtIdCliente';
            txtIdCliente.id='txtIdCliente';
            txtIdCliente.size='5';
            txtIdCliente.maxLength='5';
            
            
            td=document.createElement('th');            
            td.appendChild(txtIdCliente);            
            tr.appendChild(td);
                        
            var btnEliminar=document.createElement('input');
            btnEliminar.type='button';
            btnEliminar.value='Buscar Registro';
            btnEliminar.id='btnAliminar';
            
            addEvent(btnEliminar,'click',buscarRegistro,false);
            
            td=document.createElement('th');            
            td.appendChild(btnEliminar);
            tr.appendChild(td);
            
            tbody.appendChild(tr);
            tb.appendChild(tbody);
            fs.appendChild(tb);
            contenedor.appendChild(fs);
            break;
    case '3':
            limpiarArea('tareas');
            limpiarArea('avisos');
            
            var contenedor=document.getElementById('tareas');
            var fs= document.createElement('fieldSet');
            fs.id='fsPersonal';
            var lg= document.createElement('legend');
            lg.appendChild(document.createTextNode('Eliminar registro de persona en el Sistema'));
            fs.appendChild(lg);
                        
            var tb = document.createElement('table');
            tb.name='tbPersonal';
            tb.align='left';
            tb.border='0';
            tb.cellSpacing='3';
            tb.cellPadding='5';
            tb.id='tbPersonal';
            var tbody=document.createElement('tbody');
            var tr;
            var td;
            
            tr=document.createElement('tr');
            td=document.createElement('th');
            td.appendChild(document.createTextNode('Clave Personal'));
            tr.appendChild(td);
            
            var txtIdCliente = document.createElement('input');
            txtIdCliente.type='text';
            txtIdCliente.name='txtIdCliente';
            txtIdCliente.id='txtIdCliente';
            txtIdCliente.size='5';
            txtIdCliente.maxLength='5';
            
            
            td=document.createElement('th');            
            td.appendChild(txtIdCliente);            
            tr.appendChild(td);
                        
            var btnEliminar=document.createElement('input');
            btnEliminar.type='button';
            btnEliminar.value='Eliminar Registro';
            btnEliminar.id='btnEliminar';
            
            addEvent(btnEliminar,'click',eliminarRegistro,false);
            
            td=document.createElement('th');            
            td.appendChild(btnEliminar);
            tr.appendChild(td);
            
            tbody.appendChild(tr);
            tb.appendChild(tbody);
            fs.appendChild(tb);
            contenedor.appendChild(fs);
            
            
            break;
    case '4':
            limpiarArea('tareas');
            limpiarArea('avisos');
            xmlHttp=getXmlHttpObject();
            if(xmlHttp==null)
            {
              alert('el navagador no soporta ajax');
            }
            var url='../cliente/personal.php';
            url=url + '?opcion=1';
            url=url + '&sid=' + Math.random();
            xmlHttp.onreadystatechange=stateChanged;
            xmlHttp.open('GET',url,true);
            xmlHttp.send(null);
            
            break;
  }
}


function nuevoRegistro()
{
  if ( _indexPersonal == 5 )
  { 
    var t = document.getElementById('avisos');
    t.innerHTML = 'SCCTC: 5 son el numero maximo de registros a insertar por alta';
    t.style.display='block';
    _indexPersonal = _indexPersonal;
    document.getElementById('btnAgregar').setAttribute('disabled','false');
    return;
  }
  
  
  if (_indexPersonal == 0 )
  { 
    var t=document.getElementById('tareas');
    var div = document.createElement('div');
    div.align='right';
    var btnGuardarPersonal=document.createElement('input');
    btnGuardarPersonal.type='button';
    btnGuardarPersonal.value='Guardar Registros';
    btnGuardarPersonal.id='btnGuardarPersonal';
    addEvent(btnGuardarPersonal,'click',guardarRegistros,false);
    div.appendChild(document.createElement('p').appendChild(btnGuardarPersonal));
    t.lastChild.appendChild(div);
  }
  _indexPersonal = _indexPersonal + 1;
  //nuevaLineaTareas('tareas');
  var tdDato;
  var txtDato;
  var lblReg;
  var tr;
  var tdato;
  var tbody=document.getElementById('tbPersonal').getElementsByTagName('tbody')[0];
  tr = document.createElement('tr');
  tdDato = document.createElement('td');
  tdDato.appendChild(document.createTextNode('Registro ' + _indexPersonal + ' de 5'));
  tr.appendChild(tdDato);
  tbody.appendChild(tr);
  
  tdDato = document.createElement('td');
  txtDato = document.createElement('input');
  txtDato.type='text';
  txtDato.name='nombres' + _indexPersonal;
  txtDato.id='nombres' + _indexPersonal;
  txtDato.size='20';  
  txtDato.maxLength='20';
  tdDato.appendChild(txtDato);
  tr.appendChild(tdDato);
  
  tdDato = document.createElement('td');
  txtDato = document.createElement('input');
  txtDato.type='text';
  txtDato.name='apellidos' + _indexPersonal;
  txtDato.id='apellidos' + _indexPersonal;
  txtDato.size='30';  
  txtDato.maxLength='30';
  tdDato.appendChild(txtDato);
  tr.appendChild(tdDato);
  
  tdDato = document.createElement('td');
  txtDato = document.createElement('input');
  txtDato.type='password';
  txtDato.name='password' + _indexPersonal;
  txtDato.id='password' + _indexPersonal;
  txtDato.size='15';  
  txtDato.maxLength='15';
  tdDato.appendChild(txtDato);
  tr.appendChild(tdDato);
  
  tbody.appendChild(tr);
  
}

function nuevaLineaTareas(elemento)
{
  var contenedor=document.getElementById(elemento);
  contenedor.appendChild(document.createElement('br'));
}

function controlTexto(nombre,id,size,maxlig)
{
  var control=document.createElment('input');
  control.name=nomn
}

function guardarRegistros()
{
  
  for(index=1; index <= _indexPersonal; index++)
  {
    var n=document.getElementById('nombres' + index);
    var a=document.getElementById('apellidos' + index);
    var p=document.getElementById('password' + index);
    if (n.value.charAt(0)==' ' || n.value=='' || a.value.charAt(0)==' ' || a.value=='' || p.value.charAt(0)==' ' || p.value=='')
    {
      document.getElementById('avisos').innerHTML='no se permiten valores nulos. Registro ' + index;
      document.getElementById('avisos').style.display='block';
      return;
    }    
    if (n.value.indexOf("'") != -1 || a.value.indexOf("'") != -1 || p.value.indexOf("'") != -1)
    {
      document.getElementById('avisos').innerHTML='SCCTC: Error se de insercion. Registro ' + index;
      document.getElementById('avisos').style.display='block';
      return;
    }  
    
  }
  
  document.getElementById('btnGuardarPersonal').setAttribute('disabled','false');
  document.getElementById('btnAgregar').setAttribute('disabled','false');
  var obj;
  var url;
  
  for(index=1; index <= _indexPersonal; index++)
  {
    xmlHttp=getXmlHttpObject();  
    if (xmlHttp == null)
    {
      alert('Tu navegador no soporta el uso de ajax');
      return;
    }
    
    var personal= new Array(3);
    personal[0]=0;
    
    obj=document.getElementById('nombres' + index);
    personal[1]=obj.value;
    
    obj=document.getElementById('apellidos' + index);
    personal[2]=obj.value;
    
    obj=document.getElementById('password' + index);
    personal[3]=obj.value;
    
   
    url='../cliente/personal.php';
    
    xmlHttp.onreadystatechange= stateChanged;
   
    xmlHttp.open('POST',url,true);
    xmlHttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xmlHttp.send('opcion=0&nombres=' + (personal[1]) + '&apellidos=' + (personal[2]) + '&password=' + (personal[3]));
    
    document.getElementById('nombres' + index).setAttribute('disabled','false');
    document.getElementById('apellidos' + index).setAttribute('disabled','false');
    document.getElementById('password' + index).setAttribute('disabled','false');
  }
}

function eliminarRegistro()
{
    var idPersonal=document.getElementById('txtIdCliente');
   
    if(!confirm('Eliminar Registro de Personal con Clave: '+ idPersonal.value ))
    return;
   
    
    if (!(idPersonal.value > 0))
    {
      document.getElementById('avisos').innerHTML='solo valores numericos!!!';
      document.getElementById('avisos').style.display='block';
      return;
    }
    xmlHttp=getXmlHttpObject();
    if(xmlHttp==null)
    {
      alert('tu navegador no soporta ajax');
      return;
    }
    var url='../cliente/personal.php';
    url=url + '?opcion=3&idPersonal='+idPersonal.value ;
    url=url + '&sid=' + Math.random();
    xmlHttp.onreadystatechange=stateChanged;
    xmlHttp.open('GET',url,true);
    xmlHttp.send(null);
}

function buscarRegistro()
{
    var idPersonal=document.getElementById('txtIdCliente');
    if (!(idPersonal.value > 0))
    {
      document.getElementById('avisos').innerHTML='solo valores numericos!!!';
      document.getElementById('avisos').style.display='block';
      return;
    }
    xmlHttp=getXmlHttpObject();
    if(xmlHttp==null)
    {
      alert('tu navegador no soporta ajax');
      return;
    }
    var url='../cliente/personal.php';
    url=url + '?opcion=4&idPersonal='+idPersonal.value ;
    url=url + '&sid=' + Math.random();
    xmlHttp.onreadystatechange=stateChanged;
    xmlHttp.open('GET',url,true);
    xmlHttp.send(null);
}

function modBuscarRegistroPersonal()
{
    var idPersonal=document.getElementById('txtIdCliente');
    if (!(idPersonal.value > 0))
    {
      document.getElementById('avisos').innerHTML='solo valores numericos!!!';
      document.getElementById('avisos').style.display='block';
      return;
    }
    xmlHttp=getXmlHttpObject();
    if(xmlHttp==null)
    {
      alert('tu navegador no soporta ajax');
      return;
    }
    var url='../cliente/personal.php';
    url=url + '?opcion=5&idPersonal='+idPersonal.value ;
    url=url + '&sid=' + Math.random();
    xmlHttp.onreadystatechange=stateChanged;
    xmlHttp.open('GET',url,true);
    xmlHttp.send(null);
    
}
function modificarRegistroPersonal()
{
  var c=document.getElementById('txtIdPersonal');
  var n=document.getElementById('txtNombresPersonal');
  var a=document.getElementById('txtApellidosPersonal');
  var p=document.getElementById('txtPasswordPersonal');
  if(n.value.charAt(0)==' ' || n.value=='' || a.value.charAt(0)==' ' || a.value=='' || p.value.charAt(0)==' ' || p.value=='')
  {
    document.getElementById('avisos').innerHTML='no se permiten valores nulos.';
    document.getElementById('avisos').style.display='block';
    return;
  }    
  if (n.value.indexOf("'") != -1 || a.value.indexOf("'") != -1 || p.value.indexOf("'") != -1)
  {
    document.getElementById('avisos').innerHTML='SCCTC: Error se de insercion.';
    document.getElementById('avisos').style.display='block';
    return;
  } 
  xmlHttp=getXmlHttpObject();
  if(xmlHttp==null)
  {
    alert('tu navegador no soporta ajax');
    return;
  }
  var url='../cliente/personal.php';
  xmlHttp.onreadystatechange=stateChanged;
  xmlHttp.open('POST',url,true);
  xmlHttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
  xmlHttp.send('opcion=6&idPersonal=' + c.value + '&nombres=' + n.value + '&apellidos=' + a.value + '&password=' + p.value);
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

function opcionesDepto(e)
{
  var op;
  if(window.event)
    op=window.event.srcElement;
  else
    op=e.target;
  switch(op.getAttribute('id'))
  {
    case '0':
            limpiarArea('tareas');
            limpiarArea('avisos');
            var contenedor=document.getElementById('tareas');
            var fs= document.createElement('fieldSet');
            fs.id='fsPersonal';
            var lg= document.createElement('legend');
            lg.appendChild(document.createTextNode('Crear Departamentos'));
            fs.appendChild(lg);
            var btnAgregar=document.createElement('input');
            btnAgregar.type='button';
            btnAgregar.value='+ Depto';
            btnAgregar.id='btnAgregar';
            addEvent(btnAgregar,'click',nuevoDepto,false);
            
            var tb = document.createElement('table');
            tb.name='tbDepto';
            tb.id='tbDepto';
            tb.align='center';
            tb.border='0';
            tb.cellSpacing='0';
            tb.cellPadding='5';
            
            var tbody=document.createElement('tbody');
            var tr;
            var td;
            
            tr=document.createElement('tr');
            td=document.createElement('th');
            td.colSpan='3';
            td.appendChild(btnAgregar);            
            tr.appendChild(td);
            tbody.appendChild(tr);
            
            tr=document.createElement('tr');
            td=document.createElement('th');
            td.appendChild(document.createTextNode('Numero de Registro'));
            tr.appendChild(td);
            
            td=document.createElement('th');
            td.appendChild(document.createTextNode('Nombre Departamento'));
            tr.appendChild(td);
            
            td=document.createElement('th');
            td.appendChild(document.createTextNode('Roles Departamentales'));
            tr.appendChild(td);
            
            tbody.appendChild(tr);
            tb.appendChild(tbody);
            fs.appendChild(tb);
            contenedor.appendChild(fs);
            break;
    case '1':
            limpiarArea('tareas');
            limpiarArea('avisos');
            
            var contenedor=document.getElementById('tareas');
            var fs= document.createElement('fieldSet');
            fs.id='fsDepto';
            var lg= document.createElement('legend');
            lg.appendChild(document.createTextNode('Modificar Nombre de Departamento en el Sistema'));
            fs.appendChild(lg);
                        
            var tb = document.createElement('table');
            tb.name='tbDepto';
            tb.align='left';
            tb.border='0';
            tb.cellSpacing='3';
            tb.cellPadding='5';
            tb.id='tbDepto';
            var tbody=document.createElement('tbody');
            var tr;
            var td;
            
            tr=document.createElement('tr');
            td=document.createElement('th');
            td.appendChild(document.createTextNode('Clave Departamento'));
            tr.appendChild(td);
            
            var txtIdCliente = document.createElement('input');
            txtIdCliente.type='text';
            txtIdCliente.name='txtIdDepto';
            txtIdCliente.id='txtIdDepto';
            txtIdCliente.size='5';
            txtIdCliente.maxLength='5';
            
            
            td=document.createElement('th');            
            td.appendChild(txtIdCliente);            
            tr.appendChild(td);
                        
            var btnBuscar=document.createElement('input');
            btnBuscar.type='button';
            btnBuscar.value='Buscar Registro';
            btnBuscar.id='btnBuscar';
            
            addEvent(btnBuscar,'click',modBuscarRegistroDepto,false);
            
            td=document.createElement('th');            
            td.appendChild(btnBuscar);
            tr.appendChild(td);
            
            tbody.appendChild(tr);
            tb.appendChild(tbody);
            fs.appendChild(tb);
            contenedor.appendChild(fs);
            break;
    case '2':
            limpiarArea('tareas');
            limpiarArea('avisos');
            
            var contenedor=document.getElementById('tareas');
            var fs= document.createElement('fieldSet');
            fs.id='fsDepto';
            var lg= document.createElement('legend');
            lg.appendChild(document.createTextNode('Eliminar Deparatamento del Sistema'));
            fs.appendChild(lg);
                        
            var tb = document.createElement('table');
            tb.name='tbDepto';
            tb.align='left';
            tb.border='0';
            tb.cellSpacing='3';
            tb.cellPadding='5';
            tb.id='tbPersonal';
            var tbody=document.createElement('tbody');
            var tr;
            var td;
            
            tr=document.createElement('tr');
            td=document.createElement('th');
            td.appendChild(document.createTextNode('Clave Departamento'));
            tr.appendChild(td);
            
            var txtIdCliente = document.createElement('input');
            txtIdCliente.type='text';
            txtIdCliente.name='txtIdDepto';
            txtIdCliente.id='txtIdDepto';
            txtIdCliente.size='5';
            txtIdCliente.maxLength='5';
            
            
            td=document.createElement('th');            
            td.appendChild(txtIdCliente);            
            tr.appendChild(td);
                        
            var btnEliminar=document.createElement('input');
            btnEliminar.type='button';
            btnEliminar.value='Eliminar Departamento';
            btnEliminar.id='btnAliminar';
            
            addEvent(btnEliminar,'click',eliminarRegistroDepto,false);
            
            td=document.createElement('th');            
            td.appendChild(btnEliminar);
            tr.appendChild(td);
            
            tbody.appendChild(tr);
            tb.appendChild(tbody);
            fs.appendChild(tb);
            contenedor.appendChild(fs);
            
            break;
    case '3':
            limpiarArea('tareas');
            limpiarArea('avisos');
            xmlHttp=getXmlHttpObject();
            if(xmlHttp==null)
            {
              alert('el navagador no soporta ajax');
            }
            var url='../cliente/departamentos.php';
            url=url + '?opcion=1';
            url=url + '&sid=' + Math.random();
            xmlHttp.onreadystatechange=stateChanged;
            xmlHttp.open('GET',url,true);
            xmlHttp.send(null);
            break;
    case '4':
            limpiarArea('tareas');
            limpiarArea('avisos');
            var contenedor=document.getElementById('tareas');
            var fs= document.createElement('fieldSet');
            fs.id='fsDeptos';
            var lg= document.createElement('legend');
            lg.appendChild(document.createTextNode('Asignar Responsabilidades a Departamento'));
            fs.appendChild(lg);
            
            var texto;
            texto=document.createTextNode('Seleccionar Departamento: ');
            fs.appendChild(texto);
            var span;
            span=document.createElement('span');
            span.id='spanListaDeptos';
            fs.appendChild(span);
            contenedor.appendChild(fs);
            
            listarDeptos('spanListaDeptos',0);
            break;
    case '5':
            limpiarArea('tareas');
            limpiarArea('avisos');
            var contenedor=document.getElementById('tareas');
            var fs= document.createElement('fieldSet');
            fs.id='fsDeptos';
            var lg= document.createElement('legend');
            lg.appendChild(document.createTextNode('Eliminar Responsabilidades de un Departamento'));
            fs.appendChild(lg);
            
            var texto;
            texto=document.createTextNode('Seleccionar Departamento: ');
            fs.appendChild(texto);
            var span;
            span=document.createElement('span');
            span.id='spanListaDeptos';
            fs.appendChild(span);
            //fs.appendChild(document.createElement('br'));
            span=document.createElement('div');
            span.id='divListaResp';
            fs.appendChild(span);
            contenedor.appendChild(fs);
            listarDeptos('spanListaDeptos',2);
            break;
    case '6':
            limpiarArea('tareas');
            limpiarArea('avisos');
            var contenedor=document.getElementById('tareas');
            var fs= document.createElement('fieldSet');
            fs.id='fsDeptos';
            var lg= document.createElement('legend');
            lg.appendChild(document.createTextNode('Listar Responsabilidades de un Departamento'));
            fs.appendChild(lg);
            
            var texto;
            texto=document.createTextNode('Seleccionar Departamento: ');
            fs.appendChild(texto);
            var span;
            span=document.createElement('span');
            span.id='spanListaDeptos';
            fs.appendChild(span);
            //fs.appendChild(document.createElement('br'));
            span=document.createElement('div');
            span.id='divListaResp';
            fs.appendChild(span);
            contenedor.appendChild(fs);
            listarDeptos('spanListaDeptos',1);
            break;
    case '7':
            limpiarArea('tareas');
            limpiarArea('avisos');
            var contenedor=document.getElementById('tareas');
            var fs= document.createElement('fieldSet');
            fs.id='fsDeptos';
            var lg= document.createElement('legend');
            lg.appendChild(document.createTextNode('Asignar Personal a Departamento'));
            fs.appendChild(lg);
            
            var texto;
            texto=document.createTextNode('Seleccionar Departamento: ');
            fs.appendChild(texto);
            var span;
            span=document.createElement('span');
            span.id='spanListaDeptos';
            fs.appendChild(span);
            contenedor.appendChild(fs);
            
            listarDeptos('spanListaDeptos',3);
            break;
    case '8':
            limpiarArea('tareas');
            limpiarArea('avisos');
            var contenedor=document.getElementById('tareas');
            var fs= document.createElement('fieldSet');
            fs.id='fsDeptos';
            var lg= document.createElement('legend');
            lg.appendChild(document.createTextNode('Quitar Personal de un Departamento'));
            fs.appendChild(lg);
            
            var texto;
            texto=document.createTextNode('Seleccionar Departamento: ');
            fs.appendChild(texto);
            var span;
            span=document.createElement('span');
            span.id='spanListaDeptos';
            fs.appendChild(span);
            //fs.appendChild(document.createElement('br'));
            span=document.createElement('div');
            span.id='divListaResp';
            fs.appendChild(span);
            contenedor.appendChild(fs);
            listarDeptos('spanListaDeptos',5);
            break;
    case '9':
            limpiarArea('tareas');
            limpiarArea('avisos');
            var contenedor=document.getElementById('tareas');
            var fs= document.createElement('fieldSet');
            fs.id='fsDeptos';
            var lg= document.createElement('legend');
            lg.appendChild(document.createTextNode('Listar Personal de un Departamento'));
            fs.appendChild(lg);
            
            var texto;
            texto=document.createTextNode('Seleccionar Departamento: ');
            fs.appendChild(texto);
            var span;
            span=document.createElement('span');
            span.id='spanListaDeptos';
            fs.appendChild(span);
            //fs.appendChild(document.createElement('br'));
            span=document.createElement('div');
            span.id='divListaResp';
            fs.appendChild(span);
            contenedor.appendChild(fs);
            listarDeptos('spanListaDeptos',4);
            break;
    case '10':
          alert('10');
          break;
                      
  }
}

function nuevoDepto()
{
  if ( _indexPersonal == 5 )
  { 
    var t = document.getElementById('avisos');
    t.innerHTML = 'SCCTC: 5 son el numero maximo de registros a insertar por alta';
    t.style.display='block';
    _indexPersonal = _indexPersonal;
    document.getElementById('btnAgregar').setAttribute('disabled','false');
    return;
  }
  
  
  if (_indexPersonal == 0 )
  { 
    var t=document.getElementById('tareas');
    var div = document.createElement('div');
    div.align='right';
    var btnGuardarPersonal=document.createElement('input');
    btnGuardarPersonal.type='button';
    btnGuardarPersonal.value='Guardar Registros';
    btnGuardarPersonal.id='btnGuardarDeptos';
    addEvent(btnGuardarPersonal,'click',guardarRegistrosDeptos,false);
    div.appendChild(document.createElement('p').appendChild(btnGuardarPersonal));
    t.lastChild.appendChild(div);
  }
  _indexPersonal = _indexPersonal + 1;
  
  var tdDato;
  var txtDato;
  var lblReg;
  var tr;
  var tdato;
  var tbody=document.getElementById('tbDepto').getElementsByTagName('tbody')[0];
  tr = document.createElement('tr');
  tdDato = document.createElement('td');
  tdDato.appendChild(document.createTextNode('Registro ' + _indexPersonal + ' de 5'));
  tr.appendChild(tdDato);
  tbody.appendChild(tr);
  
  tdDato = document.createElement('td');
  txtDato = document.createElement('input');
  txtDato.type='text';
  txtDato.name='nombre' + _indexPersonal;
  txtDato.id='nombre' + _indexPersonal;
  txtDato.size='40';  
  txtDato.maxLength='28';
  tdDato.appendChild(txtDato);
  tr.appendChild(tdDato);
  
  tdDato = document.createElement('td');
  txtDato = document.createElement('select');
  txtDato.name='nivel' + _indexPersonal;
  txtDato.id='nivel' + _indexPersonal;
  var op;
  op=document.createElement('option');
  op.value="0";
  op.appendChild(document.createTextNode('Solo lectura'));
  txtDato.appendChild(op);
  op=document.createElement('option');
  op.value="1";
  op.appendChild(document.createTextNode('Lectura/Modificar'));
  txtDato.appendChild(op);
  op=document.createElement('option');
  op.value="2";
  op.appendChild(document.createTextNode('Acceso Administrador'));
  txtDato.appendChild(op);
  tdDato.appendChild(txtDato);
  tr.appendChild(tdDato);
  
  tbody.appendChild(tr);
}

function guardarRegistrosDeptos()
{
  
  for(index=1; index <= _indexPersonal; index++)
  {
    var n=document.getElementById('nombre' + index);
    if (n.value.charAt(0)==' ' || n.value=='')
    {
      document.getElementById('avisos').innerHTML='no se permiten valores nulos. Registro ' + index;
      document.getElementById('avisos').style.display='block';
      return;
    }    
    if (n.value.indexOf("'") != -1)
    {
      document.getElementById('avisos').innerHTML='SCCTC: Error se de insercion. Registro ' + index;
      document.getElementById('avisos').style.display='block';
      return;
    }  
  }
  
  document.getElementById('btnGuardarDeptos').setAttribute('disabled','false');
  document.getElementById('btnAgregar').setAttribute('disabled','false');
  
  var obj;
  var nivelDepto;
  var url;
  
  for(index=1; index <= _indexPersonal; index++)
  {
    xmlHttp=getXmlHttpObject();  
    if (xmlHttp == null)
    {
      alert('Tu navegador no soporta el uso de ajax');
      return;
    }
    
    obj=document.getElementById('nombre' + index);
    var depto=obj.value;
    
    nivelDepto=document.getElementById('nivel' + index).options[document.getElementById('nivel' + index).selectedIndex].value;
    
    url='../cliente/departamentos.php';
    xmlHttp.onreadystatechange= stateChanged;
    xmlHttp.open('POST',url,true);
    xmlHttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xmlHttp.send('opcion=0&nombre=' + depto + '&nivelDepto=' + nivelDepto);
    
    document.getElementById('nombre' + index).setAttribute('disabled','false');
    
  }
}

function eliminarRegistroDepto()
{
    var idDepto=document.getElementById('txtIdDepto');
    
    if(!confirm('Eliminar Registro de Departamento con Clave: '+ idDepto.value ))
      return;
    
    if (!(idDepto.value > 0))
    {
      document.getElementById('avisos').innerHTML='solo valores numericos!!!';
      document.getElementById('avisos').style.display='block';
      return;
    }
    xmlHttp=getXmlHttpObject();
    if(xmlHttp==null)
    {
      alert('tu navegador no soporta ajax');
      return;
    }
    var url='../cliente/departamentos.php';
    url=url + '?opcion=2&idDepto=' + idDepto.value ;
    url=url + '&sid=' + Math.random();
    xmlHttp.onreadystatechange=stateChanged;
    xmlHttp.open('GET',url,true);
    xmlHttp.send(null);
    
}

function modBuscarRegistroDepto()
{
    var idDepto=document.getElementById('txtIdDepto');
    if (!(idDepto.value > 0))
    {
      document.getElementById('avisos').innerHTML='solo valores numericos!!!';
      document.getElementById('avisos').style.display='block';
      return;
    }
    xmlHttp=getXmlHttpObject();
    if(xmlHttp==null)
    {
      alert('tu navegador no soporta ajax');
      return;
    }
    var url='../cliente/departamentos.php';
    url=url + '?opcion=3&idDepto='+idDepto.value ;
    url=url + '&sid=' + Math.random();
    xmlHttp.onreadystatechange=stateChanged;
    xmlHttp.open('GET',url,true);
    xmlHttp.send(null);
    
}
function modificarRegistroDepto()
{
  var c=document.getElementById('txtIdDepto');
  var n=document.getElementById('txtNombreDepto');
  
  if(n.value.charAt(0)==' ' || n.value=='')
  {
    document.getElementById('avisos').innerHTML='no se permiten valores nulos.';
    document.getElementById('avisos').style.display='block';
    return;
  }    
  if (n.value.indexOf("'") != -1)
  {
    document.getElementById('avisos').innerHTML='SCCTC: Error se de insercion.';
    document.getElementById('avisos').style.display='block';
    return;
  } 
  
  var nivelDepto=document.getElementById('nivelDepto').options[document.getElementById('nivelDepto').selectedIndex].value;
  
  xmlHttp=getXmlHttpObject();
  if(xmlHttp==null)
  {
    alert('tu navegador no soporta ajax');
    return;
  }
  var url='../cliente/departamentos.php';
  xmlHttp.onreadystatechange=stateChanged;
  xmlHttp.open('POST',url,true);
  xmlHttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
  xmlHttp.send('opcion=4&idDepto=' + c.value + '&nombre=' + n.value + '&nivelDepto=' + nivelDepto);
}

function listarDeptos(lugar,funcion)
{
  xmlHttp=getXmlHttpObject();
  if(xmlHttp==null)
  {
    alert('tu navegador no soporta ajax');
    return;
  }
  var url;
  url='../cliente/departamentos.php';
  url=url + '?opcion=5&fun='+ funcion + '&sid=' + Math.random();
  xmlHttp.onreadystatechange=function(){ 
    if(xmlHttp.readyState==4 || xmlHttp.readyState == 'complete')
      document.getElementById(lugar).innerHTML=xmlHttp.responseText;
    else
      document.getElementById(lugar).innerHTML='<label style="color:#f00"><em>Bucando Departamentos...</em></label>';
  }
  xmlHttp.open('GET',url,true);
  xmlHttp.send(null);
}

function cboDeptos(valor)
{
  var contenedor=document.getElementById('fsDeptos');
  var btn = document.createElement('input');
  btn.type='button';
  btn.value='+ Responsabilidad';
  btn.id='btnAgregar';
  addEvent(btn,'click',nuevaResponsabilidad,false);
  
  contenedor.appendChild(document.createTextNode(' '));
  contenedor.appendChild(btn);
  contenedor.appendChild(document.createElement('br'));
  document.getElementById('slListaDeptos').setAttribute('disabled','true');
  
  var tb = document.createElement('table');
  tb.name='tbDepto';
  tb.id='tbDepto';
  tb.align='center';
  tb.border='0';
  tb.cellSpacing='0';
  tb.cellPadding='5';
            
  var tbody=document.createElement('tbody');
  var tr;
  var td;
            
  tr=document.createElement('tr');
  td=document.createElement('th');
  td.appendChild(document.createTextNode('Numero de Registro'));
  tr.appendChild(td);
            
  td=document.createElement('th');
  td.appendChild(document.createTextNode('Resonsabilidad Departamento'));
  tr.appendChild(td);
            
  tbody.appendChild(tr);
  tb.appendChild(tbody);
  contenedor.appendChild(tb);
  
}

function cboDeptosAddPersonal()
{

  var contenedor=document.getElementById('fsDeptos');
  
  contenedor.appendChild(document.createTextNode(' Selecciona Personal:'));
  
  document.getElementById('slListaDeptos').setAttribute('disabled','true');
  
  var span=document.createElement('span');
  span.id='divDeptoListaPersonal';
  contenedor.appendChild(span);
  var url;
  url='../cliente/personal.php';
  url=url + '?opcion=7' + '&sid=' + Math.random();
  
  xmlHttp=getXmlHttpObject();
  if(xmlHttp==null)
  {
    alert('tu navegador no soporta ajax');
    return;
  }
  //xmlHttp.onreadystatechange= stateChanged;
  xmlHttp.onreadystatechange= function ()
  {
    if(xmlHttp.readyState==4 || xmlHttp.stateState=='complete')
      document.getElementById('divDeptoListaPersonal').innerHTML=xmlHttp.responseText;
    else
      document.getElementById('divDeptoListaPersonal').innerHTML='<label style="color:#f00"><em>Buscando Personal...</em></label>';
  }
  xmlHttp.open('GET',url,true);
  xmlHttp.send(null);
  
  
  var btn = document.createElement('input');
  btn.type='button';
  btn.value='+ Personal';
  btn.id='respDeptoAddPersonal';
          
  addEvent(btn,'click',respDeptoAddPersonal,false);
                        
  contenedor.appendChild(document.createTextNode(' '));
  contenedor.appendChild(btn);
  contenedor.appendChild(document.createElement('br'));
  
  
  var tb = document.createElement('table');
  tb.name='tbDepto';
  tb.id='tbDepto';
  tb.align='center';
  tb.border='0';
  tb.cellSpacing='0';
  tb.cellPadding='5';
            
  var tbody=document.createElement('tbody');
  var tr;
  var td;
            
  tr=document.createElement('tr');
  td=document.createElement('th');
  td.appendChild(document.createTextNode('Numero de Registro'));
  tr.appendChild(td);
            
  td=document.createElement('th');
  td.appendChild(document.createTextNode('Personal'));
  tr.appendChild(td);
            
  tbody.appendChild(tr);
  tb.appendChild(tbody);
  contenedor.appendChild(tb);
}

function nuevaResponsabilidad()
{
  if ( _indexPersonal == 5 )
  { 
    var t = document.getElementById('avisos');
    t.innerHTML = 'SCCTC: 5 son el numero maximo de registros a insertar por alta';
    t.style.display='block';
    _indexPersonal = _indexPersonal;
    document.getElementById('btnAgregar').setAttribute('disabled','false');
    return;
  }
  if (_indexPersonal == 0 )
  { 
    var t=document.getElementById('tareas');
    var div = document.createElement('div');
    div.align='right';
    var btnGuardarResp=document.createElement('input');
    btnGuardarResp.type='button';
    btnGuardarResp.value='Guardar Registros';
    btnGuardarResp.id='btnGuardarDeptos';
    addEvent(btnGuardarResp,'click',guardarRespDeptos,false);
    div.appendChild(document.createElement('p').appendChild(btnGuardarResp));
    t.lastChild.appendChild(div);
  }
  _indexPersonal = _indexPersonal + 1;
  
  var body=document.getElementById('fsDeptos').getElementsByTagName('tbody')[0];
  var tr;
  var td;
  var resp;
  tr=document.createElement('tr');
  td=document.createElement('td');
  td.style.textAlign='right';
  td.appendChild(document.createTextNode('Registro ' + _indexPersonal + ' de 5')); 
  tr.appendChild(td);
  
  resp=document.createElement('textarea');
  resp.cols='50';
  resp.rows='2';
  resp.name='resp' + _indexPersonal;
  resp.id='resp' + _indexPersonal;
  td=document.createElement('td');
  td.appendChild(resp);
  tr.appendChild(td);
  body.appendChild(tr);
    
}
function respDeptoAddPersonal()
{
  if ( _indexPersonal == 5 )
  { 
    var t = document.getElementById('avisos');
    t.innerHTML = 'SCCTC: 5 son el numero maximo de registros a insertar por alta';
    t.style.display='block';
    _indexPersonal = _indexPersonal;
    document.getElementById('respDeptoAddPersonal').setAttribute('disabled','false');
    return;
  }
  if (_indexPersonal == 0 )
  { 
    var t=document.getElementById('tareas');
    var div = document.createElement('div');
    div.align='right';
    var btn=document.createElement('input');
    btn.type='button';
    btn.value='Asignar Personal';
    btn.id='guardarRespAddPersonal';
    addEvent(btn,'click',guardarRespAddPersonal,false);
    div.appendChild(document.createElement('p').appendChild(btn));
    t.lastChild.appendChild(div);
  }
  _indexPersonal = _indexPersonal + 1;
  
  var body=document.getElementById('fsDeptos').getElementsByTagName('tbody')[0];
  var tr;
  var td;
  var personal;
  tr=document.createElement('tr');
  td=document.createElement('td');
  td.style.textAlign='right';
  td.appendChild(document.createTextNode('Registro ' + _indexPersonal + ' de 5')); 
  tr.appendChild(td);
  
  personal=document.createElement('input');
  personal.type='text';
  personal.name='personal' + _indexPersonal;
  personal.value=document.getElementById('slListaPersonal').options[document.getElementById('slListaPersonal').selectedIndex].text;
  personal.id=document.getElementById('slListaPersonal').options[document.getElementById('slListaPersonal').selectedIndex].value;
  personal.size='50';
  personal.setAttribute('disabled','false');
  
  td=document.createElement('td');
  td.appendChild(personal);
  tr.appendChild(td);
  body.appendChild(tr);
}

function guardarRespDeptos()
{
  for(index=1; index <= _indexPersonal; index++)
  {
    var n=document.getElementById('resp' + index);
    if (n.value.charAt(0)==' ' || n.value=='')
    {
      document.getElementById('avisos').innerHTML='no se permiten valores nulos. Registro ' + index;
      document.getElementById('avisos').style.display='block';
      return;
    }    
    if (n.value.indexOf("'") != -1)
    {
      document.getElementById('avisos').innerHTML='SCCTC: Error se de insercion. Registro ' + index;
      document.getElementById('avisos').style.display='block';
      return;
    }  
  }
  
  document.getElementById('btnAgregar').setAttribute('disabled','false');
  document.getElementById('btnGuardarDeptos').setAttribute('disabled','false');
  var idDepto=document.getElementById('slListaDeptos').options[document.getElementById('slListaDeptos').selectedIndex].value;
  for(index=1; index <= _indexPersonal; index++)  
  {
    var resp=document.getElementById('resp' + index).value;
    xmlHttp=getXmlHttpObject();
    if(xmlHttp==null)
    {
      alert('tu navegador no soporta el uso de ajax');
      return;
    }
    var url='../cliente/departamentos.php';
    xmlHttp.onreadystatechange=stateChanged;
    xmlHttp.open('POST',url,true);
    xmlHttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xmlHttp.send('opcion=6&idDepto=' + idDepto + '&resp=' + resp );
    document.getElementById('resp' + index).setAttribute('disabled','false');
  }
  
}

function MuestraEliminaResp(valor,op)
{
  document.getElementById('avisos').style.display='none';
  
  document.getElementById('slListaDeptos').setAttribute('disabled','false');
  xmlHttp=getXmlHttpObject();
  if(xmlHttp==null)
  {
    alert('Tu navegador no soporta ajax');
    return;
  }
  var url='../cliente/departamentos.php';
  if(op=='0')
    url=url + '?opcion=7&op=0&idDepto=' + valor + '&sid=' + Math.random();
  if(op=='1')
  {
    url=url + '?opcion=7&op=1&idDepto=' + valor + '&sid=' + Math.random();    
    /*var btn=document.createElement('input');
    btn.type='button';
    btn.name='btnEliminarResp';
    btn.value='Eliminar Responsabilidades';
    btn.id='btnEliminarResp';
    addEvent(btn,'click',EliminarResp,false);
    document.getElementById('fsDeptos').appendChild(btn);*/
  }
  xmlHttp.onreadystatechange= function (){
    if(xmlHttp.readyState==4 || xmlHttp.readyState=='complete')
    {
      document.getElementById('divListaResp').innerHTML=xmlHttp.responseText;
      //if(op=='0')
      document.getElementById('slListaDeptos').removeAttribute('disabled');
    }
    else
    {
      document.getElementById('divListaResp').innerHTML='<label style="color:#f00"><em>Buscando responsabilidades...</em></label>';
    }
  }
  xmlHttp.open('GET',url,true);
  xmlHttp.send(null);
}

function EliminarResp()
{
  
  var idDepto=document.getElementById('slListaDeptos').options[document.getElementById('slListaDeptos').selectedIndex].value;
  var chk=document.getElementById('divListaResp').getElementsByTagName('input');
  for(index=0; index < chk.length-1; index++)
  {
    
    if(document.getElementById('checkbox'+index).checked)
    {
      document.getElementById('checkbox' + index).setAttribute('disabled','false');
      document.getElementById('eliminarDeptosResp').setAttribute('disabled','false');
      
      xmlHttp=getXmlHttpObject();
      if(xmlHttp==null)
      {
        alert('Tu navegador no soporta ajax');
        return;
      }
      var resp=document.getElementById('checkbox'+index).getAttribute('value');
      var url='../cliente/departamentos.php';
      xmlHttp.onreadystatechange=stateChanged;
      xmlHttp.open('POST',url,true);
      xmlHttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
      xmlHttp.send('opcion=8&idDepto=' + idDepto + '&resp=' + resp );
    }
  }
}

function guardarRespAddPersonal()
{
  document.getElementById('guardarRespAddPersonal').setAttribute('disabled','false');
  document.getElementById('respDeptoAddPersonal').setAttribute('disabled','false');
  var idD;
  var idP;
  idD=document.getElementById('slListaDeptos').options[document.getElementById('slListaDeptos').selectedIndex].value;
  var personal=document.getElementById('tbDepto').getElementsByTagName('input');
  for(index=0;index<personal.length; index++)
  {
      idP=personal[index].id;
      xmlHttp=getXmlHttpObject();
      if(xmlHttp==null)
      {
        alert('Tu navegador no soporta ajax');
        return;
      }
      var url='../cliente/departamentos.php';
      url=url + '?opcion=9&idDepto=' + idD + '&idPersonal=' + idP + '&sid=' + Math.random(); 
      xmlHttp.onreadystatechange=stateChanged;
      xmlHttp.open('GET',url,true);
      xmlHttp.send(null);
  }

}

function MuestraEliminaPersonal(valor,op)
{ 
  document.getElementById('avisos').style.display='none';
  
  document.getElementById('slListaDeptos').setAttribute('disabled','false');
  xmlHttp=getXmlHttpObject();
  if(xmlHttp==null)
  {
    alert('Tu navegador no soporta ajax');
    return;
  }
  var url='../cliente/departamentos.php';
  if(op=='0')
    url=url + '?opcion=10&op=0&idDepto=' + valor + '&sid=' + Math.random();
  if(op=='1')
  {
    url=url + '?opcion=10&op=1&idDepto=' + valor + '&sid=' + Math.random();    
    /*var btn=document.createElement('input');
    btn.type='button';
    btn.name='btnEliminarResp';
    btn.value='Eliminar Responsabilidades';
    btn.id='btnEliminarResp';
    addEvent(btn,'click',EliminarResp,false);
    document.getElementById('fsDeptos').appendChild(btn);*/
  }
  xmlHttp.onreadystatechange= function (){
    if(xmlHttp.readyState==4 || xmlHttp.readyState=='complete')
    {
      document.getElementById('divListaResp').innerHTML=xmlHttp.responseText;
      //if(op=='0')
      document.getElementById('slListaDeptos').removeAttribute('disabled');
    }
    else
    {
      document.getElementById('divListaResp').innerHTML='<label style="color:#f00"><em>Buscando personal...</em></label>';
    }
  }
  xmlHttp.open('GET',url,true);
  xmlHttp.send(null);
}
function EliminarPersonal()
{
  
  var idDepto=document.getElementById('slListaDeptos').options[document.getElementById('slListaDeptos').selectedIndex].value;
  var chk=document.getElementById('divListaResp').getElementsByTagName('input');
  for(index=0; index < chk.length-1; index++)
  {
    
    if(document.getElementById('checkbox'+index).checked)
    {
      document.getElementById('checkbox' + index).setAttribute('disabled','false');
      document.getElementById('eliminarDeptosResp').setAttribute('disabled','false');
      
      xmlHttp=getXmlHttpObject();
      if(xmlHttp==null)
      {
        alert('Tu navegador no soporta ajax');
        return;
      }
      var idP=document.getElementById('checkbox'+index).getAttribute('value');
      var url='../cliente/departamentos.php';
      xmlHttp.onreadystatechange=stateChanged;
      xmlHttp.open('POST',url,true);
      xmlHttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
      xmlHttp.send('opcion=11&idDepto=' + idDepto + '&idPersonal=' + idP );
    }
  }
}

function opcionesEscuelas(e)
{
  var opcion;
  var op;
  if(window.event)
    op=window.event.srcElement;
  else
    op=e.target;
  opcion=op.id;
  switch(opcion)
  {
    case '0':
              limpiarArea('tareas');
              limpiarArea('avisos');
              var contenedor=document.getElementById('tareas');
              var fs= document.createElement('fieldSet');
              fs.id='fsPersonal';
              var lg= document.createElement('legend');
              lg.appendChild(document.createTextNode('Agregar Nueva Escuela al Sistema'));
              fs.appendChild(lg);
              var btnAgregar=document.createElement('input');
              btnAgregar.type='button';
              btnAgregar.value='+ Escuela';
              btnAgregar.id='btnAgregar';
              addEvent(btnAgregar,'click',nuevoRegistroEscuela,false);
              
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
            
              tr=document.createElement('tr');
              td=document.createElement('th');
              td.colSpan='4';
              td.appendChild(btnAgregar);            
              tr.appendChild(td);
              tbody.appendChild(tr);
              
              tr=document.createElement('tr');
              td=document.createElement('th');
              td.colSpan='3';
              td.setAttribute('align','left');
              td.appendChild(document.createTextNode('Numero de Registro'));
              tr.appendChild(td);
              
              /*td=document.createElement('th');
              td.colSpan='2';
              td.appendChild(document.createTextNode(' '));
              tr.appendChild(td);
              */
              
              tbody.appendChild(tr);
              tb.appendChild(tbody);
              fs.appendChild(tb);
              contenedor.appendChild(fs);    
      
            break;
    case '1':
            limpiarArea('tareas');
            limpiarArea('avisos');
            
            var contenedor=document.getElementById('tareas');
            var fs= document.createElement('fieldSet');
            fs.id='fsPersonal';
            var lg= document.createElement('legend');
            lg.appendChild(document.createTextNode('Eliminar registro de Escuela en el Sistema'));
            fs.appendChild(lg);
                        
            var tb = document.createElement('table');
            tb.name='tbPersonal';
            tb.align='left';
            tb.border='0';
            tb.cellSpacing='3';
            tb.cellPadding='5';
            tb.id='tbPersonal';
            var tbody=document.createElement('tbody');
            var tr;
            var td;
            
            tr=document.createElement('tr');
            td=document.createElement('th');
            td.appendChild(document.createTextNode('Clave Escuela'));
            tr.appendChild(td);
            
            var txtIdCliente = document.createElement('input');
            txtIdCliente.type='text';
            txtIdCliente.name='txtIdCliente';
            txtIdCliente.id='txtIdCliente';
            txtIdCliente.size='5';
            txtIdCliente.maxLength='5';
            
            
            td=document.createElement('th');            
            td.appendChild(txtIdCliente);            
            tr.appendChild(td);
                        
            var btnEliminar=document.createElement('input');
            btnEliminar.type='button';
            btnEliminar.value='Eliminar Escuela';
            btnEliminar.id='btnEliminar';
            
            addEvent(btnEliminar,'click',eliminarRegistroEscuela,false);
            
            td=document.createElement('th');            
            td.appendChild(btnEliminar);
            tr.appendChild(td);
            
            tbody.appendChild(tr);
            tb.appendChild(tbody);
            fs.appendChild(tb);
            contenedor.appendChild(fs);
            break;
    case '2':
            limpiarArea('tareas');
            limpiarArea('avisos');
            
            var contenedor=document.getElementById('tareas');
            var fs= document.createElement('fieldSet');
            fs.id='fsPersonal';
            var lg= document.createElement('legend');
            lg.appendChild(document.createTextNode('Modificar informacion de Escuela en el Sistema'));
            fs.appendChild(lg);
                        
            var span = document.createElement('span');
            span.id='spanEscuela';
            fs.appendChild(document.createTextNode('Seleccciona Escuela Para Modificar Informacion: '));
            fs.appendChild(span);
            contenedor.appendChild(fs);
            xmlHttp=getXmlHttpObject();
            if(xmlHttp==null)
            {
              alert('tu navegador no soporta ajax');
              return;
            }
            var url;
            url='../cliente/escuela.php';
            url=url + '?opcion=2&opc=0' + '&sid=' + Math.random();
            xmlHttp.onreadystatechange=function()
            {
              if(xmlHttp.readyState==4 || xmlHttp.readyState=='complete')
                document.getElementById('spanEscuela').innerHTML=xmlHttp.responseText;
              else
                document.getElementById('spanEscuela').innerHTML='<em><label style="color:#f00">Buscando escuelas en el sistema...</em>';
            }
            xmlHttp.open('GET',url,true);
            xmlHttp.send(null);
            break;
    case '3':
            limpiarArea('tareas');
            limpiarArea('avisos');
            var contenedor=document.getElementById('tareas');
            var fs= document.createElement('fieldSet');
            fs.id='fsDeptos';
            var lg= document.createElement('legend');
            lg.appendChild(document.createTextNode('Asignar Plan/Carreras a Escuelas'));
            fs.appendChild(lg);
            
            var texto;
            texto=document.createTextNode('Seleccionar Escuela: ');
            fs.appendChild(texto);
            var span;
            span=document.createElement('span');
            span.id='spanListaEscuelas';
            fs.appendChild(span);
            contenedor.appendChild(fs);
            var url='../cliente/escuela.php?opcion=2&opc=1&sid='+Math.random();
            xmlHttp=getXmlHttpObject();
            if(xmlHttp==null)
            {
              alert('no exite soporte para ajax');
              return;
            }
            xmlHttp.onreadystatechange=function(){
              if(xmlHttp.readyState==4 || xmlHttp.readyState=='complete')
                document.getElementById('spanListaEscuelas').innerHTML=xmlHttp.responseText;
              else
                document.getElementById('spanListaEscuelas').innerHTML='<em><label style="color:#f00">Buscando escuelas en el sistema...</em>';
            }
            xmlHttp.open('GET',url,true);
            xmlHttp.send(null);
            
            break;
    case '4':
            limpiarArea('tareas');
            limpiarArea('avisos');
            var contenedor=document.getElementById('tareas');
            var fs= document.createElement('fieldSet');
            fs.id='fsDeptos';
            var lg= document.createElement('legend');
            lg.appendChild(document.createTextNode('Quitar Plan/Carreras de Escuela'));
            fs.appendChild(lg);
            
            var texto;
            texto=document.createTextNode('Seleccionar Escuela: ');
            fs.appendChild(texto);
            var span;
            span=document.createElement('span');
            span.id='spanListaEscuelas';
            fs.appendChild(span);
            //div
            span=document.createElement('div');
            span.id='divListaResp';
            fs.appendChild(span);
            
            contenedor.appendChild(fs);
            var url='../cliente/escuela.php?opcion=2&opc=3&sid='+Math.random();
            xmlHttp=getXmlHttpObject();
            if(xmlHttp==null)
            {
              alert('no exite soporte para ajax');
              return;
            }
            xmlHttp.onreadystatechange=function(){
              if(xmlHttp.readyState==4 || xmlHttp.readyState=='complete')
                document.getElementById('spanListaEscuelas').innerHTML=xmlHttp.responseText;
              else
                document.getElementById('spanListaEscuelas').innerHTML='<em><label style="color:#f00">Buscando escuelas en el sistema...</em>';
            }
            xmlHttp.open('GET',url,true);
            xmlHttp.send(null);
    
            break;
    case '5':
    
            limpiarArea('tareas');
            limpiarArea('avisos');
            var contenedor=document.getElementById('tareas');
            var fs= document.createElement('fieldSet');
            fs.id='fsDeptos';
            var lg= document.createElement('legend');
            lg.appendChild(document.createTextNode('Listar Plan/Carreras de Escuela'));
            fs.appendChild(lg);
            
            var texto;
            texto=document.createTextNode('Seleccionar Escuela: ');
            fs.appendChild(texto);
            var span;
            span=document.createElement('span');
            span.id='spanListaEscuelas';
            fs.appendChild(span);
            //div
            span=document.createElement('div');
            span.id='divListaResp';
            fs.appendChild(span);
            
            contenedor.appendChild(fs);
            var url='../cliente/escuela.php?opcion=2&opc=2&sid='+Math.random();
            xmlHttp=getXmlHttpObject();
            if(xmlHttp==null)
            {
              alert('no exite soporte para ajax');
              return;
            }
            xmlHttp.onreadystatechange=function(){
              if(xmlHttp.readyState==4 || xmlHttp.readyState=='complete')
                document.getElementById('spanListaEscuelas').innerHTML=xmlHttp.responseText;
              else
                document.getElementById('spanListaEscuelas').innerHTML='<em><label style="color:#f00">Buscando escuelas en el sistema...</em>';
            }
            xmlHttp.open('GET',url,true);
            xmlHttp.send(null);
    
            break;
    case '6':
            limpiarArea('tareas');
            limpiarArea('avisos');
            var contenedor=document.getElementById('tareas');
            var fs= document.createElement('fieldSet');
            fs.id='fsDeptos';
            var lg= document.createElement('legend');
            lg.appendChild(document.createTextNode('Informacion General de Escuela'));
            fs.appendChild(lg);
            
            var texto;
            texto=document.createTextNode('Seleccionar Escuela: ');
            fs.appendChild(texto);
            var span;
            span=document.createElement('span');
            span.id='spanListaEscuelas';
            fs.appendChild(span);
            //div
            span=document.createElement('div');
            span.id='divListaResp';
            fs.appendChild(span);
            
            contenedor.appendChild(fs);
            var url='../cliente/escuela.php?opcion=2&opc=4&sid='+Math.random();
            xmlHttp=getXmlHttpObject();
            if(xmlHttp==null)
            {
              alert('no exite soporte para ajax');
              return;
            }
            xmlHttp.onreadystatechange=function(){
              if(xmlHttp.readyState==4 || xmlHttp.readyState=='complete')
                document.getElementById('spanListaEscuelas').innerHTML=xmlHttp.responseText;
              else
                document.getElementById('spanListaEscuelas').innerHTML='<em><label style="color:#f00">Buscando escuelas en el sistema...</em>';
            }
            xmlHttp.open('GET',url,true);
            xmlHttp.send(null);
            break;
  }
}

function nuevoRegistroEscuela()
{
  if ( _indexPersonal == 5 )
  { 
    var t = document.getElementById('avisos');
    t.innerHTML = 'SCCTC: 5 son el numero maximo de registros a insertar por alta';
    t.style.display='block';
    _indexPersonal = _indexPersonal;
    document.getElementById('btnAgregar').setAttribute('disabled','false');
    return;
  }
  
  
  if (_indexPersonal == 0 )
  { 
    //var cuerpo;
    //var fila;
    //var columna;
    var cuerpo = document.getElementById('tbPersonal').getElementsByTagName('tbody')[0];
    var fila = document.createElement('tr');
    var columna = document.createElement('th');
    columna.colSpan='3';
    var sp = document.createElement('span');
    sp.id='spanContenedorListaPersonal';
    sp.appendChild(document.createTextNode('Selecciona Personal: '));
    columna.appendChild(sp);
    fila.appendChild(columna);
    cuerpo.appendChild(fila);
    cboListaPersonal('spanContenedorListaPersonal');
   
   
    var t=document.getElementById('tareas');
    var div = document.createElement('div');
    div.align='right';
    var btnGuardarEscuelas=document.createElement('input');
    btnGuardarEscuelas.type='button';
    btnGuardarEscuelas.value='Guardar Escuelas';
    btnGuardarEscuelas.id='btnGuardarEscuelas';
    addEvent(btnGuardarEscuelas,'click',guardarRegistrosEscuelas,false);
    div.appendChild(document.createElement('p').appendChild(btnGuardarEscuelas));
    t.lastChild.appendChild(div);
   
  }
 
 
  _indexPersonal = _indexPersonal + 1;
  //nuevaLineaTareas('tareas');
  var tdDato;
  var txtDato;
  var lblReg;
  var tr;
  var tdato;
  var btn;
  var tbody=document.getElementById('tbPersonal').getElementsByTagName('tbody')[0];
  tr = document.createElement('tr');
  tr.style.backgroundColor='#cdc';
  tdDato = document.createElement('td');
  //tdDato.cellSpan='4';
  tdDato.appendChild(document.createTextNode('Registro ' + _indexPersonal + ' de 5'));
  tr.appendChild(tdDato);
  tbody.appendChild(tr);
  
  tdDato = document.createElement('td');
  //tdDato.cellSpan='4';
  tdDato.appendChild(document.createTextNode('Nombre Escuela'));
  tdDato.appendChild(document.createElement('br'));
  txtDato = document.createElement('input');
  txtDato.type='text';
  txtDato.name='nombre' + _indexPersonal;
  txtDato.id='nombre' + _indexPersonal;
  txtDato.size='55';  
  txtDato.maxLength='55';
  tdDato.appendChild(txtDato);
  tr.appendChild(tdDato);
  tbody.appendChild(tr);
  
  tdDato = document.createElement('td');
  //tdDato.cellSpan='4';
  tdDato.appendChild(document.createTextNode('Personal Responsable'));
  tdDato.appendChild(document.createElement('br'));
  txtDato = document.createElement('input');
  txtDato.type='text';
  //txtDato.name='responsable' + _indexPersonal;
  txtDato.id='responsable' + _indexPersonal;
  txtDato.size='40';
  txtDato.setAttribute('disabled','false');  
  tdDato.appendChild(txtDato);
  btn= document.createElement('input');
  btn.type='button';
  btn.value='Asignar';
  btn.name=_indexPersonal;
  btn.id='btnAsignarRes' + _indexPersonal;
  addEvent(btn,'click',AsignarRevisor,false);
  tdDato.appendChild(btn);
  tdDato.appendChild(document.createElement('br'));
  tdDato.appendChild(document.createTextNode('Personal Revisor'));
  tdDato.appendChild(document.createElement('br'));
  txtDato = document.createElement('input');
  txtDato.type='text';
  //txtDato.name='revisor' + _indexPersonal;
  txtDato.id='revisor' + _indexPersonal;
  txtDato.size='40'; 
  txtDato.setAttribute('disabled','false');   
  tdDato.appendChild(txtDato);
  btn= document.createElement('input');
  btn.type='button';
  btn.value='Asignar';
  btn.name=_indexPersonal;
  btn.id='btnAsignarRev'+ _indexPersonal;
  addEvent(btn,'click',AsignarResponsable,false);
  tdDato.appendChild(btn);
  tr.appendChild(tdDato);
  
  tbody.appendChild(tr);
  
}

function AsignarRevisor(e)
{
  var index;
  if(window.event)
    index=window.event.srcElement;
  else
    index=e.target;
  index= index.getAttribute('name');
  document.getElementById('responsable' + index).value=document.getElementById('slListaPersonal').options[document.getElementById('slListaPersonal').selectedIndex].text;
  document.getElementById('responsable' + index).setAttribute('name',document.getElementById('slListaPersonal').options[document.getElementById('slListaPersonal').selectedIndex].value);
}
function AsignarResponsable(e)
{
  var index;
  if(window.event)
    index=window.event.srcElement;
  else
    index=e.target;
  index= index.getAttribute('name');
  document.getElementById('revisor' + index).value=document.getElementById('slListaPersonal').options[document.getElementById('slListaPersonal').selectedIndex].text;  
  document.getElementById('revisor' + index).setAttribute('name',document.getElementById('slListaPersonal').options[document.getElementById('slListaPersonal').selectedIndex].value);  
}

function cboListaPersonal(lugar)
{

  //'fsDeptos'
  var contenedor=document.getElementById(lugar);
  var span=document.createElement('span');
  span.id='divDeptoListaPersonal';
  contenedor.appendChild(span);
  var url;
  url='../cliente/personal.php';
  url=url + '?opcion=7' + '&sid=' + Math.random();
  
  xmlHttp=getXmlHttpObject();
  if(xmlHttp==null)
  {
    alert('tu navegador no soporta ajax');
    return;
  }
  
  xmlHttp.onreadystatechange= function ()
  {
    if(xmlHttp.readyState==4 || xmlHttp.stateState=='complete')
      document.getElementById('divDeptoListaPersonal').innerHTML=xmlHttp.responseText;
    else
      document.getElementById('divDeptoListaPersonal').innerHTML='<label style="color:#f00"><em>Buscando Personal...</em></label>';
  }
  xmlHttp.open('GET',url,true);
  xmlHttp.send(null);
}

function guardarRegistrosEscuelas()
{
  for(index=1; index <= _indexPersonal; index++)
  {
    var escuela=document.getElementById('nombre'+index).value;
    var responsable=document.getElementById('responsable'+index).value;
    var revisor=document.getElementById('revisor'+index).value;
    
    
    if (escuela.charAt(0)==' ' || escuela=='' || responsable=='' || revisor=='')
    {
      document.getElementById('avisos').innerHTML='no se permiten valores nulos. Registro ' + index;
      document.getElementById('avisos').style.display='block';
      return;
    }    
    if (escuela.indexOf("'") != -1)
    {
      document.getElementById('avisos').innerHTML='SCCTC: Error se de insercion. Registro ' + index;
      document.getElementById('avisos').style.display='block';
      return;
    }  
  }
  
  document.getElementById('btnAgregar').setAttribute('disabled','false');
  document.getElementById('btnGuardarEscuelas').setAttribute('disabled','false');
  
  for(index=1; index<= _indexPersonal; index++)
  {
    document.getElementById('nombre'+index).setAttribute('disabled','false');
    document.getElementById('btnAsignarRes'+index).setAttribute('disabled','false');
    document.getElementById('btnAsignarRev'+index).setAttribute('disabled','false');
  
    var escuela=document.getElementById('nombre'+index).value;
    var responsable=document.getElementById('responsable'+index).getAttribute('name');
    var revisor=document.getElementById('revisor'+index).getAttribute('name');
    
    xmlHttp=getXmlHttpObject();
    if(xmlHttp==null)
    {
       alert('tu navegador no soporta ajax');
       return;
    }
    var url='../cliente/escuela.php';
    xmlHttp.onreadystatechange=stateChanged;
    xmlHttp.open('POST',url,true);
    xmlHttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xmlHttp.send('opcion=0&nombre=' + escuela + '&idResponsable=' + responsable + '&idRevisor=' + revisor);
  
  }
}

function eliminarRegistroEscuela()
{
    var idPersonal=document.getElementById('txtIdCliente');
    
    if(!confirm('Eliminar Registro de Escuela con Clave: '+ idPersonal.value ))
    return;
   
    
    if (!(idPersonal.value > 0))
    {
      document.getElementById('avisos').innerHTML='solo valores numericos!!!';
      document.getElementById('avisos').style.display='block';
      return;
    }
    xmlHttp=getXmlHttpObject();
    if(xmlHttp==null)
    {
      alert('tu navegador no soporta ajax');
      return;
    }
    var url;
    url=url='../cliente/escuela.php';
    url=url + '?opcion=1&idEscuela='+idPersonal.value ;
    url=url + '&sid=' + Math.random();
    xmlHttp.onreadystatechange=stateChanged;
    xmlHttp.open('GET',url,true);
    xmlHttp.send(null);
}

function muestraEscuelaMod(idEscuela)
{
    if(idEscuela==0) return;
    xmlHttp=getXmlHttpObject();
    if(xmlHttp==null)
    {
      alert('no exite soporte de ajax');
      return;
    }
    var url='../cliente/escuela.php';
    url=url + '?opcion=3&idEscuela='+idEscuela;
    url=url + '&sid=' + Math.random();
    //xmlHttp.onreadystatechange=stateChanged;
    xmlHttp.onreadystatechange= function() {
      if(xmlHttp.readyState == 4 || xmlHttp.readyState=='complete')
      {
        document.getElementById('avisos').innerHTML=xmlHttp.responseText;
        document.getElementById('avisos').style.display='block';
        
        document.getElementById('slListaPersonal').setAttribute('disabled','false');
        cboListaPersonal('listadoPersonalEscuelas');
        document.getElementById('slListaPersonal').removeAttribute('disabled');
        //alert('aa');
      }
      else
      {
        document.getElementById('avisos').innerHTML="buscando...";        
      }
    }
    xmlHttp.open('GET',url,true);
    xmlHttp.send(null);
} 
function nuevoResponsable()
{
  document.getElementById('txtResponsableEscuela').value=document.getElementById('slListaPersonal').options[document.getElementById('slListaPersonal').selectedIndex].text;
  document.getElementById('txtResponsableEscuela').setAttribute('name',document.getElementById('slListaPersonal').options[document.getElementById('slListaPersonal').selectedIndex].value);
}
function nuevoRevisor()
{
  document.getElementById('txtRevisorEscuela').value=document.getElementById('slListaPersonal').options[document.getElementById('slListaPersonal').selectedIndex].text;
  document.getElementById('txtRevisorEscuela').setAttribute('name',document.getElementById('slListaPersonal').options[document.getElementById('slListaPersonal').selectedIndex].value);
}

function modificarRegistroEscuela()
{
  
  var idEscuela=document.getElementById('txtIdEscuela').value;
  var nombre=document.getElementById('txtNombreEscuela').value;
  var responsable=document.getElementById('txtResponsableEscuela').getAttribute('name');
  var revisor=document.getElementById('txtRevisorEscuela').getAttribute('name');
  
  if (nombre.charAt(0)==' ' || nombre=='')
  {
    document.getElementById('avisos').innerHTML='no se permiten valores nulos. Registro ' + index;
    document.getElementById('avisos').style.display='block';
    return;
  }   
  if (nombre.indexOf("'") != -1)
  {
    document.getElementById('avisos').innerHTML='SCCTC: Error se de insercion. Registro ' + index;
    document.getElementById('avisos').style.display='block';
    return;
  }  
  
  /*
  alert(idEscuela);
  alert(nombre);
  alert(responsable);
  alert(revisor);
  */
  var url='../cliente/escuela.php';
  url=url + '?opcion=4&idEscuela='+idEscuela+'&nombre='+nombre+'&responsable='+responsable+'&revisor='+revisor;
  url=url + '&sid=' + Math.random();
  xmlHttp=getXmlHttpObject();
  if(xmlHttp==null)
  {
    alert('no existe soporte para ajax');
    return;
  }
  xmlHttp.onreadystatechange=stateChanged;
  /*xmlHttp.onreadystatechange= function() {
    if(xmlHttp.readyState == 4 || xmlHttp.readyState=='complete')
    {
      document.getElementById('avisos').innerHTML=xmlHttp.responseText;
      document.getElementById('avisos').style.display='block';
      cboListaPersonal('listadoPersonalEscuelas');
      //alert('aa');
    }
    else
    {
      document.getElementById('avisos').innerHTML="buscando...";        
    }
  }
  */
  xmlHttp.open('GET',url,true);
  xmlHttp.send(null);
}

function addEscuelaPlanCarrera()
{
  var contenedor=document.getElementById('fsDeptos');
  var btn = document.createElement('input');
  document.getElementById('slListaPersonal').setAttribute('disabled','false');
  btn.type='button';
  btn.value='+ plan/carrera';
  btn.id='addPlanCarreraEscuela';
          
  addEvent(btn,'click',addPlanCarrera,false);
                        
  contenedor.appendChild(document.createTextNode(' '));
  contenedor.appendChild(btn);
  contenedor.appendChild(document.createElement('br'));
  
  
  var tb = document.createElement('table');
  tb.name='tbDepto';
  tb.id='tbDepto';
  tb.align='center';
  tb.border='0';
  tb.cellSpacing='0';
  tb.cellPadding='5';
            
  var tbody=document.createElement('tbody');
  var tr;
  var td;
            
  tr=document.createElement('tr');
  td=document.createElement('th');
  td.appendChild(document.createTextNode('Numero de Registro'));
  tr.appendChild(td);
            
  td=document.createElement('th');
  td.appendChild(document.createTextNode('plan/carrera'));
  tr.appendChild(td);
            
  tbody.appendChild(tr);
  tb.appendChild(tbody);
  contenedor.appendChild(tb);
}
function addPlanCarrera()
{
  if ( _indexPersonal == 5 )
  { 
    var t = document.getElementById('avisos');
    t.innerHTML = 'SCCTC: 5 son el numero maximo de registros a insertar por alta';
    t.style.display='block';
    _indexPersonal = _indexPersonal;
    document.getElementById('addPlanCarreraEscuela').setAttribute('disabled','false');
    return;
  }
  if (_indexPersonal == 0 )
  { 
    var t=document.getElementById('tareas');
    var div = document.createElement('div');
    div.align='right';
    var btn=document.createElement('input');
    btn.type='button';
    btn.value='Asignar plan/carrera';
    btn.id='guardarPlanCarrera';
    addEvent(btn,'click',guardarPlanCarrera,false);
    div.appendChild(document.createElement('p').appendChild(btn));
    t.lastChild.appendChild(div);
  }
  _indexPersonal = _indexPersonal + 1;
  
  var body=document.getElementById('fsDeptos').getElementsByTagName('tbody')[0];
  var tr;
  var td;
  var personal;
  tr=document.createElement('tr');
  td=document.createElement('td');
  td.style.textAlign='right';
  td.appendChild(document.createTextNode('Registro ' + _indexPersonal + ' de 5')); 
  tr.appendChild(td);
  
  personal=document.createElement('input');
  personal.type='text';
  personal.name='plan/Escuela' + _indexPersonal;
  //personal.value=document.getElementById('slListaPersonal').options[document.getElementById('slListaPersonal').selectedIndex].text;
  personal.id=document.getElementById('slListaPersonal').options[document.getElementById('slListaPersonal').selectedIndex].value;
  personal.size='50';
  personal.maxLength='40';
  
  
  td=document.createElement('td');
  td.appendChild(personal);
  tr.appendChild(td);
  body.appendChild(tr);
}

function guardarPlanCarrera()
{
  document.getElementById('guardarPlanCarrera').setAttribute('disabled','false');
  document.getElementById('addPlanCarreraEscuela').setAttribute('disabled','false');
  var id;
  var pc;
      
  id=document.getElementById('slListaPersonal').options[document.getElementById('slListaPersonal').selectedIndex].value;
  var personal=document.getElementById('tbDepto').getElementsByTagName('input');
  
  for(index=0;index<personal.length; index++)
  {
      personal[index].setAttribute('disabled','false');
      pc=personal[index].value;
  
      xmlHttp=getXmlHttpObject();
      if(xmlHttp==null)
      {
        alert('Tu navegador no soporta ajax');
        return;
      }
      var url='../cliente/escuela.php';
      xmlHttp.onreadystatechange=stateChanged;
      xmlHttp.open('POST',url,true);
      xmlHttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
      xmlHttp.send('opcion=5'+'&idEscuela='+id+'&plancarrera='+pc);
  }

}

function EliminaMuestraEscuelaPlanCarrera(valor,op)
{
  if(valor==0) 
  {
    document.getElementById('divListaResp').innerHTML="";
    return;
  }

  document.getElementById('avisos').style.display='none';
  
  document.getElementById('slListaPersonal').setAttribute('disabled','false');
  xmlHttp=getXmlHttpObject();
  if(xmlHttp==null)
  {
    alert('Tu navegador no soporta ajax');
    return;
  }
  var url='../cliente/escuela.php';
  if(op=='0')
    url=url + '?opcion=6&op=0&idEscuela=' + valor + '&sid=' + Math.random();
  if(op=='1')
    url=url + '?opcion=6&op=1&idEscuela=' + valor + '&sid=' + Math.random();    

  xmlHttp.onreadystatechange= function (){
    if(xmlHttp.readyState==4 || xmlHttp.readyState=='complete')
    {
      document.getElementById('divListaResp').innerHTML=xmlHttp.responseText;
      //if(op=='0')
      document.getElementById('slListaPersonal').removeAttribute('disabled');
    }
    else
    {
      document.getElementById('divListaResp').innerHTML='<label style="color:#f00"><em>Buscando planes/escuelas...</em></label>';
    }
  }
  xmlHttp.open('GET',url,true);
  xmlHttp.send(null);
}

function EliminarPlanCarrera()
{
  
  //var idDepto=document.getElementById('slListaPersonal').options[document.getElementById('slListaPersonal').selectedIndex].value;
  var chk=document.getElementById('divListaResp').getElementsByTagName('input');
  for(index=0; index < chk.length-1; index++)
  {
    
    if(document.getElementById('checkbox'+index).checked)
    {
      document.getElementById('checkbox' + index).setAttribute('disabled','false');
      document.getElementById('eliminarDeptosResp').setAttribute('disabled','false');
      
      xmlHttp=getXmlHttpObject();
      if(xmlHttp==null)
      {
        alert('Tu navegador no soporta ajax');
        return;
      }
      
      var idP=document.getElementById('checkbox'+index).getAttribute('value');
      
      var url='../cliente/escuela.php';
      url=url + '?opcion=7&idplancarrera='+idP;
      xmlHttp.onreadystatechange=stateChanged;
      xmlHttp.open('GET',url,true);
      xmlHttp.send(null);
      
     
    }
  }
}

function infoGralEscuela(valor)
{
  if(valor==0) return;
  
  xmlHttp=getXmlHttpObject();
  if(xmlHttp==null)
  {
    alert('no exite soporte de ajax');
    return;
  }
  var url='../cliente/escuela.php';
  url=url + '?opcion=8&idEscuela='+valor;
  url=url + '&sid=' + Math.random();
  //xmlHttp.onreadystatechange=stateChanged;
  xmlHttp.onreadystatechange= function() {
    if(xmlHttp.readyState == 4 || xmlHttp.readyState=='complete')
    {
      //document.getElementById('tareas').style.display='block';
      document.getElementById('tareas').innerHTML=xmlHttp.responseText;
      //EliminaMuestraEscuelaPlanCarrera(valor,'0');  
    }
    else
    {
      //document.getElementById('tareas').style.display='block';
      document.getElementById('tareas').innerHTML="buscando...";        
    }
  }
  xmlHttp.open('GET',url,true);
  xmlHttp.send(null);
  
}
//*****tramites
function opcionesTramites(e)
{
 var opcion;
  var op;
  if(window.event)
    op=window.event.srcElement;
  else
    op=e.target;
  opcion=op.id;
  switch(opcion)
  {
    case '0':
              
              limpiarArea('tareas');
              limpiarArea('avisos');
              var contenedor=document.getElementById('tareas');
              var fs= document.createElement('fieldSet');
              fs.id='fsPersonal';
              var lg= document.createElement('legend');
              lg.appendChild(document.createTextNode('Agregar Nuevo Tramite al Sistema'));
              fs.appendChild(lg);
              var btnAgregar=document.createElement('input');
              btnAgregar.type='button';
              btnAgregar.value='+ Tramite';
              btnAgregar.id='btnAgregar';
              addEvent(btnAgregar,'click',nuevoRegistroTramite,false);
              
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
            
              tr=document.createElement('tr');
              td=document.createElement('th');
              td.colSpan='2';
              td.appendChild(btnAgregar);            
              tr.appendChild(td);
              tbody.appendChild(tr);
              
              tr=document.createElement('tr');
              td=document.createElement('th');
              td.appendChild(document.createTextNode('Numero de Registro'));
              tr.appendChild(td);
              
              td=document.createElement('th');
              td.appendChild(document.createTextNode('Nombre Tramite'));
              tr.appendChild(td);
                           
              tbody.appendChild(tr);
              tb.appendChild(tbody);
              fs.appendChild(tb);
              contenedor.appendChild(fs);    
              
            break;
    case '1':
            
            limpiarArea('tareas');
            limpiarArea('avisos');
            
            var contenedor=document.getElementById('tareas');
            var fs= document.createElement('fieldSet');
            fs.id='fsPersonal';
            var lg= document.createElement('legend');
            lg.appendChild(document.createTextNode('Eliminar registro de Tramites en el Sistema'));
            fs.appendChild(lg);
                        
            var tb = document.createElement('table');
            tb.name='tbPersonal';
            tb.align='left';
            tb.border='0';
            tb.cellSpacing='3';
            tb.cellPadding='5';
            tb.id='tbPersonal';
            var tbody=document.createElement('tbody');
            var tr;
            var td;
            
            tr=document.createElement('tr');
            td=document.createElement('th');
            td.appendChild(document.createTextNode('Seleccionar Tramite'));
            tr.appendChild(td);
            
            var spanT = document.createElement('span');
            spanT.id='spanListadoTramites';
            
            
            td=document.createElement('th');            
            td.appendChild(spanT);            
            tr.appendChild(td);
                        
            var btnEliminar=document.createElement('input');
            btnEliminar.type='button';
            btnEliminar.value='Eliminar Tramite';
            btnEliminar.id='btnEliminar';
            
            
            td=document.createElement('th');            
            td.appendChild(btnEliminar);
            tr.appendChild(td);
            
            tbody.appendChild(tr);
            tb.appendChild(tbody);
            fs.appendChild(tb);
            contenedor.appendChild(fs);
            
            xmlHttp=getXmlHttpObject();
            if(xmlHttp==null)
            {
               alert('tu navegador no soporta ajax');
               return;
            }
            var url='../cliente/tramite.php';
            url=url + '?opcion=2&opc=0&sid=' + Math.random();
            xmlHttp.onreadystatechange=function(){
              if(xmlHttp.readyState==4 || xmlHttp.readyState=='complete')
              {
                document.getElementById('spanListadoTramites').innerHTML=xmlHttp.responseText;
                addEvent(btnEliminar,'click',eliminarRegistroTramite,false);
              }
              else
              {
                document.getElementById('spanListadoTramites').innerHTML='<label style="color:#f00;font-style:oblique;">Buscando tramites...</label>';
              }
            }
            xmlHttp.open('GET',url,true);
            xmlHttp.send(null);
            
            
            break;
    case '2':
            
            limpiarArea('tareas');
            limpiarArea('avisos');
            
            var contenedor=document.getElementById('tareas');
            var fs= document.createElement('fieldSet');
            fs.id='fsPersonal';
            var lg= document.createElement('legend');
            lg.appendChild(document.createTextNode('Modificar informacion de Tramite en el Sistema'));
            fs.appendChild(lg);
                        
            var span = document.createElement('span');
            span.id='spanEscuela';
            fs.appendChild(document.createTextNode('Seleccciona Tramite Para Modificar Informacion: '));
            fs.appendChild(span);
            contenedor.appendChild(fs);
            xmlHttp=getXmlHttpObject();
            if(xmlHttp==null)
            {
              alert('tu navegador no soporta ajax');
              return;
            }
            var url;
            url='../cliente/tramite.php';
            url=url + '?opcion=2&opc=1' + '&sid=' + Math.random();
            xmlHttp.onreadystatechange=function()
            {
              if(xmlHttp.readyState==4 || xmlHttp.readyState=='complete')
                document.getElementById('spanEscuela').innerHTML=xmlHttp.responseText;
              else
                document.getElementById('spanEscuela').innerHTML='<em><label style="color:#f00">Buscando escuelas en el sistema...</em>';
            }
            xmlHttp.open('GET',url,true);
            xmlHttp.send(null);
            
            break;
    case '3':
    
            limpiarArea('tareas');
            limpiarArea('avisos');
            var contenedor=document.getElementById('tareas');
            var fs= document.createElement('fieldSet');
            fs.id='fsDeptos';
            var lg= document.createElement('legend');
            lg.appendChild(document.createTextNode('Asignar por cuales Departamentos pasara el Tramite para su Revision'));
            fs.appendChild(lg);
            
            var texto;
            texto=document.createTextNode('Seleccionar Tramite: ');
            fs.appendChild(texto);
            var span;
            span=document.createElement('span');
            span.id='spanListaEscuelas';
            fs.appendChild(span);
            contenedor.appendChild(fs);
            
            span=document.createElement('span');
            span.id='spanListaDeptos';
            fs.appendChild(span);
            contenedor.appendChild(fs);
            
            
            var url='../cliente/tramite.php?opcion=2&opc=2&sid='+Math.random();
            xmlHttp=getXmlHttpObject();
            if(xmlHttp==null)
            {
              alert('no exite soporte para ajax');
              return;
            }
            xmlHttp.onreadystatechange=function(){
              if(xmlHttp.readyState==4 || xmlHttp.readyState=='complete')
                document.getElementById('spanListaEscuelas').innerHTML=xmlHttp.responseText;
              else
                document.getElementById('spanListaEscuelas').innerHTML='<em><label style="color:#f00">Buscando tramites en el sistema...</em>';
            }
            xmlHttp.open('GET',url,true);
            xmlHttp.send(null);
    
            
            break;
    case '4':
            
            limpiarArea('tareas');
            limpiarArea('avisos');
            var contenedor=document.getElementById('tareas');
            var fs= document.createElement('fieldSet');
            fs.id='fsDeptos';
            var lg= document.createElement('legend');
            lg.appendChild(document.createTextNode('Quitar Departamentos para revision de Tramite'));
            fs.appendChild(lg);
            
            var texto;
            texto=document.createTextNode('Seleccionar Tramite: ');
            fs.appendChild(texto);
            var span;
            span=document.createElement('span');
            span.id='spanListaEscuelas';
            fs.appendChild(span);
            //div
            span=document.createElement('div');
            span.id='divListaResp';
            fs.appendChild(span);
            
            contenedor.appendChild(fs);
            var url='../cliente/tramite.php?opcion=2&opc=4&sid='+Math.random();
            xmlHttp=getXmlHttpObject();
            if(xmlHttp==null)
            {
              alert('no exite soporte para ajax');
              return;
            }
            xmlHttp.onreadystatechange=function(){
              if(xmlHttp.readyState==4 || xmlHttp.readyState=='complete')
                document.getElementById('spanListaEscuelas').innerHTML=xmlHttp.responseText;
              else
                document.getElementById('spanListaEscuelas').innerHTML='<em><label style="color:#f00">Buscando Tramites en el sistema...</em>';
            }
            xmlHttp.open('GET',url,true);
            xmlHttp.send(null);
            
            break;
    case '5':
            
            limpiarArea('tareas');
            limpiarArea('avisos');
            var contenedor=document.getElementById('tareas');
            var fs= document.createElement('fieldSet');
            fs.id='fsDeptos';
            var lg= document.createElement('legend');
            lg.appendChild(document.createTextNode('Listar Departamentos correspondientes a un Tramite'));
            fs.appendChild(lg);
            
            var texto;
            texto=document.createTextNode('Seleccionar Tramite: ');
            fs.appendChild(texto);
            var span;
            span=document.createElement('span');
            span.id='spanListaEscuelas';
            fs.appendChild(span);
            //div
            span=document.createElement('div');
            span.id='divListaResp';
            fs.appendChild(span);
            
            contenedor.appendChild(fs);
            var url='../cliente/tramite.php?opcion=2&opc=3&sid='+Math.random();
            xmlHttp=getXmlHttpObject();
            if(xmlHttp==null)
            {
              alert('no exite soporte para ajax');
              return;
            }
            xmlHttp.onreadystatechange=function(){
              if(xmlHttp.readyState==4 || xmlHttp.readyState=='complete')
                document.getElementById('spanListaEscuelas').innerHTML=xmlHttp.responseText;
              else
                document.getElementById('spanListaEscuelas').innerHTML='<em><label style="color:#f00">Buscando Tramites en el sistema...</em>';
            }
            xmlHttp.open('GET',url,true);
            xmlHttp.send(null);
            
            break;
    case '6':
            limpiarArea('tareas');
            limpiarArea('avisos');
            var contenedor=document.getElementById('tareas');
            var fs= document.createElement('fieldSet');
            fs.id='fsDeptos';
            var lg= document.createElement('legend');
            lg.appendChild(document.createTextNode('Informacion General de un Tramite'));
            fs.appendChild(lg);
            
            var texto;
            texto=document.createTextNode('Seleccionar Tramite: ');
            fs.appendChild(texto);
            var span;
            span=document.createElement('span');
            span.id='spanListaEscuelas';
            fs.appendChild(span);
            //div
            span=document.createElement('div');
            span.id='divListaResp';
            fs.appendChild(span);
            
            contenedor.appendChild(fs);
            
            var url='../cliente/tramite.php?opcion=2&opc=5&sid='+Math.random();
            xmlHttp=getXmlHttpObject();
            if(xmlHttp==null)
            {
              alert('no exite soporte para ajax');
              return;
            }
            xmlHttp.onreadystatechange=function(){
              if(xmlHttp.readyState==4 || xmlHttp.readyState=='complete')
                document.getElementById('spanListaEscuelas').innerHTML=xmlHttp.responseText;
              else
                document.getElementById('spanListaEscuelas').innerHTML='<em><label style="color:#f00">Buscando Tramites en el sistema...</em>';
            }
            xmlHttp.open('GET',url,true);
            xmlHttp.send(null);
            
            
            break;
  }

}


function nuevoRegistroTramite()
{
  if ( _indexPersonal == 5 )
  { 
    var t = document.getElementById('avisos');
    t.innerHTML = 'SCCTC: 5 son el numero maximo de registros a insertar por alta';
    t.style.display='block';
    _indexPersonal = _indexPersonal;
    document.getElementById('btnAgregar').setAttribute('disabled','false');
    return;
  }
  
  
  if (_indexPersonal == 0 )
  { 
    
    var t=document.getElementById('tareas');
    var div = document.createElement('div');
    div.align='right';
    var btnGuardarEscuelas=document.createElement('input');
    btnGuardarEscuelas.type='button';
    btnGuardarEscuelas.value='Guardar Tramites';
    btnGuardarEscuelas.id='btnGuardarEscuelas';
    addEvent(btnGuardarEscuelas,'click',guardarRegistrosTramite,false);
    div.appendChild(document.createElement('p').appendChild(btnGuardarEscuelas));
    t.lastChild.appendChild(div);
   
  }
 
 
  _indexPersonal = _indexPersonal + 1;
  //nuevaLineaTareas('tareas');
  var tdDato;
  var txtDato;
  var lblReg;
  var tr;
  var tdato;
  var btn;
  var tbody=document.getElementById('tbPersonal').getElementsByTagName('tbody')[0];
  tr = document.createElement('tr');
  tdDato = document.createElement('td');
  //tdDato.cellSpan='4';
  tdDato.appendChild(document.createTextNode('Registro ' + _indexPersonal + ' de 5'));
  tr.appendChild(tdDato);
  tbody.appendChild(tr);
  
  tdDato = document.createElement('td');
  txtDato = document.createElement('input');
  txtDato.type='text';
  txtDato.name='nombre' + _indexPersonal;
  txtDato.id='nombre' + _indexPersonal;
  txtDato.size='60';  
  txtDato.maxLength='50';
  tdDato.appendChild(txtDato);
  tr.appendChild(tdDato);
  tbody.appendChild(tr);
  
  
}

function guardarRegistrosTramite()
{
  for(index=1; index <= _indexPersonal; index++)
  {
    var tramite=document.getElementById('nombre'+index).value;
    
    if (tramite.charAt(0)==' ' || tramite=='' )
    {
      document.getElementById('avisos').innerHTML='no se permiten valores nulos. Registro ' + index;
      document.getElementById('avisos').style.display='block';
      return;
    }    
    if (tramite.indexOf("'") != -1)
    {
      document.getElementById('avisos').innerHTML='SCCTC: Error se de insercion. Registro ' + index;
      document.getElementById('avisos').style.display='block';
      return;
    }  
  }
  
  document.getElementById('btnAgregar').setAttribute('disabled','false');
  document.getElementById('btnGuardarEscuelas').setAttribute('disabled','false');
  
  for(index=1; index<= _indexPersonal; index++)
  {
    document.getElementById('nombre'+index).setAttribute('disabled','false');
    
    var tramite=document.getElementById('nombre'+index).value;
    
    xmlHttp=getXmlHttpObject();
    if(xmlHttp==null)
    {
       alert('tu navegador no soporta ajax');
       return;
    }
    var url='../cliente/tramite.php';
    xmlHttp.onreadystatechange=stateChanged;
    xmlHttp.open('POST',url,true);
    xmlHttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xmlHttp.send('opcion=0&nombreTramite=' + tramite);
  
  }
}

function eliminarRegistroTramite()
{
    var idTramite= document.getElementById('slListaPersonal').options[document.getElementById('slListaPersonal').selectedIndex].value;
    if(idTramite==0) return;
    
    
    xmlHttp=getXmlHttpObject();
    if(xmlHttp==null)
    {
      alert('tu navegador no soporta ajax');
      return;
    }
    var url;
    url=url='../cliente/tramite.php';
    url=url + '?opcion=1&idTramite='+idTramite;
    url=url + '&sid=' + Math.random();
    xmlHttp.onreadystatechange=stateChanged;
    xmlHttp.open('GET',url,true);
    xmlHttp.send(null);
    
}

function modificarInfoTramiteMostrar(valor)
{
  if (valor==0) return;
    
  xmlHttp=getXmlHttpObject();
  if(xmlHttp==null)
  {
    alert('tu navegador no soporta ajax');
    return;
  }
  var url;
  url=url='../cliente/tramite.php';
  url=url + '?opcion=3&idTramite='+valor;
  url=url + '&sid=' + Math.random();
  xmlHttp.onreadystatechange=stateChanged;
  xmlHttp.open('GET',url,true);
  xmlHttp.send(null);
    
}
function modificarRegistroTramite()
{
  var idTramite=document.getElementById('txtIdEscuela').value;
  var nombre=document.getElementById('txtNombreEscuela').value;
  
  if (nombre.charAt(0)==' ' || nombre=='')
  {
    document.getElementById('avisos').innerHTML='no se permiten valores nulos. Registro ' + index;
    document.getElementById('avisos').style.display='block';
    return;
  }   
  if (nombre.indexOf("'") != -1)
  {
    document.getElementById('avisos').innerHTML='SCCTC: Error se de insercion. Registro ' + index;
    document.getElementById('avisos').style.display='block';
    return;
  }  

  var url='../cliente/tramite.php';
  url=url + '?opcion=4&idTramite='+idTramite+'&nombreTramite='+nombre;
  url=url + '&sid=' + Math.random();
  xmlHttp=getXmlHttpObject();
  if(xmlHttp==null)
  {
    alert('no existe soporte para ajax');
    return;
  }
  xmlHttp.onreadystatechange=stateChanged;
  
  xmlHttp.open('GET',url,true);
  xmlHttp.send(null);
  
}

function agregarDeptoTramiteMostrar()
{
  listarDeptos('spanListaDeptos',6);
  document.getElementById('spanListaEscuelas').appendChild(document.createTextNode(' Deptos:'));
  var contenedor=document.getElementById('fsDeptos');
  var btn = document.createElement('input');
  document.getElementById('slListaPersonal').setAttribute('disabled','false');
  btn.type='button';
  btn.value='+ Departamento';
  btn.id='addPlanCarreraEscuela';
          
  addEvent(btn,'click',addDeptoTramite,false);
                        
  contenedor.appendChild(document.createTextNode(' '));
  contenedor.appendChild(btn);
  contenedor.appendChild(document.createElement('br'));
  
  
  var tb = document.createElement('table');
  tb.name='tbDepto';
  tb.id='tbDepto';
  tb.align='center';
  tb.border='0';
  tb.cellSpacing='0';
  tb.cellPadding='5';
            
  var tbody=document.createElement('tbody');
  var tr;
  var td;
            
  tr=document.createElement('tr');
  td=document.createElement('th');
  td.appendChild(document.createTextNode('Numero de Registro'));
  tr.appendChild(td);
            
  td=document.createElement('th');
  td.appendChild(document.createTextNode('plan/carrera'));
  tr.appendChild(td);
            
  tbody.appendChild(tr);
  tb.appendChild(tbody);
  contenedor.appendChild(tb);
}
function addDeptoTramite()
{
  if(document.getElementById('slListaDeptos').options[document.getElementById('slListaDeptos').selectedIndex].value==0) return;

  if ( _indexPersonal == 5 )
  { 
    var t = document.getElementById('avisos');
    t.innerHTML = 'SCCTC: 5 son el numero maximo de registros a insertar por alta';
    t.style.display='block';
    _indexPersonal = _indexPersonal;
    document.getElementById('addPlanCarreraEscuela').setAttribute('disabled','false');
    return;
  }
  if (_indexPersonal == 0 )
  { 
    var t=document.getElementById('tareas');
    var div = document.createElement('div');
    div.align='right';
    var btn=document.createElement('input');
    btn.type='button';
    btn.value='Asignar Departamentos';
    btn.id='guardarPlanCarrera';
    addEvent(btn,'click',guardarDeptosTramite,false);
    div.appendChild(document.createElement('p').appendChild(btn));
    t.lastChild.appendChild(div);
  }
  _indexPersonal = _indexPersonal + 1;
  
  var body=document.getElementById('fsDeptos').getElementsByTagName('tbody')[0];
  var tr;
  var td;
  var personal;
  tr=document.createElement('tr');
  td=document.createElement('td');
  td.style.textAlign='right';
  td.appendChild(document.createTextNode('Registro ' + _indexPersonal + ' de 5')); 
  tr.appendChild(td);
  
  personal=document.createElement('input');
  personal.type='text';
  personal.name='plan/Escuela' + _indexPersonal;
  
  personal.id=document.getElementById('slListaDeptos').options[document.getElementById('slListaDeptos').selectedIndex].value;
  personal.value=document.getElementById('slListaDeptos').options[document.getElementById('slListaDeptos').selectedIndex].text;
  personal.size='50';
  personal.maxLength='40';
  personal.disabled='true';
  
  
  
  td=document.createElement('td');
  td.appendChild(personal);
  tr.appendChild(td);
  body.appendChild(tr);
}

function guardarDeptosTramite()
{
  document.getElementById('guardarPlanCarrera').setAttribute('disabled','false');
  document.getElementById('addPlanCarreraEscuela').setAttribute('disabled','false');
  var id;
  var idD;
      
  id=document.getElementById('slListaPersonal').options[document.getElementById('slListaPersonal').selectedIndex].value;
  var personal=document.getElementById('tbDepto').getElementsByTagName('input');
  
  
  for(index=0;index<personal.length; index++)
  {
      idD=personal[index].getAttribute('id');
      
      xmlHttp=getXmlHttpObject();
      if(xmlHttp==null)
      {
        alert('Tu navegador no soporta ajax');
        return;
      }
      var url='../cliente/tramite.php';
      url=url+'?opcion=5'+'&idTramite='+id+'&idDepto='+idD;
      url=url + '&sid='+Math.random();
      xmlHttp.onreadystatechange=stateChanged;
      xmlHttp.open('POST',url,true);
      xmlHttp.send(null);
      
  }

}

function MostrarEliminarDeptosTramite(valor,op)
{
  if(valor==0)
  {
    document.getElementById('divListaResp').innerHTML="";
    return;
  }

  document.getElementById('avisos').style.display='none';
  
  document.getElementById('slListaPersonal').setAttribute('disabled','false');
  xmlHttp=getXmlHttpObject();
  if(xmlHttp==null)
  {
    alert('Tu navegador no soporta ajax');
    return;
  }
  var url='../cliente/tramite.php';
  if(op=='0')
    url=url + '?opcion=6&op=0&idTramite=' + valor + '&sid=' + Math.random();
  if(op=='1')
    url=url + '?opcion=6&op=1&idTramite=' + valor + '&sid=' + Math.random();    

  xmlHttp.onreadystatechange= function (){
    if(xmlHttp.readyState==4 || xmlHttp.readyState=='complete')
    {
      document.getElementById('divListaResp').innerHTML=xmlHttp.responseText;
      //if(op=='0')
      document.getElementById('slListaPersonal').removeAttribute('disabled');
    }
    else
    {
      document.getElementById('divListaResp').innerHTML='<label style="color:#f00"><em>Buscando Departamentos...</em></label>';
    }
  }
  xmlHttp.open('GET',url,true);
  xmlHttp.send(null); 
  
}

function EliminarDeptoTramite()
{
  var idTramite=document.getElementById('slListaPersonal').options[document.getElementById('slListaPersonal').selectedIndex].value;
  var chk=document.getElementById('divListaResp').getElementsByTagName('input');
  
  for(index=0; index < chk.length-1; index++)
  {
    if(document.getElementById('checkbox'+index).checked)
    {
      document.getElementById('checkbox' + index).setAttribute('disabled','false');
      document.getElementById('eliminarDeptosResp').setAttribute('disabled','false');
      
      xmlHttp=getXmlHttpObject();
      if(xmlHttp==null)
      {
        alert('Tu navegador no soporta ajax');
        return;
      }
      
      var idDepto=document.getElementById('checkbox'+index).getAttribute('value');
      
      var url='../cliente/tramite.php';
      url=url + '?opcion=7&idTramite='+idTramite+'&idDepto='+idDepto;
      xmlHttp.onreadystatechange=stateChanged;
      xmlHttp.open('GET',url,true);
      xmlHttp.send(null);
      
    }
  }
}

function infoGralTramite(valor)
{
  if(valor==0) return;
  
  xmlHttp=getXmlHttpObject();
  if(xmlHttp==null)
  {
    alert('no exite soporte de ajax');
    return;
  }
  var url='../cliente/tramite.php';
  url=url + '?opcion=8&idTramite='+valor;
  url=url + '&sid=' + Math.random();
  //xmlHttp.onreadystatechange=stateChanged;
  xmlHttp.onreadystatechange= function() {
    if(xmlHttp.readyState == 4 || xmlHttp.readyState=='complete')
    {
      //document.getElementById('tareas').style.display='block';
      document.getElementById('tareas').innerHTML=xmlHttp.responseText;
      //EliminaMuestraEscuelaPlanCarrera(valor,'0');  
    }
    else
    {
      //document.getElementById('tareas').style.display='block';
      document.getElementById('tareas').innerHTML="buscando...";        
    }
  }
  xmlHttp.open('GET',url,true);
  xmlHttp.send(null);
  
}

//opcion Alumno
function opcionesAlumno(e)
{
 var opcion;
  var op;
  if(window.event)
    op=window.event.srcElement;
  else
    op=e.target;
  opcion=op.id;
  switch(opcion)
  {
    case '0':
              limpiarArea('tareas');
              limpiarArea('avisos');
              var contenedor=document.getElementById('tareas');
              var fs= document.createElement('fieldSet');
              fs.id='fsPersonal';
              var lg= document.createElement('legend');
              lg.appendChild(document.createTextNode('Agregar Nuevo Alumno al Sistema'));
              fs.appendChild(lg);
              var btnAgregar=document.createElement('input');
              btnAgregar.type='button';
              btnAgregar.value='+ Alumno';
              btnAgregar.id='btnAgregar';
              addEvent(btnAgregar,'click',nuevoRegistroAlumno,false);
              
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
            
              tr=document.createElement('tr');
              td=document.createElement('th');
              td.colSpan='3';
              td.appendChild(btnAgregar);            
              tr.appendChild(td);
              tbody.appendChild(tr);
              
              tr=document.createElement('tr');
              td=document.createElement('th');
              td.appendChild(document.createTextNode('Numero de Registro'));
              tr.appendChild(td);
              
              td=document.createElement('th');
              td.colSpan='2';
              td.appendChild(document.createTextNode('Informacion Alumno'));
              tr.appendChild(td);
                           
              tbody.appendChild(tr);
              tb.appendChild(tbody);
              fs.appendChild(tb);
              contenedor.appendChild(fs);    
             
              break;
    case '1':
              limpiarArea('tareas');
              limpiarArea('avisos');
              var contenedor=document.getElementById('tareas');
              var fs= document.createElement('fieldSet');
              fs.id='fsPersonal';
              var lg= document.createElement('legend');
              lg.appendChild(document.createTextNode('Modificar informacion de Alumno'));
              fs.appendChild(lg);
              var btnAgregar=document.createElement('input');
              btnAgregar.type='button';
              btnAgregar.value='Buscar';
              btnAgregar.id='btnAgregar';
              addEvent(btnAgregar,'click',modMostrarRegistroAlumno,false);
              
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
            
              break;
    case '2':
              limpiarArea('tareas');
              limpiarArea('avisos');
              var contenedor=document.getElementById('tareas');
              var fs= document.createElement('fieldSet');
              fs.id='fsPersonal';
              var lg= document.createElement('legend');
              lg.appendChild(document.createTextNode('Mostrar informacion de Alumno'));
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
              break;
    case '3':
            
            AlumnoEstadoTramite();
 
            break;
    case '4':
            CancelarAlumnoEstadoTramite();
            break;
            /*
    case '5':
            
            limpiarArea('tareas');
            limpiarArea('avisos');
            var contenedor=document.getElementById('tareas');
            var fs= document.createElement('fieldSet');
            fs.id='fsDeptos';
            var lg= document.createElement('legend');
            lg.appendChild(document.createTextNode('Listar Departamentos correspondientes a un Tramite'));
            fs.appendChild(lg);
            
            var texto;
            texto=document.createTextNode('Seleccionar Tramite: ');
            fs.appendChild(texto);
            var span;
            span=document.createElement('span');
            span.id='spanListaEscuelas';
            fs.appendChild(span);
            //div
            span=document.createElement('div');
            span.id='divListaResp';
            fs.appendChild(span);
            
            contenedor.appendChild(fs);
            var url='../cliente/tramite.php?opcion=2&opc=3&sid='+Math.random();
            xmlHttp=getXmlHttpObject();
            if(xmlHttp==null)
            {
              alert('no exite soporte para ajax');
              return;
            }
            xmlHttp.onreadystatechange=function(){
              if(xmlHttp.readyState==4 || xmlHttp.readyState=='complete')
                document.getElementById('spanListaEscuelas').innerHTML=xmlHttp.responseText;
              else
                document.getElementById('spanListaEscuelas').innerHTML='<em><label style="color:#f00">Buscando Tramites en el sistema...</em>';
            }
            xmlHttp.open('GET',url,true);
            xmlHttp.send(null);
            
            break;
    case '6':
            limpiarArea('tareas');
            limpiarArea('avisos');
            var contenedor=document.getElementById('tareas');
            var fs= document.createElement('fieldSet');
            fs.id='fsDeptos';
            var lg= document.createElement('legend');
            lg.appendChild(document.createTextNode('Informacion General de un Tramite'));
            fs.appendChild(lg);
            
            var texto;
            texto=document.createTextNode('Seleccionar Tramite: ');
            fs.appendChild(texto);
            var span;
            span=document.createElement('span');
            span.id='spanListaEscuelas';
            fs.appendChild(span);
            //div
            span=document.createElement('div');
            span.id='divListaResp';
            fs.appendChild(span);
            
            contenedor.appendChild(fs);
            
            var url='../cliente/tramite.php?opcion=2&opc=5&sid='+Math.random();
            xmlHttp=getXmlHttpObject();
            if(xmlHttp==null)
            {
              alert('no exite soporte para ajax');
              return;
            }
            xmlHttp.onreadystatechange=function(){
              if(xmlHttp.readyState==4 || xmlHttp.readyState=='complete')
                document.getElementById('spanListaEscuelas').innerHTML=xmlHttp.responseText;
              else
                document.getElementById('spanListaEscuelas').innerHTML='<em><label style="color:#f00">Buscando Tramites en el sistema...</em>';
            }
            xmlHttp.open('GET',url,true);
            xmlHttp.send(null);
            
            
            break;
            */
  }

}

function nuevoRegistroAlumno()
{
  if ( _indexPersonal == 5 )
  { 
    var t = document.getElementById('avisos');
    t.innerHTML = 'SCCTC: 5 son el numero maximo de registros a insertar por alta';
    t.style.display='block';
    _indexPersonal = _indexPersonal;
    document.getElementById('btnAgregar').setAttribute('disabled','false');
    return;
  }
  
  
  if (_indexPersonal == 0 )
  { 
    
    var cuerpo = document.getElementById('tbPersonal').getElementsByTagName('tbody')[0];
    var fila = document.createElement('tr');
    var columna = document.createElement('td');
    fila.appendChild(columna);
    
    columna = document.createElement('td');
    columna.style.backgroundColor="#eee";
    //columna.colSpan='3';
    var sp = document.createElement('span');
    sp.id='spanContenedorListaEscuelas';
    sp.appendChild(document.createTextNode('Escuelas: '));
    columna.appendChild(sp);
    fila.appendChild(columna);
    
    columna = document.createElement('td');
    columna.style.backgroundColor="#eee";
    var sp = document.createElement('span');
    sp.id='spanContenedorListaPC';
    sp.appendChild(document.createTextNode('Plan/Carrera: '));
    columna.appendChild(sp);
    fila.appendChild(columna);
    
    cuerpo.appendChild(fila);
    cboListaEscuelas('spanContenedorListaEscuelas');
    
    
    var t=document.getElementById('tareas');
    var div = document.createElement('div');
    div.align='right';
    var btnGuardarEscuelas=document.createElement('input');
    btnGuardarEscuelas.type='button';
    btnGuardarEscuelas.value='Guardar Alumno';
    btnGuardarEscuelas.id='btnGuardarEscuelas';
    addEvent(btnGuardarEscuelas,'click',guardarRegistrosAlumno,false);
    div.appendChild(document.createElement('p').appendChild(document.createTextNode('* Datos Obligatorios ')));
    div.appendChild(document.createElement('p').appendChild(btnGuardarEscuelas));
    t.lastChild.appendChild(div);
   
  }
 
 
  _indexPersonal = _indexPersonal + 1;
  //nuevaLineaTareas('tareas');
  var tdDato;
  var txtDato;
  var lblReg;
  var tr;
  var tdato;
  var btn;
  var tbody=document.getElementById('tbPersonal').getElementsByTagName('tbody')[0];
  tr = document.createElement('tr');
  tr.style.backgroundColor='#ffd';
  tdDato = document.createElement('td');
  tdDato.rowSpan='6';
  tdDato.appendChild(document.createTextNode('Registro ' + _indexPersonal + ' de 5'));
  tr.appendChild(tdDato);
  
  tdDato = document.createElement('td');
  tdDato.align="right";
  tdDato.colSpan='2';
  tdDato.appendChild(document.createTextNode('* Matricula:'));
  
  txtDato = document.createElement('input');
  txtDato.type='text';
  txtDato.name='matricula' + _indexPersonal;
  txtDato.id='matricula' + _indexPersonal;
  txtDato.size='15';  
  txtDato.maxLength='20';
  tdDato.appendChild(txtDato);
  tr.appendChild(tdDato);
  tbody.appendChild(tr);
  
  tr = document.createElement('tr');
  tr.style.backgroundColor='#cdc';
  tdDato = document.createElement('td');
  
  tdDato.appendChild(document.createTextNode('* Nombres:'));
  
  txtDato = document.createElement('input');
  txtDato.type='text';
  txtDato.name='nombres' + _indexPersonal;
  txtDato.id='nombres' + _indexPersonal;
  txtDato.size='30';  
  txtDato.maxLength='30';
  tdDato.appendChild(txtDato);
  tr.appendChild(tdDato);
  //tbody.appendChild(tr);
  
  tdDato = document.createElement('td');
  tdDato.align="right";
  tdDato.appendChild(document.createTextNode(' * Apellidos:'));
  
  txtDato = document.createElement('input');
  txtDato.type='text';
  txtDato.name='apellidos' + _indexPersonal;
  txtDato.id='apellidos' + _indexPersonal;
  txtDato.size='40';  
  txtDato.maxLength='40';
  tdDato.appendChild(txtDato);
  tr.appendChild(tdDato);
  tbody.appendChild(tr);
  
  
  tr = document.createElement('tr');
  tr.style.backgroundColor='#cdc';
  //tdDato = document.createElement('td');
  tdDato = document.createElement('td');
  //tdDato.cellSpan='4';
  tdDato.appendChild(document.createTextNode('* Escuela:'));
  tdDato.appendChild(document.createElement('br'));
  txtDato = document.createElement('input');
  txtDato.type='text';
  //txtDato.name='revisor' + _indexPersonal;
  txtDato.id='escuela' + _indexPersonal;
  txtDato.size='40'; 
  txtDato.setAttribute('disabled','false');   
  tdDato.appendChild(txtDato);
  /*btn= document.createElement('input');
  btn.type='button';
  btn.value='Asignar';
  btn.name=_indexPersonal;
  btn.id='btnAsignarPC'+ _indexPersonal;
  addEvent(btn,'click',AsignarEscuela,false);
  tdDato.appendChild(btn);
  */
  tr.appendChild(tdDato);
  
  tdDato = document.createElement('td');
  //tdDato.cellSpan='4';
  tdDato.appendChild(document.createTextNode('* Plan/Carrera:'));
  tdDato.appendChild(document.createElement('br'));
  txtDato = document.createElement('input');
  txtDato.type='text';
  //txtDato.name=
  txtDato.id='plancarrera' + _indexPersonal;
  txtDato.size='40'; 
  txtDato.setAttribute('disabled','false');   
  tdDato.appendChild(txtDato);
  btn= document.createElement('input');
  btn.type='button';
  btn.value='Asignar';
  btn.name=_indexPersonal;
  btn.id='btnAsignarPC'+ _indexPersonal;
  addEvent(btn,'click',AsignarPC,false);
  tdDato.appendChild(btn);
  tr.appendChild(tdDato);
  
  /*tdDato = document.createElement('td');
  tdDato.align="center";
  tdDato.appendChild(document.createTextNode(' Plan Carera:'));
  
  txtDato = document.createElement('input');
  txtDato.type='text';
  txtDato.name='tel' + _indexPersonal;
  txtDato.id='tel' + _indexPersonal;
  txtDato.size='30';  
  txtDato.maxLength='30';
  tdDato.appendChild(txtDato);
  tr.appendChild(tdDato);
  */
  tbody.appendChild(tr);
  
  
  
  tr = document.createElement('tr');
  tr.style.backgroundColor='#cdc';
  tdDato = document.createElement('td');
  tdDato.appendChild(document.createTextNode('Mail:'));
  
  txtDato = document.createElement('input');
  txtDato.type='text';
  txtDato.name='mail' + _indexPersonal;
  txtDato.id='mail' + _indexPersonal;
  txtDato.size='30';  
  txtDato.maxLength='30';
  tdDato.appendChild(txtDato);
  tr.appendChild(tdDato);
  //tbody.appendChild(tr);
  
  tdDato = document.createElement('td');
  tdDato.align="right";
  tdDato.appendChild(document.createTextNode(' Tel:'));
  
  txtDato = document.createElement('input');
  txtDato.type='text';
  txtDato.name='tel' + _indexPersonal;
  txtDato.id='tel' + _indexPersonal;
  txtDato.size='30';  
  txtDato.maxLength='30';
  tdDato.appendChild(txtDato);
  tr.appendChild(tdDato);
  tbody.appendChild(tr);
 
 
  tr = document.createElement('tr');
  tr.style.backgroundColor='#cdc';
  
  tdDato = document.createElement('th');
  tdDato.colSpan='2';
  tdDato.appendChild(document.createTextNode('Observaciones'));
  tr.appendChild(tdDato);
  tbody.appendChild(tr);
  
  tr = document.createElement('tr');
  tr.style.backgroundColor='#cdc';
  tdDato = document.createElement('td');
  tdDato.colSpan='2';
  tdDato.align='center';
  txtDato = document.createElement('textarea');
  txtDato.name='obs' + _indexPersonal;
  txtDato.id='obs' + _indexPersonal;
  txtDato.cols='60';
  txtDato.rows='5';
  tdDato.appendChild(txtDato);
  tr.appendChild(tdDato);
  tbody.appendChild(tr);
  
  
}

function cboListaEscuelas(lugar)
{

  //'fsDeptos'
  
  var contenedor=document.getElementById(lugar);
  var span=document.createElement('span');
  span.id='divDeptoListaPersonal';
  contenedor.appendChild(span);
  
  var url;
  url='../cliente/escuela.php';
  url=url + '?opcion=2&opc=5' + '&sid=' + Math.random();
  
  xmlHttp=getXmlHttpObject();
  if(xmlHttp==null)
  {
    alert('tu navegador no soporta ajax');
    return;
  }
  
  xmlHttp.onreadystatechange= function ()
  {
    if(xmlHttp.readyState==4 || xmlHttp.stateState=='complete')
    {
      document.getElementById('divDeptoListaPersonal').innerHTML=xmlHttp.responseText;
      contenedor=document.getElementById('spanContenedorListaPC');
      span=document.createElement('span');
      span.id='divDeptoListaPC';
      contenedor.appendChild(span);
    }
    else
      document.getElementById('divDeptoListaPersonal').innerHTML='<label style="color:#f00"><em>Buscando Escuelas...</em></label>';
  }
  xmlHttp.open('GET',url,true);
  xmlHttp.send(null);
}

function infoPlanCarrera(valor)
{
  if(valor==0)
  {
      document.getElementById('divDeptoListaPC').innerHTML="";
      return;
  }
 
  //var contenedor=document.getElementById('spanContenedorListaPC');
  //var span=document.createElement('span');
  //span.id='divDeptoListaPC';
  //contenedor.appendChild(span);
  
  var url;
  url='../cliente/escuela.php';
  url=url + '?opcion=9&idEscuela='+valor+ '&sid=' + Math.random();
  
  xmlHttp=getXmlHttpObject();
  if(xmlHttp==null)
  {
    alert('tu navegador no soporta ajax');
    return;
  }
  
  xmlHttp.onreadystatechange= function ()
  {
    if(xmlHttp.readyState==4 || xmlHttp.stateState=='complete')
      document.getElementById('divDeptoListaPC').innerHTML=xmlHttp.responseText;
    else
      document.getElementById('divDeptoListaPC').innerHTML='<label style="color:#f00"><em>Buscando Planes/Carreras...</em></label>';
  }
  xmlHttp.open('GET',url,true);
  xmlHttp.send(null); 
  
}

function AsignarPC(e)
{
  var index;
  if(window.event)
    index=window.event.srcElement;
  else
    index=e.target;
  index= index.getAttribute('name');
  
  try
  {
    document.getElementById('plancarrera' + index).value=document.getElementById('slListaPC').options[document.getElementById('slListaPC').selectedIndex].text;  
    document.getElementById('plancarrera' + index).setAttribute('name',document.getElementById('slListaPC').options[document.getElementById('slListaPC').selectedIndex].value);  
  
    document.getElementById('escuela' + index).value=document.getElementById('slListaPersonal').options[document.getElementById('slListaPersonal').selectedIndex].text;
    document.getElementById('escuela' + index).setAttribute('name',document.getElementById('slListaPersonal').options[document.getElementById('slListaPersonal').selectedIndex].value);
  }
  catch(e)  
  {
    return;
  }
}

function guardarRegistrosAlumno()
{
  
  var matricula;
  var nombres;
  var apellidos;
  var mail;
  var tel;
  var obs;
  var idPlanEscuela;
  
  for(index=1; index <= _indexPersonal; index++)
  {
    matricula=document.getElementById('matricula'+index).value;
    nombres=document.getElementById('nombres'+index).value;
    apellidos=document.getElementById('apellidos'+index).value;
    mail=document.getElementById('mail'+index).value;
    tel=document.getElementById('tel'+index).value;
    obs=document.getElementById('obs'+index).value;
    idPlanEscuela=document.getElementById('plancarrera'+index).value;
    
    if (matricula.charAt(0)==' ' || matricula=='' || nombres.charAt(0)==' ' || nombres=='' || apellidos.charAt(0)==' ' || apellidos=='' || idPlanEscuela.charAt(0)==' ' || idPlanEscuela=='')
    {
      document.getElementById('avisos').innerHTML='no se permiten valores nulos. Registro ' + index;
      document.getElementById('avisos').style.display='block';
      return;
    }    
    if (matricula.indexOf("'") != -1 || nombres.indexOf("'") != -1 || apellidos.indexOf("'") != -1 || mail.indexOf("'") != -1 || tel.indexOf("'") != -1 || obs.indexOf("'") != -1)
    {
      document.getElementById('avisos').innerHTML='SCCTC: Error se de insercion. Registro ' + index;
      document.getElementById('avisos').style.display='block';
      return;
    }  
  }
  
  document.getElementById('btnAgregar').setAttribute('disabled','false');
  document.getElementById('btnGuardarEscuelas').setAttribute('disabled','false');
  document.getElementById('slListaPersonal').setAttribute('disabled','false');
  
  for(index=1; index<= _indexPersonal; index++)
  {
    
    matricula=document.getElementById('matricula'+index).value;
    nombres=document.getElementById('nombres'+index).value;
    apellidos=document.getElementById('apellidos'+index).value;
    mail=document.getElementById('mail'+index).value;
    tel=document.getElementById('tel'+index).value;
    obs=document.getElementById('obs'+index).value;
    idPlanEscuela=document.getElementById('plancarrera'+index).getAttribute('name');
    
    document.getElementById('btnAsignarPC'+index).setAttribute('disabled','false');
    
    document.getElementById('matricula'+index).setAttribute('disabled','false');
    document.getElementById('nombres'+index).setAttribute('disabled','false');
    document.getElementById('apellidos'+index).setAttribute('disabled','false');
    document.getElementById('mail'+index).setAttribute('disabled','false');
    document.getElementById('tel'+index).setAttribute('disabled','false');
    document.getElementById('obs'+index).setAttribute('disabled','false');
    
    xmlHttp=getXmlHttpObject();
    if(xmlHttp==null)
    {
       alert('tu navegador no soporta ajax');
       return;
    }
    var url='../cliente/alumno.php';
    xmlHttp.onreadystatechange=stateChanged;
    xmlHttp.open('POST',url,true);
    xmlHttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xmlHttp.send('opcion=0&matricula=' + matricula+'&nombres='+nombres+'&apellidos='+apellidos+'&mail='+mail+'&tel='+tel+'&obs='+obs+'&idPlanEscuela='+idPlanEscuela);
    
  }
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
    
    if(xmlHttp.readyState==4 || xmlHttp.readyState=='complete')
    {
      document.getElementById('spanListadoAlumnos').style.display='block';
      document.getElementById('spanListadoAlumnos').innerHTML=xmlHttp.responseText;
    }
    else
      document.getElementById('spanListadoAlumnos').innerHTML='';
    
  }
  
  xmlHttp.open('POST',url,true);
  xmlHttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
  
  if(obj=='txtNombres')
    xmlHttp.send('opcion=1&nombres=' + dato);
  else
    xmlHttp.send('opcion=1&apellidos=' + dato);
  
}

function modMostrarRegistroAlumno()
{
  var matricula=document.getElementById('txtMatricula').value;
  
  if(matricula.charAt(0)==' ' || matricula.length==0 || matricula.indexOf("'") != -1 || matricula.indexOf(" ") != -1)
  {
    document.getElementById('spanListadoAlumnos').innerHTML='';
    document.getElementById('spanListadoAlumnos').style.display='none';
    return;
  }
  
  var url='../cliente/alumno.php?opcion=2&matricula='+matricula+'&sid='+Math.random();
  xmlHttp=getXmlHttpObject();
  if(xmlHttp==null)
  {
    alert("No existe soporte para Ajax");
    return;
  }
  xmlHttp.onreadystatechange=function()
  {
    document.getElementById('avisos').style.display='block';
    if(xmlHttp.readyState==4 || xmlHttp.readyState=='complete')
    {
      document.getElementById('avisos').innerHTML=xmlHttp.responseText;
      try{ cboListaEscuelas('spanContenedorListaEscuelas'); } catch(e){ }
      
    }
    else
      document.getElementById('avisos').innerHTML='buscando informacion...';
    
  }
  
  xmlHttp.open('GET',url,true);
  xmlHttp.send(null);
  
}

function AsignarPCMod()
{
  
  try
  {
    document.getElementById('plancarrera').value=document.getElementById('slListaPC').options[document.getElementById('slListaPC').selectedIndex].text;  
    document.getElementById('plancarrera').setAttribute('name',document.getElementById('slListaPC').options[document.getElementById('slListaPC').selectedIndex].value);  
  
    document.getElementById('escuela').value=document.getElementById('slListaPersonal').options[document.getElementById('slListaPersonal').selectedIndex].text;
    document.getElementById('escuela').setAttribute('name',document.getElementById('slListaPersonal').options[document.getElementById('slListaPersonal').selectedIndex].value);
  }
  catch(e)  
  {
    return;
  }
}

function btnModificarAlumnos()
{
  var matricula;
  var nombres;
  var apellidos;
  var mail;
  var tel;
  var obs;
  var idPlanEscuela;
  var password;
  
  matricula=document.getElementById('MtxtMatricula').value;
  nombres=document.getElementById('MtxtNombres').value;
  apellidos=document.getElementById('MtxtApellidos').value;
  mail=document.getElementById('MtxtMail').value;
  tel=document.getElementById('MtxtTel').value;
  obs=document.getElementById('MtxtObs').value;
  idPlanEscuela=document.getElementById('plancarrera').getAttribute('name');
  password=document.getElementById('MtxtPass').value;
 
  if (nombres.charAt(0)==' ' || nombres=='' || apellidos.charAt(0)==' ' || apellidos=='' || idPlanEscuela.charAt(0)==' ' || idPlanEscuela=='' || password.charAt(0)==' ' || password=='')
  {
    document.getElementById('avisos').getElementsByTagName('p')[0].innerHTML='no se permiten valores nulos.';
    return;
  }    
  if (nombres.indexOf("'") != -1 || apellidos.indexOf("'") != -1 || mail.indexOf("'") != -1 || tel.indexOf("'") != -1 || obs.indexOf("'") != -1 || password.indexOf("'") != -1)
  {
    document.getElementById('avisos').getElementsByTagName('p')[0].innerHTML='SCCTC: Error se de insercion.';
    return;
  }  
  document.getElementById('avisos').getElementsByTagName('p')[0].innerHTML='';
  
  //document.getElementById('btnAgregar').setAttribute('disabled','false');
  document.getElementById('btnModificarAlumnos').setAttribute('disabled','false');
  document.getElementById('slListaPersonal').setAttribute('disabled','false');
  document.getElementById('btnAsignarPC').setAttribute('disabled','false');
  
  document.getElementById('MtxtMatricula').setAttribute('disabled','false');
  document.getElementById('MtxtNombres').setAttribute('disabled','false');
  document.getElementById('MtxtApellidos').setAttribute('disabled','false');
  document.getElementById('MtxtMail').setAttribute('disabled','false');
  document.getElementById('MtxtTel').setAttribute('disabled','false');
  document.getElementById('MtxtObs').setAttribute('disabled','false');
  document.getElementById('MtxtPass').setAttribute('disabled','false');
  

  
  xmlHttp=getXmlHttpObject();
  if(xmlHttp==null)
  {
     alert('tu navegador no soporta ajax');
     return;
  }
  var url='../cliente/alumno.php';
  xmlHttp.onreadystatechange=stateChanged;
  xmlHttp.open('POST',url,true);
  xmlHttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
  xmlHttp.send('opcion=3&matricula=' + matricula+'&nombres='+nombres+'&apellidos='+apellidos+'&mail='+mail+'&tel='+tel+'&obs='+obs+'&idPlanEscuela='+idPlanEscuela+'&pass='+password);
}

function MostrarRegistroAlumno()
{

  var matricula=document.getElementById('txtMatricula').value;
  
  if(matricula.charAt(0)==' ' || matricula.length==0 || matricula.indexOf("'") != -1 || matricula.indexOf(" ") != -1)
  {
    document.getElementById('spanListadoAlumnos').innerHTML='';
    document.getElementById('spanListadoAlumnos').style.display='none';
    return;
  }
  
  var url='../cliente/alumno.php?opcion=4&matricula='+matricula+'&sid='+Math.random();
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
      document.getElementById('spanListadoAlumnos').innerHTML=xmlHttp.responseText;
    else
      document.getElementById('spanListadoAlumnos').innerHTML='<label style="color:#f00"><em>Buscando informacion...</em></label>';
  }
  
  xmlHttp.open('GET',url,true);
  xmlHttp.send(null);
  
}

function AlumnoEstadoTramite()
{
  //document.getElementById('divTramitesIniciados').innerHTML='';
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
  addEvent(btnAgregar,'click',AlumnosMostrarRegistroAlumno,false);
  
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
  addEvent(txt,'keyup',AlumnoMostrarDatos,false);
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
  addEvent(txt,'keyup',AlumnoMostrarDatos,false);
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
  var div;
  div=document.createElement('div');
  div.style.align='center';
  div.id='divTramitesIniciados';
  div.name='divTramitesIniciados';
  contenedor.appendChild(div);
  
}
/**************/
function AlumnoMostrarDatos(e)
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

function AlumnosMostrarRegistroAlumno()
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


/*Cancelar Tramite*/

function CancelarAlumnoEstadoTramite()
{
  //document.getElementById('divTramitesIniciados').innerHTML='';
  limpiarArea('tareas');
  limpiarArea('avisos');
  var contenedor=document.getElementById('tareas');
  var fs= document.createElement('fieldSet');
  fs.id='fsPersonal';
  var lg= document.createElement('legend');
  lg.appendChild(document.createTextNode('Cancelar Tramites Iniciados por Alumnos'));
  fs.appendChild(lg);
  var btnAgregar=document.createElement('input');
  btnAgregar.type='button';
  btnAgregar.value='Mostrar Informacion';
  btnAgregar.id='btnAgregar';
  addEvent(btnAgregar,'click',CancelarAlumnosMostrarRegistroAlumno,false);
  
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
  addEvent(txt,'keyup',AlumnoMostrarDatos,false);
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
  addEvent(txt,'keyup',AlumnoMostrarDatos,false);
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
  var div;
  div=document.createElement('div');
  div.style.align='center';
  div.id='divTramitesIniciados';
  div.name='divTramitesIniciados';
  contenedor.appendChild(div);
  
}
/**************/
/*
function AlumnoMostrarDatos(e)
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
*/

function CancelarAlumnosMostrarRegistroAlumno()
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
  
  var url='../cliente/documento.php?opcion=12&idAlumno='+matricula+'&sid='+Math.random();
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

function CancelarTramitesAlumno(folio,strTramite)
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
  xmlHttp.send('opcion=13'+'&folio='+folio+'&descripcionTramite='+strTramite);
  
}

function CancelarTramite(folio)
{
  document.getElementById('btnCancelarTramite').setAttribute('disabled','false');
  if(!confirm('Cancelar Tramite'))
    return;
  var url='../cliente/documento.php?opcion=14&folio='+folio+'&sid='+Math.random();
  xmlHttp=getXmlHttpObject();
  if(xmlHttp==null){ alert('no exite soporte para ajax'); return; }
  xmlHttp.onreadystatechange=stateChanged;
  
  //function()
  //{
  //  if(xmlHttp.readyState==4 || xmlHttp.readyState=='complete')
  //    document.getElementById('divTramitesIniciados').innerHTML=xmlHttp.responseText;
  //  else
  //    document.getElementById('divTramitesIniciados').innerHTML='<em><label style="color:#f00">Buscando tramite ' + folio +  ', en el sistema...</em>';
  //}
  
  xmlHttp.open('GET',url,true);
  xmlHttp.send(null);
  
}