export function Task ({ initTime, endTime, name, description, onClickHandle }) {
  return (
    <div role='task' onClick={onClickHandle}>
      <p role='interval'>{`${initTime}-${endTime}`}</p>
      <p role='name'>{name}</p>
      <p role='description'>{description}</p>
    </div>
  )
}
