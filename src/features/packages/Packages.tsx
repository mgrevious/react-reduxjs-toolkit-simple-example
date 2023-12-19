import React, { useState } from "react";
// import { useActions } from "../../hooks/useActions";
// import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchPackagesAsync } from "./packages-slice";

const Packages: React.FC = () => {
  const [term, setTerm] = useState("");
  // const { searchPackages } = useActions();
  // const { data, error, loading } = useTypedSelector((state) => state.packages);
  const { data, error, loading } = useAppSelector((state) => state.packages);
  // console.log(`data: ${data}, error: ${error}, loading: ${loading}`);
  const dispatch = useAppDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // searchPackages(term);
    dispatch(fetchPackagesAsync(term));
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          value={term}
          onChange={(e) => {
            setTerm(e.target.value);
          }}
        />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>...loading</h3>}
      {!error && !loading && (
        <ul>
          {data.map((pkg, index) => (
            <li key={index}>{pkg}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Packages;
