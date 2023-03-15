import algoliasearch from "algoliasearch/lite";
import Image from "next/image";
import Link from "next/link";
import {
  Hits,
  InstantSearch,
  SearchBox,
  useSearchBox,
  UseSearchBoxProps,
} from "react-instantsearch-hooks-web";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID ?? "",
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY ?? "",
);

function Hit({ hit }: any): any {
  // hit is the result of a query

  const slugifyHit = (category: string) => {
    if (category.includes("men")) {
      return "men";
    } else if (category.includes("women")) {
      return "women";
    }

    return category;
  };

  return (
    <div className="p-10 bg-white">
      <Link
        href={`/category/${slugifyHit(hit.category)}`}
        style={{ width: "90%" }}
      >
        <div className="flex">
          <Image
            src={hit.image}
            alt=""
            width={80}
            height={50}
            className="mr-10"
          />
          <h2>{hit.title}</h2>
        </div>

        <div className="flex justify-between p-6">
          <p>Price: ${hit.price}</p>

          <p>In stock : {hit.rating.count}</p>
          <p>Rate: {hit.rating.rate}</p>
        </div>
      </Link>
    </div>
  );
}

function Search() {
  const queryHook: UseSearchBoxProps["queryHook"] = (query, search) => {
    search(query);
  };

  function CustomSearchBox() {
    const { query, refine, clear, isSearchStalled } = useSearchBox({
      queryHook,
    });

    // if there is a query but no hits, then show no match found
    // else, show the Hits

    return (
      <>
        <div className="absolute z-40 transform w-96 left-1/3 top-28">
          {query ? <Hits hitComponent={Hit} /> : null}
        </div>
      </>
    );
  }
  return (
    <InstantSearch searchClient={searchClient} indexName="algo-stores">
      <SearchBox
        placeholder="Search for products"
        autoFocus
        loadingIconComponent={({ classNames }) => (
          <div className={classNames.loadingIcon}>Loading</div>
        )}
      />

      <CustomSearchBox />
    </InstantSearch>
  );
}

export default Search;
