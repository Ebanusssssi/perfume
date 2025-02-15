import About from "../components/Home/About"
import Hero from "../components/Home/Hero"
import Brands from "../components/Home/Brands"
import Steps from "../components/Home/Steps"
import Products from "../components/Home/Products"
import Quiz from "../components/Home/Quiz"
import Social from "../components/Home/Social"

const Home = () => {
  return (
    <div>
      <Hero />
      <Brands />
      <Steps />
      <Products />
      <Quiz />
      <About />
      <Social />
    </div>
  )
}

export default Home