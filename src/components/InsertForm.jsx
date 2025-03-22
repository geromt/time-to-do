export function InsertForm ({ handleAdd }) {
  return (
    <div role='insert-task-form'>
      <form action={handleAdd} className='grid grid-cols-2 gap-2 px-4'>
        <input className='border-2 border-amber-800 rounded-2xl py-1 px-2 shadow-md focus:outline focus:border-amber-400' name='initTime' type='number' placeholder='start at' />
        <input className='border-2 border-amber-800 rounded-2xl py-1 px-2 shadow-md focus:outline focus:border-amber-400' name='endTime' type='number' placeholder='ends at' />
        <input className='border-2 border-amber-800 rounded-2xl py-1 px-2 shadow-md focus:outline focus:border-amber-400 col-span-2' name='name' type='text' placeholder='name' />
        <input className='border-2 border-amber-800 rounded-2xl py-1 px-2 shadow-md focus:outline focus:border-amber-400 col-span-2' name='description' type='text' placeholder='description' />
        <button className='col-span-2 border-2 border-amber-800 bg-amber-600 py-1 shadow-md rounded-xl hover:scale-105 transition text-amber-100' name='addButton' type='submit'>Add</button>
      </form>
    </div>
  )
}
