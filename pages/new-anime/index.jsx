
import NewAnimeForm from '../../components/animes/NewAnimeForm'

function NewAnime () {

    const addAnimeHandler = (animeData) => {
        console.log(animeData);
    }

    return (
    <NewAnimeForm onAddAnime={addAnimeHandler} />
  )
}

export default NewAnime;