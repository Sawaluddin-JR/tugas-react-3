import './CardProduct.css'

const CardProduct = (props) => {
  return (
    <div className="product" onClick={() => {
    return alert("Barang " + props.productName + " Harga " + props.productHarga)}}>
        <img src={props.urlImage} className='image' alt="product" />
        <p>{props.id}</p>
        <p>{props.productName}</p>
        <p>{props.productHarga}</p>
    </div>
  )
}

export default CardProduct