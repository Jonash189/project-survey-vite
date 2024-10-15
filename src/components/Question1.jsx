export const Question1 = ({ activity, setActivity }) => {
  return (
    <div>
      <h1> Whats your favorite mood boost activity </h1>

      <input
        type="text"
        placeholder="Write your answer here..."
        onChange={(event) => setActivity(event.target.value)}
        value={activity}
        required

      />
    </div>
  );
};