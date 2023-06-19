"use client"

const Error = ({error, reset}) => {
  return (
    <div>Error: {error.message}: <button onClick={reset}>TRy again</button></div>
  )
}
export default Error
