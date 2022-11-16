
import AnimeList from '../components/animes/AnimeList';

function HomePage ({animes}) {

    console.log(animes);
    

    return (
        <AnimeList animes={animes} />
    )
}

export async function getServerSideProps() {
    
    const getAnimes = async () => {
        const res = await fetch('https://dull-tan-gopher-kit.cyclic.app/api/animes',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()
        
        return data
    }
    
    const res = await getAnimes()
    const animes = res

    return {
        props: {
            animes: animes
        }
    }
}

export default HomePage;