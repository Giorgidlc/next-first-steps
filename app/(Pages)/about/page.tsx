const AboutPage = () => {
  return (
    <div>
      <h1>About Page</h1>
      <span>{new Date().getHours()}:{ new Date().getMinutes()}</span>
    </div>
  )
}

export default AboutPage