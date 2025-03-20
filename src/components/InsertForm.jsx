export function InsertForm ({ handleAdd }) {
  return (
    <div role='insert-task-form'>
      <form action={handleAdd}>
        <input name='initTime' type='number' placeholder='start at' />
        <input name='endTime' type='number' placeholder='ends at' />
        <input name='name' type='text' placeholder='name' />
        <textarea name='description' placeholder='description' />
        <button name='addButton' type='submit'>Add</button>
      </form>
    </div>
  )
}
