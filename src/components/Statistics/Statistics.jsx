import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  const getRandomColor = function () {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomColor = randomNumber.toString(16).padStart(6, '0');
    return `#${randomColor}`;
  };

  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.stat_list}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={css.item}
              key={id}
              style={{ backgroundColor: getRandomColor() }}
            >
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
