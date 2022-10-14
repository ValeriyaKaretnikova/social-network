import s from "./Paginator.module.css";

const Paginator = (props) => {
  const pagesCount = Math.ceil(props.totalCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={s.pages}>
      {pages.map((p) => {
        return (
          <span
            key={p}
            className={props.currentPage === p ? s.selected : undefined}
            onClick={(e) => {
              props.onPageChanged(p);
            }}
          >
            {p}
          </span>
        );
      })}
    </div>
  );
};

export default Paginator;
