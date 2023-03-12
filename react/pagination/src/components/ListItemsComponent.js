
function ListItemsComponent(props) {
  const { items } = props;
  console.log('items', items)
  return (
    <ul>
      {
        items.map((item) => {
          const {id, brandName, catogory, type, price, size} = item;
          return (
            <li key={id}>
              <h3>{brandName}</h3>
              <p>{catogory} : <strong>{type}</strong></p>
              <h4>{price}</h4>
              <div>
                {
                  size.map(siz => (
                    <span key={siz + id}>{siz}</span>
                  ))
                }
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}

export default ListItemsComponent;