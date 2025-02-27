import Part from './Part';
import Total from './Total';

const Content = ({ course }) => {
  // const result = course.parts.map((e) => e);
  const result = course.map((e) => e.parts);
  console.log(result);

  return (
    <div>
      {/* {course.parts.map((e) => (
        <Part id={e.id} name={e.name} exercises={e.exercises} />
      ))}
      <Total text={course} /> */}
    </div>
  );
};

export default Content;
