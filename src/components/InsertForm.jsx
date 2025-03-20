export function InsertForm ({ handleAdd }) {
  return (
    <div role='insert-task-form'>
      <form>
        <input name='initTime' type='number' placeholder='start at' />
        <input name='endTime' type='numbre' placeholder='ends at' />
        <input name='name' type='text' placeholder='name' />
        <textarea name='description' placeholder='description' />
        <button name='addButton' onClick={handleAdd}>Add</button>
      </form>
    </div>
  )
}
