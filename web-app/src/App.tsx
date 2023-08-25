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
      <header className='bg-hero bg-cover bg-center bg-no-repeat drop-shadow-2xl'>
        <NavBar />
        <div className=''>
          <p className='text-center p-20'></p>

        </div>
      </header>
      <main>
        <h1 className='text-center'>
          Other Concerts
        </h1>
        
        {loaded ? (

        <>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-5'>
              
              {concerts!.map((concert) => (
              <div  key={concert.id} className='bg-primary-white p-5  rounded-lg drop-shadow-lg'>
                <h2 className='text-card-text-blue'>{concert.name}</h2>
                <p className='pb-2'>{concert.date}</p>
                <p className=''>{concert.info}</p>
              </div>
              ))}
            </div>
            <div className='rounded-lg'>
              <h1 className='text-center text-xl bg-primary-blue bg-opacity-5 p-2'>
                Featured Bands
              </h1>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-5'>

                {bands!.map((band) => (
                  <div className=' bg-primary-white rounded-lg drop-shadow-lg p-5'>
                    <h2 className='pb-2 text-card-text-blue'>{band.name}</h2>
                    <p>{band.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          </>

        ) : (
          <h1>Loading...</h1>
        )}
        

      </main>
      <Footer />
    </>
  )
}

export default App
