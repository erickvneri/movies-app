import './Search.css';

export function Search({ value, onSearch }) {
  const onChange = (e) => onSearch(e.currentTarget.value);
  return (
    <input
      autoComplete="off"
      className="Search"
      name="search"
      onChange={onChange}
      placeholder="Search ..."
      type="text"
      value={value}
    />
  );
}