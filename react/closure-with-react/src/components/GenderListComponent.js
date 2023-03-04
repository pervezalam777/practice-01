import { filterGender, filterGenderWithNativeForLoop } from '../utils';

function GenderListComponent(props) {
  const { genderList, genderType } = props;

  function renderListItem(item) {
    return (
      <li key={item.name}>
        {item.name} : {item.gender}
      </li>
    )
  }

  const list = filterGenderWithNativeForLoop(genderType, genderList)
  return (
    <>
      <h2>{genderType.toUpperCase()}</h2>
      <ul>
        {
          list.map(renderListItem)
        }
      </ul>
    </>
  )
}

export default GenderListComponent;