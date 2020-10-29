import phone from "./Assets/images/ol 1.png";
import Header from "./reuseables/header";
import Footer from "./reuseables/footer";

function Home() {
  return (
    <div>
      <div className="App-header">
        <div className="row">
          <Header />
          <div className="row">
            <div className="col-sm-6"></div>
            <div className="col-sm-6">
              <img src={phone} className="phone" alt="phone" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
