import Navbar from './Navbar';
import Card from './Card';
import Foot from './Footer';
import Sdata from './Sdata';
// let sfun = (val) => {
//   return (
//     <Card
//       imgsrc={val.imgsrc}
//       title={val.title}
//       description={val.description}
//       link={val.link}
//     />
//   )
// }

function App() {
  return (
    <>
      <div className='maincont'>
        <Navbar />
        <div className='box cards'>
          {
            // {Sdata.map(sfun)}
            Sdata.map((val) => {
              return (
                <Card
                  key = {val.id}//to solve this error we use unique key for each child while using map function :::: warning: Each child in a list should have a unique "key" prop.
                  imgsrc={val.imgsrc}
                  title={val.title}
                  description={val.description}
                  link={val.link}
                />
              )
            })
          }
        </div>
        <div className="foot box">
          <Foot />
        </div>
      </div>
    </>
  )
}

export default App;