import './index.css'

const TodoItem = props => {
  const {each, deleteUser} = props
  const {id, title} = each
  const onDeleteUser = () => {
    deleteUser(id)
  }

  return (
    <li className="li-el">
      <p className="paragraph">{title}</p>
      <div>
        <button type="button" className="button" onClick={onDeleteUser}>
          Delete
        </button>
      </div>
    </li>
  )
}
export default TodoItem
