import Header from './Header'

function LandingLayout({ children }) {
  return (
    <div className="landing-wrapper">
      <Header />
      {children}
    </div>
  )
}

export default LandingLayout