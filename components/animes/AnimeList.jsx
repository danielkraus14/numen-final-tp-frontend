import AnimeItem from './AnimeItem';
import classes from './AnimeList.module.css';

function AnimeList(props) {
  return (
    <ul className={classes.list}>
      {props.animes.map((anime) => (
        <AnimeItem
          key={anime.id}
          id={anime.id}
          image={anime.image}
          title={anime.title}
          description={anime.description}
        />
      ))}
    </ul>
  );
}

export default AnimeList;
