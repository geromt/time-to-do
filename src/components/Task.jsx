export function Task ({ initTime, endTime, name, description }) {
  return (
    <div>
      <p role='interval'>{`${initTime}-${endTime}`}</p>
      <p role='name'>{name}</p>
      <p role='description'>{description}</p>
    </div>
  )
}
