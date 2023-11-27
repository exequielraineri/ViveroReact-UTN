export const ArticuloCategoria = ({ categoria }) => {
  return (
    <article>
      <img
        src={categoria.img}
        alt={categoria.nombre}
      />
      <h4>{categoria.nombre}</h4>
    </article>
  )
}
