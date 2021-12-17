export default function Info({ data }) {
  return !data ? (
    "No data"
  ) : (
    <div id="infobox">
      <img src={data.images.sm} alt="Character Info" />
      <ul>
        <li>Name: {data.name}</li>
        <li>Real Name: {data.biography.fullName}</li>
        <li>Gender: {data.appearance.gender}</li>
        <li>Race: {data.appearance.race}</li>
        <li id="hint">Hint: uses ID values, enter a number</li>
      </ul>
    </div>
  );
}
