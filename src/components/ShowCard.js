export function ShowCard({ title, images, status }) {
  const statusClass =
    status === 'Finished Airing' ? 'finished  text-center' : ' text-center';

  return (
    <div className="showCard">
      <picture className="showCard__poster">
        <source srcSet={images.webp.image_url} type="image/webp" />
        <img src={images.jpg.image_url} alt={title + ' poster'} />
      </picture>

      <div className="showCard__content">
        <h3 className="showCard__content__title uppercase bg-light clr-dark">
          {title}
        </h3>
        <div className="showCard__content-wrapper">
          <small className={statusClass}>{status}</small>
        </div>
      </div>
    </div>
  );
}

export default ShowCard;
