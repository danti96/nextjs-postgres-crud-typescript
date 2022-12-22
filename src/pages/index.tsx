import { Tasks } from "src/interface/Tasks";

interface Props {
  tasks: Tasks[]
}

export default function index({ tasks }: Props) {

  return <>{tasks.length === 0 ? <h1>No Tasks</h1> : <h1>Tasks</h1>}</>;
}

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/tasks");
  const tasks = await res.json();

  console.log(tasks)

  return ({
    props: {
      tasks
    },
  });
}