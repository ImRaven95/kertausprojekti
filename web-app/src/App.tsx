import './main.css'
import { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'



function App() {
  const [bands, setBands] = useState<Band[] | null>(null)
  const [concerts, setConcerts] = useState<Concert[] | null>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
     async function fetchData() {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const res = await Promise.all([fetch('http://localhost:3000/api/concerts'), fetch('http://localhost:3000/api/bands')]) as any;
      const concertsResponse = res[0];
      const bandResponse = res[1];

      const bandData = await bandResponse.json() as Band[];

      let concertData = await concertsResponse.json() as Concert[];
      concertData = concertData.map((concert: Concert) => {
        concert.date = new Date(concert.date).toLocaleDateString()
      return concert;
        
      
    });
      setConcerts(concertData);
      setBands(bandData);
      setLoaded(true);
    }
    fetchData();
  }, [])

  interface Band {
    id: number;
    name: string;
    bio: string;
  }

  interface Concert {
    id: number;
    name: string;
    date: string;
    info: string;
    bands: string;
  }

  return (
    <>
      <NavBar />
      <header>
        <div className='bg-hero bg-cover bg-center bg-no-repeat shadow-lg'>
          <p className='text-center p-20'>Hero</p>

        </div>
      </header>
      <main>
        <h1 className='text-center'>
          Other Concerts
        </h1>
        
        {loaded ? (

        <><div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-5'>
              
              {concerts!.map((concert) => (
              <div  key={concert.id} className='bg-primary-black p-5 text-primary-white rounded-lg'>
                <h2 className=''>{concert.name}</h2>
                <p className='pb-2'>{concert.date}</p>
                <p className=''>{concert.info}</p>
              </div>
              ))}
              

            </div>
              <h1 className='text-center'>
                Featured Bands
              </h1>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-5'>

                {bands!.map((band) => (
                  <div className='bg-primary-black p-5 text-primary-white'>
                    <h2>{band.name}</h2>
                    <p>{band.bio}</p>
                  </div>
                ))}
              </div></>
        ) : (
          <h1>Loading...</h1>
        )}
        

      </main>
      <Footer />
    </>
  )
}

export default App
