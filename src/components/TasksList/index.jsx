export const TasksList = ({ list }) => {
  return (
    <ul className="list">
      {list.map((task) => (
        <li className="list__item" key={task.id}>{task.name}</li>
      ))}
    </ul>
  );
};
