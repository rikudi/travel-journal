import Navbar from "./components/nav";
import Card from "./components/card"
import data from "./data"
import Footer from "./components/footer";

function App() {

  const cards = data.map(item => {
    return (
      <Card
        title={item.title}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        imageUrl={item.imageUrl}
        />
    )
  })

  return (
    <div className="App">
      <Navbar />
      {cards}
      <Footer />
    </div>
  );
}

export default App;
