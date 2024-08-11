interface Props {
  id: string;
}

const Clock = ({ id }: Props) => {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.toLocaleString("default", { month: "long" });
  let day = date.getDate();

  let currentDate = month + " " + day + ", " + year;

  return <p id={id}>{currentDate}</p>;
};

export default Clock;
