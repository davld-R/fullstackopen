import Header from '../components/Header';
import Part from './Part';
import Total from './Total';

const Content = ({ course }) => {
  const halfStack = course[0].parts.map((e) => e.exercises);
  const nodeJS = course[1].parts.map((e) => e.exercises);

  return (
    <div>
      {/* {course.parts.map((e) => (
        <Part id={e.id} name={e.name} exercises={e.exercises} />
      ))}
      <Total text={course} /> */}

      {/* {course.map((element) =>
        element.parts.map((e) => (
          <div>
            <Header id={element.id} text={element.name} />
            <Part id={e.id} name={e.name} exercises={e.exercises} />
          </div>
        ))
      )} */}

      <Header id={1} text={'Web development curriculum'} />
      <Header id={course[0].id} text={course[0].name} />
      {course[0].parts.map((e) => (
        <Part id={e.id} name={e.name} exercises={e.exercises} />
      ))}
      <Total text={halfStack} />
      <Header id={course[1].id} text={course[1].name} />
      {course[1].parts.map((e) => (
        <Part id={e.id} name={e.name} exercises={e.exercises} />
      ))}
      <Total text={nodeJS} />
    </div>
  );
};

export default Content;
