import ReactLoading from 'react-loading';

// Componente loading traido con un paquete de node pero no lo puedo centrar JAJA (lo volvere hacer en un futuro)
export const Loading = ({ type, color }) => {
  return (
    <ReactLoading type={type} color={color} height={'8%'} width={'8%'}/>
  )
}

