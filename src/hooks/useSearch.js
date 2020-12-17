import React, { useState, useMemo } from "react";
import { Observable, of } from "rxjs";
import { map, catchError, debounceTime, distinctUntilChanged, concatAll } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

const useSearch = () => {
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState("");

  let onSearch = useMemo(() => {
    let onSearch;

    const fetchData = (value) => {
      return ajax.getJSON("https://api.github.com/search/users?q=" + value).pipe(
        map((response) => response.items),
        catchError((e) => of([]))
      );
    };

    let typingStream = new Observable((subscriber) => {
      onSearch = (value) => {
        subscriber.next(value);
        setSearch(value);
      };
    });

    typingStream = typingStream.pipe(
      debounceTime(500),
      map((emittedValue) => emittedValue.trim()),
      distinctUntilChanged(),
      map((value) => (value ? fetchData(value) : of([]))),
      concatAll()
    );

    typingStream.subscribe((value) => setResult(value));

    return onSearch;
  }, []);

  return [result, search, onSearch];
};

export default useSearch;
