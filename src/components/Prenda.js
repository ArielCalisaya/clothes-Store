import React from "react";

class Prenda extends React.Component {
  render() {
    const {
        prenda:{

            _id,
            talla,
            tipo,
            color,
            precio,
            cantidad
        }
    } = this.props;

    return (
    <>
       <li >
           Id: {_id}
       </li>
       <li >
           Talla: {talla}
       </li>
       <li >
           Color: {color}
       </li>
       <li >
           Tipo: {tipo}
       </li>
       <li >
           Precio: {precio}
       </li>
       <li >
           Cantidad: {cantidad}
       </li>

    </>);
  }
}
export default Prenda

    // Crear otra instancia con [corchetes] al parecer da un expected assignment or function call and instead saw and expressions
    //    <p >
    //        {userInComments.map((userComment, commentId) => {
    //            <li key={commentId}>
    //                <userComment comment={userComment}/>
    //             </li>
    //        }) }
    //    </p>