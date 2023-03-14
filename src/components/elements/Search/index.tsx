import algoliasearch from "algoliasearch/lite";
import { useState } from "react";
import { Hits, InstantSearch, SearchBox } from "react-instantsearch-hooks-web";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID ?? "",

  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY ?? "",
);

function Hit({ hit }: any): any {
  // hit is the result of a query

  return JSON.stringify(hit);
}

function Search() {
  const [showHits, setShowHits] = useState(false);
  return (
    <InstantSearch searchClient={searchClient} indexName="algo-stores">
      <SearchBox
        placeholder="Search for products"
        autoFocus
        onFocus={() => setShowHits(true)}
        onBlur={() => setShowHits(false)}
      />
      {showHits && <Hits hitComponent={Hit} />}
    </InstantSearch>
  );
}

export default Search;
