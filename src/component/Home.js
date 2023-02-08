import React from 'react';
import Button from 'react-bootstrap/Button';




function Home() {
  return (
    
      
      <><><><h1>Proyectos Desarrollados</h1></><>
      <br />
      <Button variant="outline-primary" href="./Excel.js">Presentacion Ventas</Button>{' '}
      <Button variant="outline-secondary" href="./edit-student">Estadistica Criminal</Button>{' '}
      <Button variant="outline-success" href="./Proyecto1.js">Diagrama de Gantt Power BI</Button>{' '}
      <Button variant="outline-warning" href="./Proyecto2.js">Proyecto 4</Button>{' '}
      <Button variant="outline-danger" href="./Proyecto3.js">Proyecto 5 </Button>{' '}
      <Button variant="outline-info" href="./Proyecto4.js">Proyecto 6</Button>{' '}
      <br/>
      <br></br>
    </></><img
        className="d-block w-100"
        width="300" height="500" src="https://img.lovepik.com/element/45007/1320.png_860.png" alt=" Lo siento esta imagen no se puede mostrar"/></>
  );
}


export default Home;