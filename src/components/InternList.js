const InternList = ({ interns }) => {
  return (
    <div className="intern-list">
      <h3>Interns</h3>
      <ol>
        {interns.map(({ firstName, lastName, subject, email }, index) => (
          <li key={index}>
            {firstName} {lastName} - {subject}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default InternList;
